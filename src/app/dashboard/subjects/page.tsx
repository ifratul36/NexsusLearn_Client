"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { BookOpen, Users, Clock, Award } from "lucide-react"
import { useUserRole } from "@/hooks/use-user-role"

type StudentSubject = {
  id: number
  name: string
  code: string
  credits: number
  instructor: string
  progress: number
  grade: string
  status: string
  assignments: number
  completedAssignments: number
}

type FacultySubject = {
  id: number
  name: string
  code: string
  credits: number
  students: number
  progress: number
  status: string
  assignments: number
  submissions: number
}

export default function SubjectsPage() {
  const { userRole } = useUserRole()

  const getSubjectsData = (): StudentSubject[] | FacultySubject[] => {
    switch (userRole) {
      case "student":
        return [
          {
            id: 1,
            name: "Data Structures & Algorithms",
            code: "CS301",
            credits: 4,
            instructor: "Dr. Sarah Johnson",
            progress: 75,
            grade: "A-",
            status: "ongoing",
            assignments: 8,
            completedAssignments: 6,
          },
          {
            id: 2,
            name: "Database Management Systems",
            code: "CS302",
            credits: 3,
            instructor: "Prof. Michael Chen",
            progress: 60,
            grade: "B+",
            status: "ongoing",
            assignments: 6,
            completedAssignments: 4,
          },
          {
            id: 3,
            name: "Software Engineering",
            code: "CS303",
            credits: 3,
            instructor: "Dr. Emily Davis",
            progress: 100,
            grade: "A",
            status: "completed",
            assignments: 10,
            completedAssignments: 10,
          },
        ]
      case "faculty":
        return [
          {
            id: 1,
            name: "Data Structures & Algorithms",
            code: "CS301",
            credits: 4,
            students: 45,
            progress: 75,
            status: "ongoing",
            assignments: 8,
            submissions: 360,
          },
          {
            id: 2,
            name: "Advanced Programming",
            code: "CS401",
            credits: 3,
            students: 32,
            progress: 60,
            status: "ongoing",
            assignments: 6,
            submissions: 192,
          },
        ]
      default:
        return []
    }
  }

  const subjects = getSubjectsData()

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Subjects</h1>
        <p className="text-muted-foreground">
          {userRole === "student" ? "Your enrolled subjects" : "Subjects you're teaching"}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {subjects.map((subject) => {
          if (userRole === "student") {
            const studentSubject = subject as StudentSubject
            return (
              <Card key={studentSubject.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{studentSubject.name}</CardTitle>
                    <Badge
                      variant={studentSubject.status === "ongoing" ? "default" : "secondary"}
                    >
                      {studentSubject.status}
                    </Badge>
                  </div>
                  <CardDescription className="flex items-center gap-2">
                    <span>{studentSubject.code}</span>
                    <span>•</span>
                    <span>{studentSubject.credits} Credits</span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="h-4 w-4" />
                      <span>{studentSubject.instructor}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Award className="h-4 w-4" />
                      <span>Current Grade: {studentSubject.grade}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <BookOpen className="h-4 w-4" />
                      <span>
                        {studentSubject.completedAssignments}/{studentSubject.assignments} Assignments
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>{studentSubject.progress}%</span>
                    </div>
                    <Progress value={studentSubject.progress} className="h-2" />
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          } else if (userRole === "faculty") {
            const facultySubject = subject as FacultySubject
            return (
              <Card key={facultySubject.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{facultySubject.name}</CardTitle>
                    <Badge
                      variant={facultySubject.status === "ongoing" ? "default" : "secondary"}
                    >
                      {facultySubject.status}
                    </Badge>
                  </div>
                  <CardDescription className="flex items-center gap-2">
                    <span>{facultySubject.code}</span>
                    <span>•</span>
                    <span>{facultySubject.credits} Credits</span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="h-4 w-4" />
                      <span>{facultySubject.students} Students</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <BookOpen className="h-4 w-4" />
                      <span>{facultySubject.assignments} Assignments</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4" />
                      <span>{facultySubject.submissions} Total Submissions</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>{facultySubject.progress}%</span>
                    </div>
                    <Progress value={facultySubject.progress} className="h-2" />
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1">
                      View Details
                    </Button>
                    <Button size="sm" variant="outline">
                      Manage
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          }
          return null
        })}
      </div>
    </div>
  )
}
