import AppSidebar from "@/components/commons/app-sidebar";
import { DarkModeToggle } from "@/components/commons/dark-mode-toggle";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { ReactNode } from "react";
import DashboardBreadcrumb from "./_components/dashboard-breadcrumb";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="overflow-x-hidden">
        <header className="flex justify-between items-center gap-2 h-16 group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 transition-[width,height] ease-linear shrink-0">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger />
            <DashboardBreadcrumb />
          </div>
          <div className="px-4">
            <DarkModeToggle />
          </div>
        </header>
        <main className="flex flex-col gap-4 p-5 pt-0">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
