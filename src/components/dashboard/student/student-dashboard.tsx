"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Bell,
  Upload,
  MessageSquare,
  BarChart3,
  Target,
  Calendar,
  CheckCircle,
  Clock,
  AlertTriangle,
} from "lucide-react"

export function StudentDashboard() {
  return (
    <div className="space-y-6 animate-in fade-in-50 duration-500">
      {/* Welcome Section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Welcome back, John!</h1>
          <p className="text-muted-foreground">Heres your academic progress and updates.</p>
        </div>
        <Badge variant="outline" className="animate-pulse">
          <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
          Online
        </Badge>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="hover:shadow-md transition-all duration-200 hover:-translate-y-1">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current GPA</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3.85</div>
            <p className="text-xs text-muted-foreground">+0.12 from last semester</p>
            <Progress value={85} className="mt-2" />
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-all duration-200 hover:-translate-y-1">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Tasks</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">3 due this week</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-all duration-200 hover:-translate-y-1">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Attendance</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">92%</div>
            <p className="text-xs text-muted-foreground">This semester</p>
            <Progress value={92} className="mt-2" />
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-all duration-200 hover:-translate-y-1">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Notifications</CardTitle>
            <Bell className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">2 urgent</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Recent Notifications */}
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Bell className="h-5 w-5 mr-2" />
              Recent Notifications
            </CardTitle>
            <CardDescription>University updates, events, and deadlines</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { title: "Assignment Due Tomorrow", type: "urgent", time: "2 hours ago" },
                { title: "New Course Material Available", type: "info", time: "4 hours ago" },
                { title: "Counseling Session Scheduled", type: "success", time: "1 day ago" },
              ]?.map((notification, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 p-3 rounded-lg border hover:bg-muted/50 transition-colors"
                >
                  <div
                    className={`w-2 h-2 rounded-full ${
                      notification.type === "urgent"
                        ? "bg-red-500"
                        : notification.type === "info"
                          ? "bg-blue-500"
                          : "bg-green-500"
                    }`}
                  />
                  <div className="flex-1">
                    <p className="text-sm font-medium">{notification.title}</p>
                    <p className="text-xs text-muted-foreground">{notification.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Frequently used features</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full justify-start" variant="outline">
              <Upload className="h-4 w-4 mr-2" />
              Submit Assignment
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <MessageSquare className="h-4 w-4 mr-2" />
              Start Counseling
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <BarChart3 className="h-4 w-4 mr-2" />
              View Analytics
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Target className="h-4 w-4 mr-2" />
              PO/QOO Tracker
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Calendar className="h-4 w-4 mr-2" />
              View Calendar
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Academic Tasks & Analytics */}
      <Tabs defaultValue="tasks" className="space-y-4">
        <TabsList>
          <TabsTrigger value="tasks">Academic Tasks</TabsTrigger>
          <TabsTrigger value="assignments">Assignment Uploads</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="po-qoo">PO/QOO Tracker</TabsTrigger>
        </TabsList>

        <TabsContent value="tasks" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Department-Assigned Tasks</CardTitle>
              <CardDescription>View and manage your academic tasks</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    title: "Data Structures Assignment",
                    subject: "Computer Science",
                    due: "2 days",
                    status: "pending",
                    priority: "high",
                  },
                  {
                    title: "Physics Lab Report",
                    subject: "Physics",
                    due: "1 day",
                    status: "pending",
                    priority: "urgent",
                  },
                  {
                    title: "Mathematics Quiz",
                    subject: "Mathematics",
                    due: "Completed",
                    status: "completed",
                    priority: "medium",
                  },
                ]?.map((task, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="space-y-1">
                      <p className="font-medium">{task.title}</p>
                      <p className="text-sm text-muted-foreground">{task.subject}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge
                        variant={
                          task.priority === "urgent"
                            ? "destructive"
                            : task.priority === "high"
                              ? "default"
                              : "secondary"
                        }
                      >
                        {task.priority}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{task.due}</span>
                      {task.status === "completed" ? (
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      ) : task.priority === "urgent" ? (
                        <AlertTriangle className="h-4 w-4 text-red-500" />
                      ) : (
                        <Clock className="h-4 w-4 text-yellow-500" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="assignments" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Assignment Uploads</CardTitle>
              <CardDescription>Submit assignments organized by semester and course</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Submission Rate</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">98%</div>
                    <p className="text-xs text-muted-foreground">47 out of 48 assignments</p>
                    <Progress value={98} className="mt-2" />
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Average Grade</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">A-</div>
                    <p className="text-xs text-muted-foreground">3.7 GPA equivalent</p>
                    <Progress value={87} className="mt-2" />
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Personal Academic Performance Charts</CardTitle>
              <CardDescription>Visual representation of your academic progress</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">GPA Trend</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {["Semester 1", "Semester 2", "Semester 3", "Current"]?.map((sem, index) => (
                        <div key={sem} className="flex items-center space-x-4">
                          <div className="w-20 text-xs">{sem}</div>
                          <div className="flex-1 bg-muted rounded-full h-2">
                            <div
                              className="bg-primary h-2 rounded-full transition-all duration-500"
                              style={{ width: `${[75, 80, 85, 90][index]}%` }}
                            />
                          </div>
                          <div className="w-12 text-xs">{[3.2, 3.4, 3.6, 3.85][index]}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Subject Performance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {[
                        { subject: "Computer Science", score: 92 },
                        { subject: "Mathematics", score: 88 },
                        { subject: "Physics", score: 85 },
                        { subject: "English", score: 90 },
                      ]?.map((item) => (
                        <div key={item.subject} className="flex items-center space-x-4">
                          <div className="w-24 text-xs">{item.subject}</div>
                          <div className="flex-1 bg-muted rounded-full h-2">
                            <div
                              className="bg-primary h-2 rounded-full transition-all duration-500"
                              style={{ width: `${item.score}%` }}
                            />
                          </div>
                          <div className="w-12 text-xs">{item.score}%</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="po-qoo" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Program Outcomes (PO) & Quality of Outcomes (QOO) Tracker</CardTitle>
              <CardDescription>Track your learning outcomes through flowcharts and graphs</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Program Outcomes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { po: "PO1: Engineering Knowledge", score: 85 },
                        { po: "PO2: Problem Analysis", score: 78 },
                        { po: "PO3: Design Solutions", score: 92 },
                        { po: "PO4: Investigation", score: 88 },
                      ]?.map((item) => (
                        <div key={item.po} className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span>{item.po}</span>
                            <span>{item.score}%</span>
                          </div>
                          <Progress value={item.score} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Quality Outcomes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { qoo: "Communication Skills", score: 88 },
                        { qoo: "Teamwork", score: 91 },
                        { qoo: "Leadership", score: 76 },
                        { qoo: "Ethics", score: 94 },
                      ]?.map((item) => (
                        <div key={item.qoo} className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span>{item.qoo}</span>
                            <span>{item.score}%</span>
                          </div>
                          <Progress value={item.score} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
