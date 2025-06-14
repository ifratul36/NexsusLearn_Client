/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Plus, ChevronLeft, ChevronRight } from "lucide-react"
// import { useState } from "react"

export default function CalendarPage() {
  // const [currentDate, setCurrentDate] = useState(new Date())

  const events = [
    {
      id: 1,
      title: "Data Structures Assignment Due",
      date: "2024-12-20",
      time: "11:59 PM",
      type: "assignment",
      location: "Online Submission",
      description: "Submit binary search tree implementation",
    },
    {
      id: 2,
      title: "Physics Lab Session",
      date: "2024-12-19",
      time: "2:00 PM - 4:00 PM",
      type: "class",
      location: "Physics Lab 101",
      description: "Pendulum experiment and data collection",
    },
    {
      id: 3,
      title: "Counseling Session",
      date: "2024-12-20",
      time: "2:00 PM - 3:00 PM",
      type: "counseling",
      location: "Counseling Center",
      description: "Academic support session with Dr. Wilson",
    },
    {
      id: 4,
      title: "Tech Fest Registration Deadline",
      date: "2024-12-15",
      time: "11:59 PM",
      type: "event",
      location: "Online",
      description: "Last day to register for annual tech fest",
    },
    {
      id: 5,
      title: "Mathematics Quiz",
      date: "2024-12-18",
      time: "10:00 AM - 11:00 AM",
      type: "exam",
      location: "Room 205",
      description: "Calculus chapter 5 quiz",
    },
  ]

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case "assignment":
        return "destructive"
      case "exam":
        return "default"
      case "class":
        return "secondary"
      case "counseling":
        return "outline"
      case "event":
        return "outline"
      default:
        return "secondary"
    }
  }

  const getEventTypeIcon = (type: string) => {
    switch (type) {
      case "assignment":
        return "📝"
      case "exam":
        return "📊"
      case "class":
        return "🎓"
      case "counseling":
        return "💬"
      case "event":
        return "🎉"
      default:
        return "📅"
    }
  }

  const upcomingEvents = events
    .filter((event) => new Date(event.date) >= new Date())
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, 5)

  const todayEvents = events.filter((event) => new Date(event.date).toDateString() === new Date().toDateString())

  return (
    <div className="space-y-6 animate-in fade-in-50 duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Calendar</h1>
          <p className="text-muted-foreground">Manage your academic schedule and important dates.</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add Event
        </Button>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Calendar View */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>December 2024</CardTitle>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm">
                  Today
                </Button>
                <Button variant="outline" size="sm">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-7 gap-2 mb-4">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div key={day} className="p-2 text-center text-sm font-medium text-muted-foreground">
                  {day}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-2">
              {Array.from({ length: 35 }, (_, i) => {
                const date = new Date(2024, 11, i - 6) // December 2024, starting from appropriate day
                const dayNumber = date.getDate()
                const isCurrentMonth = date.getMonth() === 11
                const isToday = date.toDateString() === new Date().toDateString()
                const hasEvents = events.some((event) => new Date(event.date).toDateString() === date.toDateString())

                return (
                  <div
                    key={i}
                    className={`p-2 h-20 border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors ${
                      isToday ? "bg-primary/10 border-primary" : ""
                    } ${!isCurrentMonth ? "text-muted-foreground bg-muted/20" : ""}`}
                  >
                    <div className="text-sm font-medium">{dayNumber}</div>
                    {hasEvents && (
                      <div className="mt-1">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* Today's Events */}
        <Card>
          <CardHeader>
            <CardTitle>Todays Events</CardTitle>
            <CardDescription>{new Date().toLocaleDateString()}</CardDescription>
          </CardHeader>
          <CardContent>
            {todayEvents.length === 0 ? (
              <div className="text-center py-8">
                <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">No events scheduled for today</p>
              </div>
            ) : (
              <div className="space-y-3">
                {todayEvents.map((event) => (
                  <div key={event.id} className="p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg">{getEventTypeIcon(event.type)}</span>
                        <h4 className="font-medium text-sm">{event.title}</h4>
                      </div>
                      <Badge variant={getEventTypeColor(event.type) as any} className="text-xs">
                        {event.type}
                      </Badge>
                    </div>
                    <div className="space-y-1 text-xs text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-3 w-3" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Upcoming Events */}
      <Card>
        <CardHeader>
          <CardTitle>Upcoming Events</CardTitle>
          <CardDescription>Your next scheduled activities and deadlines</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="hover:shadow-md transition-all duration-200">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="text-2xl">{getEventTypeIcon(event.type)}</div>
                      <div>
                        <h4 className="font-semibold">{event.title}</h4>
                        <p className="text-sm text-muted-foreground">{event.description}</p>
                      </div>
                    </div>
                    <Badge variant={getEventTypeColor(event.type) as any}>{event.type}</Badge>
                  </div>

                  <div className="grid gap-2 md:grid-cols-3">
                    <div className="flex items-center space-x-2 text-sm">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(event.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Clock className="h-4 w-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <MapPin className="h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <div className="flex justify-end space-x-2 mt-4">
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                    <Button size="sm">View Details</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
