import { z } from "zod";
import { PRIORITIES, PROJECT_STATUSES, TASK_STATUSES, USER_ROLES, USER_STATUSES } from "@/lib/constants";

export const loginSchema = z.object({
  email: z.string().email("Enter a valid email address."),
  password: z.string().min(8, "Password must be at least 8 characters.")
});

export const registerSchema = loginSchema.extend({
  name: z.string().min(2, "Name must be at least 2 characters.")
});

export const userSchema = z.object({
  name: z.string().min(2, "Name is required."),
  email: z.string().email("Enter a valid email address."),
  role: z.enum(USER_ROLES),
  status: z.enum(USER_STATUSES),
  department: z.string().min(2, "Department is required.")
});

export const projectSchema = z.object({
  title: z.string().min(3, "Project title is required."),
  description: z.string().min(12, "Add a useful project description."),
  status: z.enum(PROJECT_STATUSES),
  priority: z.enum(PRIORITIES),
  deadline: z.string().min(1, "Deadline is required.")
});

export const taskSchema = z.object({
  title: z.string().min(3, "Task title is required."),
  description: z.string().min(8, "Add a useful task description."),
  status: z.enum(TASK_STATUSES),
  priority: z.enum(PRIORITIES),
  dueDate: z.string().min(1, "Due date is required.")
});

export const settingsSchema = z.object({
  name: z.string().min(2, "Name is required."),
  email: z.string().email("Enter a valid email address."),
  company: z.string().min(2, "Company is required."),
  timezone: z.string().min(2, "Timezone is required.")
});
