"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";

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

import { webinarSchema, type WebinarFormValues } from "../../lib/zodSchema";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";

export function CreateWebinarForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const createWebinar = useMutation(api.webinars.createWebinar);

  const form = useForm<WebinarFormValues>({
    resolver: zodResolver(webinarSchema),
    defaultValues: {
      title: "",
      headline: "",
      description: "",
      price: 0,
      duration: 120,
      date: "",
      time: "",
    },
  });

  async function onSubmit(data: WebinarFormValues) {
    setIsSubmitting(true);

    const scheduledAt = `${data.date}T${data.time}:00+05:30`;

    const promise = createWebinar({
      title: data.title,
      headline: data.headline,
      description: data.description,
      price: data.price,
      duration: data.duration,
      scheduledAt,
    });

    toast.promise(promise, {
      loading: "Creating the webinar...",
      success: "Webinar created successfully!",
      error: (error) => {
        console.log(error);
        return "Failed to create the webinar";
      },
    });

    promise
      .then(() => {
        form.reset();
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  }

  return (
    <Card className="mx-auto w-full max-w-2xl shadow-xl">
      <CardHeader>
        <CardTitle className="text-xl">Create New Webinar</CardTitle>
        <CardDescription className="text-lg">
          Schedule a new astrology webinar.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form id="create-webinar-form" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              name="title"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="webinar-title">
                    Webinar Title
                  </FieldLabel>
                  <Input
                    {...field}
                    id="webinar-title"
                    placeholder="e.g. Vedic Astrology Introduction Webinar"
                    autoComplete="off"
                    aria-invalid={fieldState.invalid}
                  />
                  <FieldDescription>
                    Short name used in URLs and webinar listings.
                  </FieldDescription>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="headline"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="webinar-headline">
                    Page Headline
                  </FieldLabel>
                  <Input
                    {...field}
                    id="webinar-headline"
                    placeholder="e.g. Start Your Astrology Journey at Cosmic Path"
                    autoComplete="off"
                    aria-invalid={fieldState.invalid}
                  />
                  <FieldDescription>
                    The large hero text displayed on the webinar page.
                  </FieldDescription>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="description"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="webinar-desc">Description</FieldLabel>
                  <InputGroup>
                    <InputGroupTextarea
                      {...field}
                      id="webinar-desc"
                      placeholder="A brief description about this webinar."
                      rows={4}
                      className="min-h-20 resize-none"
                      aria-invalid={fieldState.invalid}
                    />
                    <InputGroupAddon align="block-end">
                      <InputGroupText className="tabular-nums">
                        {field.value?.length || 0}/300
                      </InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <Controller
                name="price"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="webinar-price">Price (₹)</FieldLabel>
                    <Input
                      {...field}
                      id="webinar-price"
                      type="number"
                      placeholder="99"
                      aria-invalid={fieldState.invalid}
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              <Controller
                name="duration"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="webinar-duration">
                      Duration (minutes)
                    </FieldLabel>
                    <Input
                      {...field}
                      id="webinar-duration"
                      type="number"
                      placeholder="120"
                      aria-invalid={fieldState.invalid}
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <Controller
                name="date"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="webinar-date">Date</FieldLabel>
                    <Input
                      {...field}
                      id="webinar-date"
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
                name="time"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="webinar-time">Time (IST)</FieldLabel>
                    <Input
                      {...field}
                      id="webinar-time"
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
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Field orientation="horizontal" className="w-full justify-end gap-2">
          <Button
            disabled={isSubmitting}
            type="button"
            variant="outline"
            onClick={() => form.reset()}
            className="cursor-pointer"
          >
            Reset
          </Button>
          <Button
            disabled={isSubmitting}
            type="submit"
            form="create-webinar-form"
            className={cn(
              "cursor-pointer",
              isSubmitting && "cursor-not-allowed",
            )}
          >
            Create Webinar
          </Button>
        </Field>
      </CardFooter>
    </Card>
  );
}
