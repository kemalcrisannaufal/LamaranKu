import z from "zod";

export const registerSchema = z.object({
  name: z.string().min(1, "Name is required."),
  email: z.string().min(1, "Email is required."),
  password: z.string().min(1, "Password is required."),
  confirmPassword: z.string().min(1, "Confirm Password is required."),
});

export const REGISTER_FORM_DEFAULT = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const loginSchema = z.object({
  email: z.string().min(1, "Email is required."),
  password: z.string().min(1, "Password is required."),
});

export const LOGIN_FORM_DEFAULT = {
  email: "",
  password: "",
};
