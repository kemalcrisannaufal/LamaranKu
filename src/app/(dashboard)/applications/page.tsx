import { Metadata } from "next";
import Applications from "./_components/applications";

export const metadata: Metadata = {
  title: "LamaranKu | Applications",
  description: "Applications Page - List of all applications",
};

export default function ApplicationsPage() {
  return <Applications />;
}
