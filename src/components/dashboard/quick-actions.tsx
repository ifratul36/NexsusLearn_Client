"use client"

import { Button } from "@/components/ui/button"
import { Upload, MessageSquare, Calendar, FileText, BarChart3, Users } from "lucide-react"

export function QuickActions() {
  const actions = [
    {
      title: "Submit Assignment",
      description: "Upload your latest work",
      icon: Upload,
      color: "bg-blue-500 hover:bg-blue-600",
    },
    {
      title: "Start Counseling",
      description: "Get academic support",
      icon: MessageSquare,
      color: "bg-green-500 hover:bg-green-600",
    },
    {
      title: "View Calendar",
      description: "Check upcoming events",
      icon: Calendar,
      color: "bg-purple-500 hover:bg-purple-600",
    },
    {
      title: "Create Task",
      description: "Add new academic task",
      icon: FileText,
      color: "bg-orange-500 hover:bg-orange-600",
    },
    {
      title: "View Analytics",
      description: "Check your progress",
      icon: BarChart3,
      color: "bg-pink-500 hover:bg-pink-600",
    },
    {
      title: "Study Groups",
      description: "Join or create groups",
      icon: Users,
      color: "bg-indigo-500 hover:bg-indigo-600",
    },
  ]

  return (
    <div className="grid grid-cols-2 gap-3">
      {actions.map((action, index) => (
        <Button
          key={index}
          variant="outline"
          className="h-auto p-4 flex flex-col items-center space-y-2 hover:shadow-md transition-all duration-200"
        >
          <div className={`p-2 rounded-lg text-white ${action.color}`}>
            <action.icon className="h-4 w-4" />
          </div>
          <div className="text-center">
            <p className="text-xs font-medium">{action.title}</p>
            <p className="text-xs text-muted-foreground">{action.description}</p>
          </div>
        </Button>
      ))}
    </div>
  )
}
