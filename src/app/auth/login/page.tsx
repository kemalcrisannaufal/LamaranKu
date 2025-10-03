import { Metadata } from "next";
import Login from "./_components/login";

export const metadata: Metadata = {
  title: "Login",
  description: "Login Page",
};

export default function RegisterPage() {
  return <Login />;
}
