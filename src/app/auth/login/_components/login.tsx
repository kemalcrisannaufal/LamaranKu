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
import { LOGIN_FORM_DEFAULT, loginSchema } from "@/constants/auth-constant";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";

export default function Register() {
  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: LOGIN_FORM_DEFAULT,
  });

  const onSubmit = form.handleSubmit((data) => {});

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>
          Welcome back! Please log in to continue.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={onSubmit} className="space-y-4">
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
              type="password"
              placeholder="password"
            />

            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>

          <p className="mt-4 text-muted-foreground text-sm text-center">
            Don't have an account?{" "}
            <Link
              href="/auth/register"
              className="font-semibold text-black cursor-pointer"
            >
              Register
            </Link>
          </p>
        </Form>
      </CardContent>
    </Card>
  );
}
