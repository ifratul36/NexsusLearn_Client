"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload, MessageSquare, CheckCircle, Bell } from "lucide-react"

export function RecentActivity() {
  const activities = [
    {
      type: "assignment",
      title: "Submitted Physics Lab Report",
      time: "2 hours ago",
      icon: Upload,
      color: "text-blue-500",
    },
    {
      type: "message",
      title: "New message from Prof. Smith",
      time: "4 hours ago",
      icon: MessageSquare,
      color: "text-green-500",
    },
    {
      type: "completion",
      title: "Completed Mathematics Quiz",
      time: "1 day ago",
      icon: CheckCircle,
      color: "text-emerald-500",
    },
    {
      type: "notification",
      title: "Reminder: Assignment due tomorrow",
      time: "2 days ago",
      icon: Bell,
      color: "text-orange-500",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Your latest academic activities</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities?.map((activity, index) => (
            <div key={index} className="flex items-center space-x-4">
              <div className={`p-2 rounded-full bg-muted ${activity.color}`}>
                <activity.icon className="h-4 w-4" />
              </div>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">{activity.title}</p>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
