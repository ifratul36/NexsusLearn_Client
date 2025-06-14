"use client"

import { useState } from "react"

export type UserRole = "student" | "faculty" | "guardian" | "admin"

export function useUserRole() {
  const [userRole, setUserRole] = useState<UserRole>("student")

  return {
    userRole,
    setUserRole,
  }
}
