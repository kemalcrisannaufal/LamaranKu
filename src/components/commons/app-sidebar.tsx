"use client";

import { SIDEBAR_ITEMS } from "@/constants/sidebar-constant";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";
import { Target, DoorOpen } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export default function AppSidebar() {
  const pathname = usePathname();
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size={"lg"} asChild>
              <div className="font-semibold">
                <div className="flex justify-center items-center bg-primary text-primary-foreground p-2 rounded">
                  <Target className="size-4" />
                </div>
                LamaranKu
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {SIDEBAR_ITEMS.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a
                      href={item.url}
                      className={cn("px-4 py-3 h-auto", {
                        "bg-primary text-primary-foreground":
                          pathname === item.url,
                      })}
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size={"lg"} asChild>
              <div className="font-semibold text-red-600">
                <div className="flex justify-center items-center p-2 rounded">
                  <DoorOpen className="size-4" />
                </div>
                Log Out
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
