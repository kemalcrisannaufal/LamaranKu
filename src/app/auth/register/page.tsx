import { Metadata } from "next";
import Register from "./_components/register";

export const metadata: Metadata = {
  title: "Register",
  description: "Register Page",
};

export default function RegisterPage() {
  return <Register />;
}
