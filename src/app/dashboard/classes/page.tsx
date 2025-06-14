"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Users, MapPin } from "lucide-react"
import { useUserRole } from "@/hooks/use-user-role"

export default function ClassesPage() {
  const { userRole } = useUserRole()

  const getClassesData = () => {
    switch (userRole) {
      case "student":
        return [
          {
            id: 1,
            name: "Data Structures & Algorithms",
            code: "CS301",
            instructor: "Dr. Sarah Johnson",
            time: "09:00 AM - 10:30 AM",
            room: "Room 101",
            day: "Monday, Wednesday, Friday",
            students: 45,
            status: "active",
          },
          {
            id: 2,
            name: "Database Management Systems",
            code: "CS302",
            instructor: "Prof. Michael Chen",
            time: "11:00 AM - 12:30 PM",
            room: "Room 205",
            day: "Tuesday, Thursday",
            students: 38,
            status: "active",
          },
          {
            id: 3,
            name: "Software Engineering",
            code: "CS303",
            instructor: "Dr. Emily Davis",
            time: "02:00 PM - 03:30 PM",
            room: "Room 301",
            day: "Monday, Wednesday",
            students: 42,
            status: "completed",
          },
        ]
      case "faculty":
        return [
          {
            id: 1,
            name: "Data Structures & Algorithms",
            code: "CS301",
            instructor: "You",
            time: "09:00 AM - 10:30 AM",
            room: "Room 101",
            day: "Monday, Wednesday, Friday",
            students: 45,
            status: "active",
          },
          {
            id: 2,
            name: "Advanced Programming",
            code: "CS401",
            instructor: "You",
            time: "11:00 AM - 12:30 PM",
            room: "Room 205",
            day: "Tuesday, Thursday",
            students: 32,
            status: "active",
          },
        ]
      default:
        return []
    }
  }

  const classes = getClassesData()

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Classes</h1>
        <p className="text-muted-foreground">
          {userRole === "student" ? "Your enrolled classes" : "Classes you're teaching"}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {classes.map((classItem) => (
          <Card key={classItem.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{classItem.name}</CardTitle>
                <Badge variant={classItem.status === "active" ? "default" : "secondary"}>{classItem.status}</Badge>
              </div>
              <CardDescription>{classItem.code}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Users className="h-4 w-4" />
                  <span>{classItem.instructor}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4" />
                  <span>{classItem.time}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4" />
                  <span>{classItem.day}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4" />
                  <span>{classItem.room}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Users className="h-4 w-4" />
                  <span>{classItem.students} students</span>
                </div>
              </div>
              <div className="flex gap-2">
                <Button size="sm" className="flex-1">
                  View Details
                </Button>
                {userRole === "faculty" && (
                  <Button size="sm" variant="outline">
                    Manage
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
