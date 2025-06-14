"use client"

import type React from "react"
import { AppSidebar } from "@/components/dashboard/app-sidebar"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"

interface DashboardShellProps {
  children: React.ReactNode
}

export function DashboardShell({ children }: DashboardShellProps) {
  return (
    <SidebarProvider defaultOpen={true}>
      <AppSidebar />
      <SidebarInset>
        <DashboardHeader />
        <div className="flex-1 space-y-4 p-4 md:p-8 pt-6 animate-in fade-in-50 duration-500">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  )
}
