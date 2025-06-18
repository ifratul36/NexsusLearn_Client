/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import type * as React from "react"
import {
  GraduationCap,
  Home,
  BarChart3,
  Bell,
  MessageSquare,
  Upload,
  Calendar,
  Settings,
  Users,
  FileText,
  BookOpen,
  Shield,
  Heart,
  Database,
  Activity,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible"
import { ChevronRight } from "lucide-react"
import { useUserRole } from "@/hooks/use-user-role"

const navigationData = {
  student: [
    { title: "Dashboard", url: "/dashboard", icon: Home, isActive: true },
    {
      title: "General Settings",
      url: "/dashboard/settings",
      icon: Settings,
      items: [
        { title: "Institute Profile", url: "/dashboard/settings/institute-profile" },
        { title: "Personal Profile", url: "/dashboard/settings/profile" },
        { title: "Academic Records", url: "/dashboard/settings/academic-records" },
        { title: "Fee Structure", url: "/dashboard/settings/fee-structure" },
        { title: "Theme & Language", url: "/dashboard/settings/theme" },
        { title: "Account Settings", url: "/dashboard/settings/account" },
      ],
    },
    {
      title: "Academic Tasks",
      url: "/dashboard/tasks",
      icon: FileText,
      items: [
        { title: "View Tasks", url: "/dashboard/tasks" },
        { title: "Pending Tasks", url: "/dashboard/tasks/pending" },
        { title: "Completed Tasks", url: "/dashboard/tasks/completed" },
        { title: "Overdue Tasks", url: "/dashboard/tasks/overdue" },
      ],
    },
    {
      title: "Assignments",
      url: "/dashboard/assignments",
      icon: Upload,
      items: [
        { title: "Submit Assignment", url: "/dashboard/assignments/submit" },
        { title: "My Submissions", url: "/dashboard/assignments/submissions" },
        { title: "Grades & Feedback", url: "/dashboard/assignments/grades" },
        { title: "Assignment History", url: "/dashboard/assignments/history" },
      ],
    },
    {
      title: "Analytics",
      url: "/dashboard/analytics",
      icon: BarChart3,
      items: [
        { title: "Performance Charts", url: "/dashboard/analytics/performance" },
        { title: "Academic Progress", url: "/dashboard/analytics/progress" },
        { title: "Subject Analysis", url: "/dashboard/analytics/subjects" },
        { title: "Attendance Report", url: "/dashboard/analytics/attendance" },
      ],
    },
    {
      title: "Classes",
      url: "/dashboard/classes",
      icon: BookOpen,
      items: [
        { title: "Current Classes", url: "/dashboard/classes/current" },
        { title: "Class Schedule", url: "/dashboard/classes/schedule" },
        { title: "Class Materials", url: "/dashboard/classes/materials" },
        { title: "Attendance", url: "/dashboard/classes/attendance" },
      ],
    },
    {
      title: "Subjects",
      url: "/dashboard/subjects",
      icon: BookOpen,
      items: [
        { title: "Enrolled Subjects", url: "/dashboard/subjects/enrolled" },
        { title: "Subject Resources", url: "/dashboard/subjects/resources" },
        { title: "Subject Progress", url: "/dashboard/subjects/progress" },
        { title: "Exam Schedule", url: "/dashboard/subjects/exams" },
      ],
    },
    { title: "Notifications", url: "/dashboard/notifications", icon: Bell, badge: "5" },
    { title: "Messages", url: "/dashboard/messages", icon: MessageSquare, badge: "3" },
    { title: "Calendar", url: "/dashboard/calendar", icon: Calendar },
    { title: "Counseling", url: "/dashboard/counseling", icon: MessageSquare },
  ],
  faculty: [
    { title: "Dashboard", url: "/dashboard", icon: Home, isActive: true },
    {
      title: "General Settings",
      url: "/dashboard/settings",
      icon: Settings,
      items: [
        { title: "Institute Profile", url: "/dashboard/settings/institute-profile" },
        { title: "Faculty Profile", url: "/dashboard/settings/profile" },
        { title: "Department Settings", url: "/dashboard/settings/department" },
        { title: "Course Management", url: "/dashboard/settings/courses" },
        { title: "Grading System", url: "/dashboard/settings/grading" },
        { title: "Theme & Language", url: "/dashboard/settings/theme" },
        { title: "Account Settings", url: "/dashboard/settings/account" },
      ],
    },
    {
      title: "Classes",
      url: "/dashboard/classes",
      icon: BookOpen,
      items: [
        { title: "My Classes", url: "/dashboard/classes/my-classes" },
        { title: "Class Schedule", url: "/dashboard/classes/schedule" },
        { title: "Attendance Management", url: "/dashboard/classes/attendance" },
        { title: "Class Materials", url: "/dashboard/classes/materials" },
        { title: "Live Sessions", url: "/dashboard/classes/live-sessions" },
      ],
    },
    {
      title: "Students",
      url: "/dashboard/students",
      icon: Users,
      items: [
        { title: "Student List", url: "/dashboard/students/list" },
        { title: "Student Performance", url: "/dashboard/students/performance" },
        { title: "Assign Tasks", url: "/dashboard/students/assign-tasks" },
        { title: "Counseling Sessions", url: "/dashboard/students/counseling" },
        { title: "Student Reports", url: "/dashboard/students/reports" },
      ],
    },
    {
      title: "Subjects",
      url: "/dashboard/subjects",
      icon: BookOpen,
      items: [
        { title: "Teaching Subjects", url: "/dashboard/subjects/teaching" },
        { title: "Subject Materials", url: "/dashboard/subjects/materials" },
        { title: "Curriculum Planning", url: "/dashboard/subjects/curriculum" },
        { title: "Assessment Tools", url: "/dashboard/subjects/assessment" },
      ],
    },
    {
      title: "Task Management",
      url: "/dashboard/tasks",
      icon: FileText,
      items: [
        { title: "Create Tasks", url: "/dashboard/tasks/create" },
        { title: "Review Submissions", url: "/dashboard/tasks/review" },
        { title: "Grade Assignments", url: "/dashboard/tasks/grading" },
        { title: "Task Analytics", url: "/dashboard/tasks/analytics" },
      ],
    },
    {
      title: "Analytics",
      url: "/dashboard/analytics",
      icon: BarChart3,
      items: [
        { title: "Class Performance", url: "/dashboard/analytics/class-performance" },
        { title: "Student Analytics", url: "/dashboard/analytics/students" },
        { title: "Subject Reports", url: "/dashboard/analytics/subjects" },
        { title: "Teaching Effectiveness", url: "/dashboard/analytics/teaching" },
      ],
    },
    { title: "Biometric Login", url: "/dashboard/biometric", icon: Shield },
    { title: "Notifications", url: "/dashboard/notifications", icon: Bell, badge: "3" },
    { title: "Messages", url: "/dashboard/messages", icon: MessageSquare, badge: "2" },
    { title: "Calendar", url: "/dashboard/calendar", icon: Calendar },
  ],
  guardian: [
    { title: "Dashboard", url: "/dashboard", icon: Home, isActive: true },
    {
      title: "General Settings",
      url: "/dashboard/settings",
      icon: Settings,
      items: [
        { title: "Institute Profile", url: "/dashboard/settings/institute-profile" },
        { title: "Guardian Profile", url: "/dashboard/settings/profile" },
        { title: "Student Information", url: "/dashboard/settings/student-info" },
        { title: "Communication Preferences", url: "/dashboard/settings/communication" },
        { title: "Theme & Language", url: "/dashboard/settings/theme" },
        { title: "Account Settings", url: "/dashboard/settings/account" },
      ],
    },
    {
      title: "Student Progress",
      url: "/dashboard/student-progress",
      icon: Heart,
      items: [
        { title: "Academic Performance", url: "/dashboard/student-progress/academic" },
        { title: "Attendance Reports", url: "/dashboard/student-progress/attendance" },
        { title: "Behavior Reports", url: "/dashboard/student-progress/behavior" },
        { title: "Grade Reports", url: "/dashboard/student-progress/grades" },
        { title: "Progress Timeline", url: "/dashboard/student-progress/timeline" },
      ],
    },
    {
      title: "Classes",
      url: "/dashboard/classes",
      icon: BookOpen,
      items: [
        { title: "Student's Classes", url: "/dashboard/classes/student-classes" },
        { title: "Class Schedule", url: "/dashboard/classes/schedule" },
        { title: "Teacher Information", url: "/dashboard/classes/teachers" },
        { title: "Class Performance", url: "/dashboard/classes/performance" },
      ],
    },
    {
      title: "Subjects",
      url: "/dashboard/subjects",
      icon: BookOpen,
      items: [
        { title: "Enrolled Subjects", url: "/dashboard/subjects/enrolled" },
        { title: "Subject Performance", url: "/dashboard/subjects/performance" },
        { title: "Subject Teachers", url: "/dashboard/subjects/teachers" },
        { title: "Study Materials", url: "/dashboard/subjects/materials" },
      ],
    },
    {
      title: "Communication",
      url: "/dashboard/communication",
      icon: MessageSquare,
      items: [
        { title: "Teacher Messages", url: "/dashboard/communication/teachers" },
        { title: "School Announcements", url: "/dashboard/communication/announcements" },
        { title: "Parent-Teacher Meetings", url: "/dashboard/communication/meetings" },
        { title: "Counseling Sessions", url: "/dashboard/communication/counseling" },
      ],
    },
    { title: "Biometric Access", url: "/dashboard/biometric", icon: Shield },
    { title: "Notifications", url: "/dashboard/notifications", icon: Bell, badge: "4" },
    { title: "Messages", url: "/dashboard/messages", icon: MessageSquare, badge: "1" },
    { title: "Calendar", url: "/dashboard/calendar", icon: Calendar },
  ],
  admin: [
    { title: "Dashboard", url: "/dashboard", icon: Home, isActive: true },
    {
      title: "General Settings",
      url: "/dashboard/settings",
      icon: Settings,
      items: [
        { title: "Institute Profile", url: "/dashboard/settings/institute-profile" },
        { title: "System Configuration", url: "/dashboard/settings/system" },
        { title: "Fee Structure", url: "/dashboard/settings/fee-structure" },
        { title: "Discount Types", url: "/dashboard/settings/discount-types" },
        { title: "Academic Calendar", url: "/dashboard/settings/academic-calendar" },
        { title: "Rules & Regulations", url: "/dashboard/settings/rules" },
        { title: "Marks Grading", url: "/dashboard/settings/marks-grading" },
        { title: "Theme & Language", url: "/dashboard/settings/theme" },
        { title: "Account Settings", url: "/dashboard/settings/account" },
      ],
    },
    {
      title: "Classes",
      url: "/dashboard/classes",
      icon: BookOpen,
      items: [
        { title: "All Classes", url: "/dashboard/classes/all" },
        { title: "Class Management", url: "/dashboard/classes/management" },
        { title: "Class Schedules", url: "/dashboard/classes/schedules" },
        { title: "Room Allocation", url: "/dashboard/classes/rooms" },
        { title: "Class Reports", url: "/dashboard/classes/reports" },
      ],
    },
    {
      title: "Subjects",
      url: "/dashboard/subjects",
      icon: BookOpen,
      items: [
        { title: "All Subjects", url: "/dashboard/subjects/all" },
        { title: "Subject Management", url: "/dashboard/subjects/management" },
        { title: "Curriculum Planning", url: "/dashboard/subjects/curriculum" },
        { title: "Subject Allocation", url: "/dashboard/subjects/allocation" },
        { title: "Subject Reports", url: "/dashboard/subjects/reports" },
      ],
    },
    {
      title: "Students",
      url: "/dashboard/students",
      icon: Users,
      items: [
        { title: "All Students", url: "/dashboard/students/all" },
        { title: "Student Admissions", url: "/dashboard/students/admissions" },
        { title: "Student Records", url: "/dashboard/students/records" },
        { title: "Student Performance", url: "/dashboard/students/performance" },
        { title: "Student Reports", url: "/dashboard/students/reports" },
      ],
    },
    {
      title: "User Management",
      url: "/dashboard/users",
      icon: Users,
      items: [
        { title: "Faculty Management", url: "/dashboard/users/faculty" },
        { title: "Guardian Management", url: "/dashboard/users/guardians" },
        { title: "Admin Management", url: "/dashboard/users/admins" },
        { title: "Role Permissions", url: "/dashboard/users/permissions" },
        { title: "User Reports", url: "/dashboard/users/reports" },
      ],
    },
    {
      title: "System Analytics",
      url: "/dashboard/analytics",
      icon: BarChart3,
      items: [
        { title: "Usage Statistics", url: "/dashboard/analytics/usage" },
        { title: "Performance Metrics", url: "/dashboard/analytics/performance" },
        { title: "System Reports", url: "/dashboard/analytics/reports" },
        { title: "Data Insights", url: "/dashboard/analytics/insights" },
      ],
    },
    { title: "System Overview", url: "/dashboard/system", icon: Activity },
    { title: "Biometric Management", url: "/dashboard/biometric", icon: Shield },
    { title: "Database Management", url: "/dashboard/database", icon: Database },
    { title: "Notifications", url: "/dashboard/notifications", icon: Bell, badge: "7" },
    { title: "Messages", url: "/dashboard/messages", icon: MessageSquare, badge: "5" },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { userRole, setUserRole } = useUserRole()
  const navItems = navigationData[userRole]

  const getUserInfo = () => {
    switch (userRole) {
      case "student":
        return { name: "John Doe", email: "john.doe@university.edu", avatar: "JD" }
      case "faculty":
        return { name: "Dr. Smith", email: "dr.smith@university.edu", avatar: "DS" }
      case "guardian":
        return { name: "Jane Doe", email: "jane.doe@email.com", avatar: "JD" }
      case "admin":
        return { name: "Admin User", email: "admin@university.edu", avatar: "AU" }
      default:
        return { name: "User", email: "user@university.edu", avatar: "U" }
    }
  }

  const userInfo = getUserInfo()

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <div className="flex items-center">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <GraduationCap className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">NexusLearn</span>
                  <span className="truncate text-xs capitalize">{userRole} Portal</span>
                </div>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems?.map((item) => (
                <Collapsible key={item.title} asChild defaultOpen={item.isActive}>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild tooltip={item.title} isActive={item.isActive}>
                      <a
                        href={item.url}
                        className="flex items-center cursor-pointer hover:bg-accent hover:text-accent-foreground transition-colors"
                      >
                        <item.icon />
                        <span>{item.title}</span>
                        {item.badge && (
                          <Badge variant="secondary" className="ml-auto">
                            {item.badge}
                          </Badge>
                        )}
                        {item.items && (
                          <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                        )}
                      </a>
                    </SidebarMenuButton>
                    {item.items && (
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {item.items?.map((subItem) => (
                            <SidebarMenuSubItem key={subItem.title}>
                              <SidebarMenuSubButton asChild>
                                <a
                                  href={subItem.url}
                                  className="hover:bg-accent hover:text-accent-foreground transition-colors"
                                >
                                  <span>{subItem.title}</span>
                                </a>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    )}
                  </SidebarMenuItem>
                </Collapsible>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="mt-auto">
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="/dashboard/settings" className="flex items-center">
                    <Settings />
                    <span>Settings</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <div className="flex items-center">
                <Avatar className="h-8 w-8 rounded-lg">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                  <AvatarFallback className="rounded-lg">{userInfo.avatar}</AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">{userInfo.name}</span>
                  <span className="truncate text-xs">{userInfo.email}</span>
                </div>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
