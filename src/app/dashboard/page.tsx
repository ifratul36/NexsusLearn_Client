"use client"

import { useUserRole } from "@/hooks/use-user-role"
import { StudentDashboard } from "@/components/dashboard/student/student-dashboard"
import { FacultyDashboard } from "@/components/dashboard/faculty/faculty-dashboard"
import { GuardianDashboard } from "@/components/dashboard/guardian/guardian-dashboard"
import { AdminDashboard } from "@/components/dashboard/admin/admin-dashboard"

export default function DashboardPage() {
  const { userRole } = useUserRole()

  switch (userRole) {
    case "student":
      return <StudentDashboard />
    case "faculty":
      return <FacultyDashboard />
    case "guardian":
      return <GuardianDashboard />
    case "admin":
      return <AdminDashboard />
    default:
      return <StudentDashboard />
  }
}
