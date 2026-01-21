import { z } from "zod";

export const signupSchema = z.object({
    email: z.string().trim().toLowerCase().email("Invalid email format"),
    password: z
        .string()
        .min(4, "Password must be at least 4 characters long")
        .max(64, "Password too long"),
    name: z
        .string()
        .trim()
        .min(1, "Name cannot be empty")
        .max(16, "Name too long")
        .optional(),
});

export const signinSchema = z.object({
    email: z.string().trim().toLowerCase().email("Invalid email format"),
    password: z
        .string()
        .min(4, "Password must be at least 4 characters long")
        .max(64, "Password too long"),
});

export const addquestionSchema = z.object({
    questionName: z
        .string()
        .min(4, "QuestionName must be at least 4 characters long")
        .max(114, "QuestionName too long"),
    Description: z
        .string()
        .min(155, "Description must be at least 155 characters long")
        .max(555, "Description too long"),
});

export const mainternersSignupSchema = z.object({
    email: z.string().trim().toLowerCase().email("Invalid email format"),
    password: z
        .string()
        .min(4, "Password must be at least 4 characters long")
        .max(64, "Password too long"),
    secretcode: z
        .string()
        .min(10, "secret must be at least 10 characters long")
        .max(10, "secret too long"),
});

export const mainternersSigninSchema = z.object({
    email: z.string().trim().toLowerCase().email("Invalid email format"),
    password: z
        .string()
        .min(4, "Password must be at least 4 characters long")
        .max(64, "Password too long"),
    secretcode: z
        .string()
        .min(10, "secret must be at least 10 characters long")
        .max(10, "secret too long"),
});