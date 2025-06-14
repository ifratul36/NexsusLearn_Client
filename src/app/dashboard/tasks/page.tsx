/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Clock, AlertTriangle, FileText, Calendar, User } from "lucide-react"

export default function TasksPage() {
  const tasks = [
    {
      id: 1,
      title: "Data Structures Assignment",
      subject: "Computer Science",
      description: "Implement binary search tree with insertion, deletion, and traversal operations.",
      dueDate: "2024-12-20",
      status: "pending",
      priority: "high",
      assignedBy: "Dr. Smith",
      progress: 60,
      files: ["assignment_spec.pdf", "starter_code.zip"],
    },
    {
      id: 2,
      title: "Physics Lab Report",
      subject: "Physics",
      description: "Write a comprehensive report on the pendulum experiment conducted in class.",
      dueDate: "2024-12-19",
      status: "pending",
      priority: "urgent",
      assignedBy: "Prof. Johnson",
      progress: 30,
      files: ["lab_guidelines.pdf", "data_template.xlsx"],
    },
    {
      id: 3,
      title: "Mathematics Problem Set",
      subject: "Mathematics",
      description: "Solve calculus problems from Chapter 5, questions 1-20.",
      dueDate: "2024-12-15",
      status: "completed",
      priority: "medium",
      assignedBy: "Dr. Williams",
      progress: 100,
      files: ["problem_set.pdf"],
    },
    {
      id: 4,
      title: "English Essay",
      subject: "English Literature",
      description: "Write a 1500-word essay on the themes in Shakespeare's Hamlet.",
      dueDate: "2024-12-25",
      status: "pending",
      priority: "medium",
      assignedBy: "Prof. Davis",
      progress: 10,
      files: ["essay_prompt.pdf", "rubric.pdf"],
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case "pending":
        return <Clock className="h-4 w-4 text-yellow-500" />
      default:
        return <AlertTriangle className="h-4 w-4 text-red-500" />
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "urgent":
        return "destructive"
      case "high":
        return "default"
      case "medium":
        return "secondary"
      default:
        return "outline"
    }
  }

  const getDaysUntilDue = (dueDate: string) => {
    const due = new Date(dueDate)
    const today = new Date()
    const diffTime = due.getTime() - today.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
  }

  const pendingTasks = tasks.filter((task) => task.status === "pending")
  const completedTasks = tasks.filter((task) => task.status === "completed")
  const overdueTasks = tasks.filter((task) => task.status === "pending" && getDaysUntilDue(task.dueDate) < 0)

  return (
    <div className="space-y-6 animate-in fade-in-50 duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Academic Tasks</h1>
          <p className="text-muted-foreground">View and manage your department-assigned tasks and related uploads.</p>
        </div>
        <Button>
          <FileText className="h-4 w-4 mr-2" />
          Create New Task
        </Button>
      </div>

      {/* Task Statistics */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Tasks</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{tasks.length}</div>
            <p className="text-xs text-muted-foreground">All assigned tasks</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{pendingTasks.length}</div>
            <p className="text-xs text-muted-foreground">Tasks in progress</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{completedTasks.length}</div>
            <p className="text-xs text-muted-foreground">Finished tasks</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Overdue</CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{overdueTasks.length}</div>
            <p className="text-xs text-muted-foreground">Past due date</p>
          </CardContent>
        </Card>
      </div>

      {/* Tasks Tabs */}
      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Tasks</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="overdue">Overdue</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <div className="grid gap-4">
            {tasks.map((task) => (
              <Card key={task.id} className="hover:shadow-md transition-all duration-200">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      {getStatusIcon(task.status)}
                      <div>
                        <CardTitle className="text-lg">{task.title}</CardTitle>
                        <CardDescription>{task.subject}</CardDescription>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant={getPriorityColor(task.priority) as any}>{task.priority}</Badge>
                      <Badge variant="outline">
                        {getDaysUntilDue(task.dueDate) >= 0
                          ? `${getDaysUntilDue(task.dueDate)} days left`
                          : `${Math.abs(getDaysUntilDue(task.dueDate))} days overdue`}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{task.description}</p>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-sm">
                        <Calendar className="h-4 w-4" />
                        <span>Due: {new Date(task.dueDate).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <User className="h-4 w-4" />
                        <span>Assigned by: {task.assignedBy}</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>{task.progress}%</span>
                      </div>
                      <Progress value={task.progress} className="h-2" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-medium">Related Files:</p>
                    <div className="flex flex-wrap gap-2">
                      {task.files.map((file, index) => (
                        <Badge key={index} variant="outline" className="cursor-pointer hover:bg-muted">
                          {file}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-end space-x-2">
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                    {task.status === "pending" && <Button size="sm">Continue Work</Button>}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="pending" className="space-y-4">
          <div className="grid gap-4">
            {pendingTasks.map((task) => (
              <Card key={task.id} className="hover:shadow-md transition-all duration-200">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      {getStatusIcon(task.status)}
                      <div>
                        <CardTitle className="text-lg">{task.title}</CardTitle>
                        <CardDescription>{task.subject}</CardDescription>
                      </div>
                    </div>
                    <Badge variant={getPriorityColor(task.priority) as any}>{task.priority}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Progress</span>
                    <span>{task.progress}%</span>
                  </div>
                  <Progress value={task.progress} className="h-2" />
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="completed" className="space-y-4">
          <div className="grid gap-4">
            {completedTasks.map((task) => (
              <Card key={task.id} className="hover:shadow-md transition-all duration-200">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      {getStatusIcon(task.status)}
                      <div>
                        <CardTitle className="text-lg">{task.title}</CardTitle>
                        <CardDescription>{task.subject}</CardDescription>
                      </div>
                    </div>
                    <Badge variant="secondary">Completed</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{task.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="overdue" className="space-y-4">
          {overdueTasks.length === 0 ? (
            <Card>
              <CardContent className="text-center py-8">
                <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">No Overdue Tasks!</h3>
                <p className="text-muted-foreground">Great job staying on top of your assignments.</p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-4">
              {overdueTasks.map((task) => (
                <Card key={task.id} className="border-red-200 dark:border-red-800">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <AlertTriangle className="h-4 w-4 text-red-500" />
                        <div>
                          <CardTitle className="text-lg">{task.title}</CardTitle>
                          <CardDescription>{task.subject}</CardDescription>
                        </div>
                      </div>
                      <Badge variant="destructive">{Math.abs(getDaysUntilDue(task.dueDate))} days overdue</Badge>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}
