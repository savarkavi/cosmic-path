"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { useQuery } from "convex/react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  bookingDetailsSchema,
  type BookingDetailsFormValues,
} from "@/lib/zodSchema";
import { servicesData } from "@/lib/constants";
import { api } from "../../../convex/_generated/api";
import BookingCheckoutButton from "@/components/booking/booking-checkout-button";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export function BookingDetailsForm() {
  const user = useQuery(api.users.getMe);
  const router = useRouter();

  const form = useForm<BookingDetailsFormValues>({
    resolver: zodResolver(bookingDetailsSchema),
    defaultValues: {
      fullName: "",
      sex: undefined,
      dateOfBirth: "",
      timeOfBirth: "",
      placeOfBirth: "",
      serviceType: "",
      message: "",
    },
  });

  const formValues = form.watch();
  const isFormValid = form.formState.isValid;

  const handleCheckoutClick = () => {
    form.trigger();

    if (!user?.phone) {
      toast.error("Please complete onboarding first to add your phone number.");
      router.push("/onboarding");
      return false;
    }

    return true;
  };

  return (
    <Card className="mx-auto w-full max-w-2xl shadow-xl">
      <CardHeader>
        <CardTitle className="text-xl">Book a Consultation</CardTitle>
        <CardDescription className="text-lg">
          Please fill in your details to book a consultation session.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          id="booking-details-form"
          onSubmit={form.handleSubmit(handleCheckoutClick)}
        >
          <FieldGroup>
            <Controller
              name="fullName"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="full-name">Full Name</FieldLabel>
                  <Input
                    {...field}
                    id="full-name"
                    placeholder="Enter your full name"
                    autoComplete="name"
                    aria-invalid={fieldState.invalid}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="sex"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="sex">Sex</FieldLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger
                      id="sex"
                      aria-invalid={fieldState.invalid}
                      className="w-full"
                    >
                      <SelectValue placeholder="Select your sex" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <Controller
                name="dateOfBirth"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="date-of-birth">
                      Date of Birth
                    </FieldLabel>
                    <Input
                      {...field}
                      id="date-of-birth"
                      type="date"
                      aria-invalid={fieldState.invalid}
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="timeOfBirth"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="time-of-birth">
                      Time of Birth
                    </FieldLabel>
                    <Input
                      {...field}
                      id="time-of-birth"
                      type="time"
                      aria-invalid={fieldState.invalid}
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </div>

            <Controller
              name="placeOfBirth"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="place-of-birth">
                    Place of Birth
                  </FieldLabel>
                  <Input
                    {...field}
                    id="place-of-birth"
                    placeholder="e.g. Mumbai, Maharashtra, India"
                    autoComplete="off"
                    aria-invalid={fieldState.invalid}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="serviceType"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="service-type">
                    Consultation Service Type
                  </FieldLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger
                      id="service-type"
                      aria-invalid={fieldState.invalid}
                      className="w-full"
                    >
                      <SelectValue placeholder="Select a service type" />
                    </SelectTrigger>
                    <SelectContent>
                      {servicesData.map((service) => (
                        <SelectItem key={service.label} value={service.label}>
                          {service.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="message"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="message">
                    Short Message for the Astrologer (Optional)
                  </FieldLabel>
                  <InputGroup>
                    <InputGroupTextarea
                      {...field}
                      id="message"
                      placeholder="Share any specific concerns or questions you have..."
                      rows={4}
                      className="min-h-24 resize-none"
                      aria-invalid={fieldState.invalid}
                    />
                    <InputGroupAddon align="block-end">
                      <InputGroupText className="tabular-nums">
                        {field.value?.length || 0}/500
                      </InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>
                  <FieldDescription>
                    This is optional. You can share any specific concerns or
                    questions.
                  </FieldDescription>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Field orientation="horizontal" className="w-full justify-end gap-2">
          <Button
            type="button"
            variant="outline"
            onClick={() => form.reset()}
            className="cursor-pointer"
          >
            Reset
          </Button>
          <BookingCheckoutButton
            formData={{
              fullName: formValues.fullName,
              sex: formValues.sex as "male" | "female" | "other",
              dateOfBirth: formValues.dateOfBirth,
              timeOfBirth: formValues.timeOfBirth,
              placeOfBirth: formValues.placeOfBirth,
              serviceType: formValues.serviceType,
              message: formValues.message,
            }}
            userPhone={user?.phone}
            disabled={!isFormValid || user === undefined}
            onSuccess={() => form.reset()}
          />
        </Field>
      </CardFooter>
    </Card>
  );
}
