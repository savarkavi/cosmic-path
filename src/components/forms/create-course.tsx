"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { Upload, X } from "lucide-react";
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

import { courseSchema, type CourseFormValues } from "../../lib/zodSchema";
import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";

export function CreateCourseForm() {
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const generateUploadUrl = useMutation(api.courses.generateUploadUrl);
  const createCourse = useMutation(api.courses.createCourse);

  const form = useForm<CourseFormValues>({
    resolver: zodResolver(courseSchema),
    defaultValues: {
      title: "",
      description: "",
      about: "",
      price: 0,
      discount: 0,
      duration: "",
    },
  });

  async function onSubmit(data: CourseFormValues) {
    setIsSubmitting(true);

    const promise = (async () => {
      const postUrl = await generateUploadUrl();

      const result = await fetch(postUrl, {
        method: "POST",
        headers: { "Content-Type": data.image!.type },
        body: data.image,
      });

      if (!result.ok) {
        throw new Error(`Upload failed: ${result.statusText}`);
      }

      const { storageId } = await result.json();

      await createCourse({
        title: data.title,
        description: data.description,
        about: data.about,
        price: data.price,
        discount: data.discount,
        duration: data.duration,
        imageId: storageId,
      });
    })();

    toast.promise(promise, {
      loading: "Creating the course...",
      success: "Course created successfully!",
      error: (error) => {
        console.log(error);
        return "Failed to create the course";
      },
    });

    promise
      .then(() => {
        form.reset();
        setImagePreviewUrl(null);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  }

  return (
    <Card className="mx-auto w-full max-w-2xl shadow-xl">
      <CardHeader>
        <CardTitle className="text-xl">Create New Course</CardTitle>
        <CardDescription className="text-lg">
          Add a new astrology course to your catalog.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form id="create-course-form" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              name="title"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="course-title">Course Title</FieldLabel>
                  <Input
                    {...field}
                    id="course-title"
                    placeholder="e.g. Advanced Vedic Astrology"
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
              name="description"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="course-desc">Description</FieldLabel>
                  <InputGroup>
                    <InputGroupTextarea
                      {...field}
                      id="course-desc"
                      placeholder="A small description about this course."
                      rows={4}
                      className="min-h-20 resize-none"
                      aria-invalid={fieldState.invalid}
                    />
                    <InputGroupAddon align="block-end">
                      <InputGroupText className="tabular-nums">
                        {field.value?.length || 0}/100
                      </InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="about"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="course-about">
                    About the Course
                  </FieldLabel>
                  <InputGroup>
                    <InputGroupTextarea
                      {...field}
                      id="course-about"
                      placeholder="What will students learn in this course?"
                      rows={4}
                      className="min-h-36 resize-none"
                      aria-invalid={fieldState.invalid}
                    />
                    <InputGroupAddon align="block-end">
                      <InputGroupText className="tabular-nums">
                        {field.value?.length || 0}/1500
                      </InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>
                  <FieldDescription>
                    Include specific topics covered and requirements.
                  </FieldDescription>
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
                    <FieldLabel htmlFor="course-price">Price (₹)</FieldLabel>
                    <Input
                      {...field}
                      id="course-price"
                      type="number"
                      placeholder="10,000"
                      aria-invalid={fieldState.invalid}
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="discount"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="discount">Discount (%)</FieldLabel>
                    <Input
                      {...field}
                      id="discount"
                      type="number"
                      placeholder="10 %"
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
                    <FieldLabel htmlFor="course-duration">Duration</FieldLabel>
                    <Input
                      {...field}
                      id="course-duration"
                      placeholder="e.g. 3 weeks"
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
              name="image"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Course Thumbnail</FieldLabel>
                  <div className="flex w-full items-center justify-center">
                    <label
                      htmlFor="dropzone-file"
                      className={cn(
                        "hover:bg-muted/50 border-muted-foreground/25 flex h-44 w-full flex-col items-center justify-center rounded-lg border-2 border-dashed transition-colors",
                        imagePreviewUrl ? "cursor-auto" : "cursor-pointer",
                      )}
                    >
                      {imagePreviewUrl ? (
                        <div className="relative h-full w-full">
                          <Image
                            src={imagePreviewUrl}
                            alt="preview"
                            fill
                            className="object-cover"
                          />
                          <Button
                            className="absolute top-2 right-2 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-white"
                            onClick={(e) => {
                              e.preventDefault();
                              field.onChange(undefined);
                              setImagePreviewUrl(null);
                            }}
                          >
                            <X />
                          </Button>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <Upload className="text-muted-foreground mb-3 h-8 w-8" />
                          <p className="text-muted-foreground mb-1 text-sm">
                            <span className="font-semibold">
                              Click to upload
                            </span>
                            or drag and drop
                          </p>
                          <p className="text-muted-foreground text-xs">
                            SVG, PNG, JPG (MAX. 800x400px)
                          </p>
                        </div>
                      )}
                      <input
                        disabled={!!imagePreviewUrl}
                        id="dropzone-file"
                        type="file"
                        className="hidden"
                        accept="image/*"
                        ref={field.ref}
                        onBlur={field.onBlur}
                        onChange={(e) => {
                          const file = e.target.files?.[0] ?? undefined;
                          field.onChange(file);

                          if (file)
                            setImagePreviewUrl(URL.createObjectURL(file));
                          else {
                            setImagePreviewUrl(null);
                          }
                        }}
                      />
                    </label>
                  </div>
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
            form="create-course-form"
            className={cn(
              "cursor-pointer",
              isSubmitting && "cursor-not-allowed",
            )}
          >
            Create Course
          </Button>
        </Field>
      </CardFooter>
    </Card>
  );
}
