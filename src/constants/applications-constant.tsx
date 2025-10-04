import {
  Briefcase,
  Clock,
  User,
  FileCode,
  PenTool,
  GraduationCap,
  FileText,
  Search,
  Brain,
  UserCheck,
  Users,
  Activity,
  CheckCircle2,
  XCircle,
  LogOut,
} from "lucide-react";

export const HEADER = [
  { key: "company", label: "Company" },
  { key: "position", label: "Position" },
  { key: "type", label: "Type" },
  { key: "status", label: "Status" },
  { key: "appliedAt", label: "Applied At" },
  { key: "lastUpdated", label: "Last Updated" },
  { key: "action", label: "Action" },
];

export const TYPE_OPTIONS = [
  {
    value: "internship",
    label: "Internship",
    icon: GraduationCap,
    className:
      "text-blue-600 bg-blue-100 dark:text-blue-300 dark:bg-blue-900/40",
  },
  {
    value: "full-time",
    label: "Full-time",
    icon: Briefcase,
    className:
      "text-green-600 bg-green-100 dark:text-green-300 dark:bg-green-900/40",
  },
  {
    value: "part-time",
    label: "Part-time",
    icon: Clock,
    className:
      "text-yellow-600 bg-yellow-100 dark:text-yellow-300 dark:bg-yellow-900/40",
  },
  {
    value: "contract",
    label: "Contract",
    icon: FileCode,
    className:
      "text-purple-600 bg-purple-100 dark:text-purple-300 dark:bg-purple-900/40",
  },
  {
    value: "freelance",
    label: "Freelance",
    icon: PenTool,
    className:
      "text-pink-600 bg-pink-100 dark:text-pink-300 dark:bg-pink-900/40",
  },
  {
    value: "apprenticeship",
    label: "Apprenticeship",
    icon: User,
    className:
      "text-orange-600 bg-orange-100 dark:text-orange-300 dark:bg-orange-900/40",
  },
];


export const STATUS_OPTIONS = [
  {
    value: "applied",
    label: "Applied",
    icon: FileText,
    color: "text-blue-600",
  },
  {
    value: "under review",
    label: "Under Review",
    icon: Search,
    color: "text-yellow-600",
  },
  {
    value: "psikotest",
    label: "Psikotest",
    icon: Brain,
    color: "text-purple-600",
  },
  {
    value: "interview hr",
    label: "Interview HR",
    icon: UserCheck,
    color: "text-indigo-600",
  },
  {
    value: "interview user",
    label: "Interview User",
    icon: Users,
    color: "text-teal-600",
  },
  {
    value: "mcu",
    label: "Medical Check Up",
    icon: Activity,
    color: "text-orange-600",
  },
  {
    value: "acc",
    label: "Accepted",
    icon: CheckCircle2,
    color: "text-green-600",
  },
  {
    value: "rejected",
    label: "Rejected",
    icon: XCircle,
    color: "text-red-600",
  },
  {
    value: "withdrawn",
    label: "Withdrawn",
    icon: LogOut,
    color: "text-gray-600",
  },
];

export const APPLICATIONS = [
  {
    id: "1",
    company: "PT Teknologi Nusantara",
    position: "Frontend Developer",
    type: "internship",
    status: "applied",
    appliedAt: "2025-09-10",
    lastUpdated: "2025-09-10",
  },
  {
    id: "2",
    company: "Startup Inovasi Digital",
    position: "Fullstack Engineer",
    type: "full-time",
    status: "under review",
    appliedAt: "2025-09-12",
    lastUpdated: "2025-09-14",
  },
  {
    id: "3",
    company: "Bank Indonesia",
    position: "Data Analyst",
    type: "contract",
    status: "psikotest",
    appliedAt: "2025-09-18",
    lastUpdated: "2025-09-20",
  },
  {
    id: "4",
    company: "E-Commerce XYZ",
    position: "Backend Developer",
    type: "freelance",
    status: "interview hr",
    appliedAt: "2025-09-22",
    lastUpdated: "2025-09-23",
  },
  {
    id: "5",
    company: "Telkom Indonesia",
    position: "Cloud Engineer",
    type: "full-time",
    status: "interview user",
    appliedAt: "2025-09-25",
    lastUpdated: "2025-09-27",
  },
  {
    id: "6",
    company: "Gojek",
    position: "Mobile Developer",
    type: "part-time",
    status: "mcu",
    appliedAt: "2025-09-28",
    lastUpdated: "2025-09-30",
  },
  {
    id: "7",
    company: "Shopee",
    position: "UI/UX Designer",
    type: "internship",
    status: "acc",
    appliedAt: "2025-09-29",
    lastUpdated: "2025-10-01",
  },
  {
    id: "8",
    company: "Traveloka",
    position: "Data Scientist",
    type: "full-time",
    status: "rejected",
    appliedAt: "2025-09-30",
    lastUpdated: "2025-10-02",
  },
  {
    id: "9",
    company: "Bukalapak",
    position: "DevOps Engineer",
    type: "contract",
    status: "withdrawn",
    appliedAt: "2025-10-01",
    lastUpdated: "2025-10-03",
  },
  {
    id: "10",
    company: "Tokopedia",
    position: "Product Manager",
    type: "apprenticeship",
    status: "under review",
    appliedAt: "2025-10-02",
    lastUpdated: "2025-10-04",
  },
];

