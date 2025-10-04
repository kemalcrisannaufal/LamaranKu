"use client";

import FormInput from "@/components/commons/form-input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import {
  REGISTER_FORM_DEFAULT,
  registerSchema,
} from "@/constants/auth-constant";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { EyeIcon, EyeClosedIcon } from "lucide-react";

export default function Register() {
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });

  const form = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: REGISTER_FORM_DEFAULT,
  });

  const onSubmit = form.handleSubmit((data) => {});

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Register</CardTitle>
        <CardDescription>
          Enter your details to create an account.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={onSubmit} className="space-y-4">
            <FormInput
              form={form}
              name="name"
              label="Name"
              placeholder="Name"
            />

            <FormInput
              form={form}
              name="email"
              label="Email"
              type="email"
              placeholder="Email"
            />

            <FormInput
              form={form}
              name="password"
              label="Password"
              type={showPassword.password ? "text" : "password"}
              placeholder="*******"
              suffixIcon={
                showPassword.password ? (
                  <EyeIcon className="text-muted-foreground" />
                ) : (
                  <EyeClosedIcon className="text-muted-foreground" />
                )
              }
              onClickSuffixIcon={() =>
                setShowPassword((prev) => ({
                  ...prev,
                  password: !prev.password,
                }))
              }
            />

            <FormInput
              form={form}
              name="confirmPassword"
              label="Confirm Password"
              type={showPassword.confirmPassword ? "text" : "password"}
              placeholder="*******"
              suffixIcon={
                showPassword.confirmPassword ? (
                  <EyeIcon className="text-muted-foreground" />
                ) : (
                  <EyeClosedIcon className="text-muted-foreground" />
                )
              }
              onClickSuffixIcon={() =>
                setShowPassword((prev) => ({
                  ...prev,
                  confirmPassword: !prev.confirmPassword,
                }))
              }
            />

            <Button type="submit" className="w-full">
              Register
            </Button>
          </form>

          <p className="mt-4 text-muted-foreground text-sm text-center">
            Already have an account?{" "}
            <Link
              href="/auth/login"
              className="font-semibold text-black cursor-pointer"
            >
              Login
            </Link>
          </p>
        </Form>
      </CardContent>
    </Card>
  );
}
