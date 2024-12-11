import { z } from "zod";

const phoneRegex = /^\+995\s\d{3}\s\d{2}\s\d{2}\s\d{2}$/;

export const teacherSchema = z.object({
  avatar: z.string().url(),
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(phoneRegex, "Invalid phone number format"),
});

export const collegeSchema = z.object({
  logo: z.string().url(),
  name: z.string().min(3, "Name is Required"),
  location: z.string().min(5, "Location is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(phoneRegex, "Invalid phone number format"),
});

export const groupSchema = z.object({
  group_number: z.string().min(3, "Group number is required"),
  college_id: z.string().min(1, "College ID is required"),
  profession_id: z.string().min(1, "Profession ID is required"),
});

export const moduleSchema = z.object({
  code: z.string().min(3, "Code is required"),
  name: z.string().min(3, "Name is required"),
  requirements: z.string().min(3, "requirements	 is required"),
});

export const professionSchema = z.object({
  code: z.string().min(3, "Code is required"),
  name: z.string().min(3, "Name is required"),
  description: z.string().min(3, "Description is required"),
});

export const studentsSchema = z.object({
  name: z.string().min(3, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(phoneRegex, "Invalid phone number format"),
  group_id: z.string().min(1),
});
