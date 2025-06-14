/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { X, CheckCircle, AlertTriangle, Info, Calendar } from "lucide-react"

export default function NotificationsPage() {
  const notifications = [
    {
      id: 1,
      title: "Assignment Due Tomorrow",
      message: "Data Structures assignment is due tomorrow at 11:59 PM. Make sure to submit on time.",
      type: "urgent",
      time: "2 hours ago",
      unread: true,
      icon: AlertTriangle,
    },
    {
      id: 2,
      title: "Grade Posted",
      message: "Your Physics quiz grade has been posted. You scored 92/100.",
      type: "success",
      time: "4 hours ago",
      unread: true,
      icon: CheckCircle,
    },
    {
      id: 3,
      title: "New Course Material",
      message: "Dr. Smith has uploaded new lecture notes for Computer Science 101.",
      type: "info",
      time: "6 hours ago",
      unread: false,
      icon: Info,
    },
    {
      id: 4,
      title: "Counseling Session Scheduled",
      message: "Your counseling session with Dr. Williams is scheduled for tomorrow at 2:00 PM.",
      type: "info",
      time: "1 day ago",
      unread: false,
      icon: Calendar,
    },
    {
      id: 5,
      title: "University Event",
      message: "Annual Tech Fest registration is now open. Register before December 15th.",
      type: "info",
      time: "2 days ago",
      unread: false,
      icon: Info,
    },
  ]

  const getTypeColor = (type: string) => {
    switch (type) {
      case "urgent":
        return "destructive"
      case "success":
        return "default"
      case "info":
        return "secondary"
      default:
        return "outline"
    }
  }

  const getTypeBgColor = (type: string) => {
    switch (type) {
      case "urgent":
        return "bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800"
      case "success":
        return "bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800"
      case "info":
        return "bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800"
      default:
        return "bg-muted/50"
    }
  }

  return (
    <div className="space-y-6 animate-in fade-in-50 duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Notifications</h1>
          <p className="text-muted-foreground">Stay updated with university events, deadlines, and announcements.</p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant="secondary">{notifications.filter((n) => n.unread).length} unread</Badge>
          <Button variant="outline" size="sm">
            Mark All as Read
          </Button>
        </div>
      </div>

      <div className="grid gap-4">
        {notifications.map((notification) => (
          <Card
            key={notification.id}
            className={`transition-all duration-200 hover:shadow-md ${
              notification.unread ? getTypeBgColor(notification.type) : ""
            }`}
          >
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4 flex-1">
                  <div
                    className={`p-2 rounded-full ${
                      notification.type === "urgent"
                        ? "bg-red-100 dark:bg-red-900/30"
                        : notification.type === "success"
                          ? "bg-green-100 dark:bg-green-900/30"
                          : "bg-blue-100 dark:bg-blue-900/30"
                    }`}
                  >
                    <notification.icon
                      className={`h-5 w-5 ${
                        notification.type === "urgent"
                          ? "text-red-600 dark:text-red-400"
                          : notification.type === "success"
                            ? "text-green-600 dark:text-green-400"
                            : "text-blue-600 dark:text-blue-400"
                      }`}
                    />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center space-x-2">
                      <h3 className="font-semibold">{notification.title}</h3>
                      {notification.unread && <div className="w-2 h-2 bg-primary rounded-full" />}
                    </div>
                    <p className="text-muted-foreground">{notification.message}</p>
                    <div className="flex items-center space-x-2">
                      <Badge variant={getTypeColor(notification.type) as any} className="text-xs">
                        {notification.type}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{notification.time}</span>
                    </div>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
