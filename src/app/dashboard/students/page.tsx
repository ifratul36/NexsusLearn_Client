"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Mail, Phone, GraduationCap, Award } from "lucide-react"
import { useUserRole } from "@/hooks/use-user-role"
import { useState } from "react"

export default function StudentsPage() {
  const { userRole } = useUserRole()
  const [searchTerm, setSearchTerm] = useState("")
  const [filterClass, setFilterClass] = useState("all")

  const studentsData = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@university.edu",
      phone: "+1 234 567 8901",
      studentId: "CS2021001",
      class: "CS-A",
      semester: "6th",
      gpa: 3.8,
      attendance: 92,
      status: "active",
      avatar: "JD",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@university.edu",
      phone: "+1 234 567 8902",
      studentId: "CS2021002",
      class: "CS-A",
      semester: "6th",
      gpa: 3.9,
      attendance: 95,
      status: "active",
      avatar: "JS",
    },
    {
      id: 3,
      name: "Mike Johnson",
      email: "mike.johnson@university.edu",
      phone: "+1 234 567 8903",
      studentId: "CS2021003",
      class: "CS-B",
      semester: "6th",
      gpa: 3.6,
      attendance: 88,
      status: "active",
      avatar: "MJ",
    },
    {
      id: 4,
      name: "Sarah Wilson",
      email: "sarah.wilson@university.edu",
      phone: "+1 234 567 8904",
      studentId: "CS2021004",
      class: "CS-B",
      semester: "6th",
      gpa: 3.7,
      attendance: 90,
      status: "active",
      avatar: "SW",
    },
  ]

  const filteredStudents = studentsData.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.studentId.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesClass = filterClass === "all" || student.class === filterClass
    return matchesSearch && matchesClass
  })

  if (userRole !== "faculty" && userRole !== "admin") {
    return (
      <div className="flex items-center justify-center h-96">
        <Card className="w-full max-w-md text-center">
          <CardHeader>
            <CardTitle>Access Restricted</CardTitle>
            <CardDescription>This page is only accessible to faculty and administrators.</CardDescription>
          </CardHeader>
        </Card>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Students</h1>
        <p className="text-muted-foreground">Manage and view student information</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search students..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={filterClass} onValueChange={setFilterClass}>
          <SelectTrigger className="w-full sm:w-48">
            <SelectValue placeholder="Filter by class" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Classes</SelectItem>
            <SelectItem value="CS-A">CS-A</SelectItem>
            <SelectItem value="CS-B">CS-B</SelectItem>
            <SelectItem value="CS-C">CS-C</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredStudents.map((student) => (
          <Card key={student.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src="/placeholder.svg?height=48&width=48" alt={student.name} />
                  <AvatarFallback>{student.avatar}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <CardTitle className="text-lg">{student.name}</CardTitle>
                  <CardDescription>{student.studentId}</CardDescription>
                </div>
                <Badge variant={student.status === "active" ? "default" : "secondary"}>{student.status}</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="h-4 w-4" />
                  <span className="truncate">{student.email}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="h-4 w-4" />
                  <span>{student.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <GraduationCap className="h-4 w-4" />
                  <span>
                    {student.class} - {student.semester} Semester
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Award className="h-4 w-4" />
                  <span>
                    GPA: {student.gpa} | Attendance: {student.attendance}%
                  </span>
                </div>
              </div>

              <div className="flex gap-2">
                <Button size="sm" className="flex-1">
                  View Profile
                </Button>
                <Button size="sm" variant="outline">
                  Message
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredStudents.length === 0 && (
        <Card className="text-center py-8">
          <CardContent>
            <p className="text-muted-foreground">No students found matching your criteria.</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
