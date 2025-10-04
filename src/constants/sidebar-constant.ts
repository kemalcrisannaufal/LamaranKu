import { LayoutDashboard, Briefcase, User, FileText } from "lucide-react";

export const SIDEBAR_ITEMS = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Applications",
    url: "/applications",
    icon: Briefcase,
  },
  {
    title: "Profile",
    url: "/profile",
    icon: User,
  },
  {
    title: "CV Maker",
    url: "/cv-maker",
    icon: FileText,
  },
];
