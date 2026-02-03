"use client";

import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useState } from "react";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  phone: z.string().min(10, {
    message: "Phone number must be at least 10 characters.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

export default function OnboardingPage() {
  const router = useRouter();
  const onBoardUser = useMutation(api.users.onBoardUser);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phone: "",
    },
  });

  async function onSubmit(values: FormValues) {
    setIsSubmitting(true);
    try {
      await onBoardUser({ phone: values.phone });
      toast.success("Phone number saved successfully");
      router.push("/");
    } catch (error) {
      toast.error("Failed to save phone number");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <Card className="mx-auto w-full max-w-md shadow-xl">
        <CardHeader>
          <CardTitle className="text-xl">Welcome!</CardTitle>
          <CardDescription className="text-lg">
            Please enter your phone number to continue.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form id="onboarding-form" onSubmit={form.handleSubmit(onSubmit)}>
            <FieldGroup>
              <Controller
                name="phone"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="phone">Phone Number</FieldLabel>
                    <Input
                      {...field}
                      id="phone"
                      placeholder="+91"
                      aria-invalid={fieldState.invalid}
                    />
                    <FieldDescription>
                      We&apos;ll use this to contact you about your orders.
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
          <Button
            type="submit"
            form="onboarding-form"
            className={cn(
              "w-full cursor-pointer",
              isSubmitting && "cursor-not-allowed",
            )}
            disabled={isSubmitting}
          >
            Save and Continue
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
