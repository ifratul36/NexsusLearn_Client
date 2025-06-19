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
import { CheckCircle, Clock, AlertCircle, Plus } from "lucide-react"

// Define types for task priority and status
type TaskStatus = "pending" | "completed" | "overdue"
type TaskPriority = "urgent" | "high" | "medium" | "low"

// Define allowed badge variants
type BadgeVariant = "default" | "secondary" | "destructive" | "outline"

// Define a Task type
interface Task {
  title: string
  subject: string
  dueDate: string
  status: TaskStatus
  priority: TaskPriority
}

export function TasksOverview() {
  const tasks: Task[] = [
    {
      title: "Data Structures Assignment",
      subject: "Computer Science",
      dueDate: "Due in 2 days",
      status: "pending",
      priority: "high",
    },
    {
      title: "Physics Lab Report",
      subject: "Physics",
      dueDate: "Due tomorrow",
      status: "pending",
      priority: "urgent",
    },
    {
      title: "Mathematics Quiz",
      subject: "Mathematics",
      dueDate: "Completed",
      status: "completed",
      priority: "medium",
    },
  ]

  const getStatusIcon = (status: TaskStatus) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case "pending":
        return <Clock className="h-4 w-4 text-yellow-500" />
      default:
        return <AlertCircle className="h-4 w-4 text-red-500" />
    }
  }

  const getPriorityColor = (priority: TaskPriority): BadgeVariant => {
    switch (priority) {
      case "urgent":
        return "destructive"
      case "high":
        return "default"
      case "medium":
        return "secondary"
      case "low":
        return "outline"
      default:
        return "outline"
    }
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Tasks Overview</CardTitle>
            <CardDescription>Your upcoming and recent tasks</CardDescription>
          </div>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" />
            New Task
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {tasks?.map((task, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 p-3 rounded-lg border hover:bg-muted/50 transition-colors"
            >
              {getStatusIcon(task.status)}
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">{task.title}</p>
                <p className="text-xs text-muted-foreground">{task.subject}</p>
              </div>
              <div className="text-right space-y-1">
                <Badge
                  variant={getPriorityColor(task.priority)}
                  className="text-xs capitalize"
                >
                  {task.priority}
                </Badge>
                <p className="text-xs text-muted-foreground">{task.dueDate}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
