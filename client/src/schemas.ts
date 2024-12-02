import { z } from "zod";

const phoneRegex = /^\+995\s\d{3}\s\d{2}\s\d{2}\s\d{2}$/;

export const teacherSchema = z.object({
  avatar: z.string().url(),
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(phoneRegex, "Invalid phone number format"),
});
