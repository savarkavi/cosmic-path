import { z } from "zod";

const MAX_FILE_SIZE = 2 * 1024 * 1024;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const courseSchema = z.object({
  title: z
    .string()
    .trim()
    .min(2, "Title must be at least 2 characters.")
    .max(60, "Title must be at most 60 characters."),
  description: z
    .string()
    .trim()
    .min(10, "Description must be at least 10 characters.")
    .max(100, "Description must be at most 200 characters."),
  about: z
    .string()
    .trim()
    .min(50, "About must be at least 50 characters.")
    .max(1500, "Description must be at most 1500 characters."),
  price: z.coerce.number<number>().min(0, "Price must be a positive number."),
  discount: z.coerce
    .number<number>()
    .min(0, "Discount cannot be negative.")
    .max(100, "Discount cannot exceed 100.")
    .optional(),
  duration: z
    .string()
    .min(1, "Please specify the course length (e.g., '12 Hours')."),
  image: z
    .file({ message: "Image is required" })
    .max(MAX_FILE_SIZE)
    .mime(ACCEPTED_IMAGE_TYPES),
});

export type CourseFormValues = z.infer<typeof courseSchema>;
