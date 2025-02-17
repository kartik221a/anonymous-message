import { z } from 'zod'

export const usernameValidation = z
    .string()
    .min(2, "Username must be atleast 2 characters")
    .max(30, "Username must be no more than 30 characters")
    .regex(/^[a-zA-Z0-9_]+$/, "Username must not contain special characters")


export const signUpSchema = z.object({
    username: usernameValidation,
    email: z.string().email({message: "Invalid email address"}),
    password: z.string()
        .min(8, {message: "Password must be atleast 8 characters"})
        .max(30, {message: "Password must be no more than 30 characters"})
})

