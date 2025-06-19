"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Bell, X } from "lucide-react"

// Define allowed badge variants
type BadgeVariant = "default" | "secondary" | "destructive" | "outline"
type NotificationType = "warning" | "info" | "success"

// Define a notification type
type Notification = {
  id: number
  title: string
  message: string
  type: NotificationType
  time: string
  unread: boolean
}

export function NotificationsPanel() {
  const notifications: Notification[] = [
    {
      id: 1,
      title: "Assignment Due Soon",
      message: "Data Structures assignment is due in 2 days",
      type: "warning",
      time: "1 hour ago",
      unread: true,
    },
    {
      id: 2,
      title: "Grade Posted",
      message: "Your Physics quiz grade has been posted",
      type: "info",
      time: "3 hours ago",
      unread: true,
    },
    {
      id: 3,
      title: "Counseling Session",
      message: "Scheduled counseling session tomorrow at 2 PM",
      type: "success",
      time: "1 day ago",
      unread: false,
    },
  ]

  const getTypeColor = (type: NotificationType): BadgeVariant => {
    switch (type) {
      case "warning":
        return "destructive"
      case "info":
        return "default"
      case "success":
        return "secondary"
      default:
        return "outline"
    }
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center">
              <Bell className="h-4 w-4 mr-2" />
              Notifications
            </CardTitle>
            <CardDescription>Recent updates and alerts</CardDescription>
          </div>
          <Badge variant="secondary">
            {notifications.filter((n) => n.unread).length} new
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {notifications?.map((notification) => (
            <div
              key={notification.id}
              className={`p-3 rounded-lg border transition-colors ${
                notification.unread ? "bg-muted/50" : "bg-background"
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1 space-y-1">
                  <div className="flex items-center space-x-2">
                    <p className="text-sm font-medium">{notification.title}</p>
                    {notification.unread && (
                      <div className="w-2 h-2 bg-primary rounded-full" />
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {notification.message}
                  </p>
                  <div className="flex items-center space-x-2">
                    <Badge
                      variant={getTypeColor(notification.type)}
                      className="text-xs"
                    >
                      {notification.type}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      {notification.time}
                    </span>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                  <X className="h-3 w-3" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
