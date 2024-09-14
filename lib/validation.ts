import { z } from "zod";

const requiredString = z.string().trim().min(1, "This field is required");

export const signUpSchema = z
  .object({
    email: requiredString.email("Invalid email address"),
    username: requiredString.regex(
      /^[a-zA-Z0-9_-]+$/,
      "Only letters, numbers, - and _ allowed",
    ),
    password: requiredString.min(8, "Must be at least 8 characters"),
    confirmPassword: requiredString,
  })
  .refine(
    (values) => {
      return values.password === values.confirmPassword;
    },
    {
      message: "Passwords do not match",
      path: ["confirmPassword"],
    },
  );

export type SignUpValues = z.infer<typeof signUpSchema>;

export const loginSchema = z.object({
  username: requiredString,
  password: requiredString,
});

export type LoginValues = z.infer<typeof loginSchema>;

export const createPostSchema = z.object({
  content: requiredString,
  mediaIds: z.array(z.string()).max(5, "Cannot have more than 5 attachments"),
});

export const updateUserProfileSchema = z.object({
  displayName: requiredString,
  bio: z.string().max(1000, "Must be at most 1000 characters"),
});

export type UpdateUserProfileValues = z.infer<typeof updateUserProfileSchema>;

export const createCommentSchema = z.object({
  content: requiredString,
});

// To be deleted later
export const categorySchema = z.object({
  name: requiredString,
  description: z
    .string()
    .max(1000, "Must be at most 1000 characters")
    .optional(),
  media: z
    .array(z.string())
    .max(1, "Cannot have more than 5 attachments")
    .optional(),
});

export type CategoryType = z.infer<typeof categorySchema>;

export const categoryCreateSchema = z.object({
  name: requiredString,
  description: requiredString,
});
