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
    .max(200, "Description must be at most 200 characters."),
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
  difficulty: z.enum(["beginner", "advanced"]),
  image: z
    .file({ message: "Image is required" })
    .max(MAX_FILE_SIZE)
    .mime(ACCEPTED_IMAGE_TYPES),
});

export type CourseFormValues = z.infer<typeof courseSchema>;

export const bookingDetailsSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Full name must be at least 2 characters.")
    .max(100, "Full name must be at most 100 characters."),
  sex: z.enum(["male", "female", "other"]),
  dateOfBirth: z.string().min(1, "Date of birth is required."),
  timeOfBirth: z.string().min(1, "Time of birth is required."),
  placeOfBirth: z
    .string()
    .trim()
    .min(2, "Place of birth must be at least 2 characters.")
    .max(200, "Place of birth must be at most 200 characters."),
  serviceType: z.string().min(1, "Please select a consultation service type."),
  message: z
    .string()
    .trim()
    .max(500, "Message must be at most 500 characters.")
    .optional(),
});

export type BookingDetailsFormValues = z.infer<typeof bookingDetailsSchema>;
