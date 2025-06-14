"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RecentActivity } from "@/components/dashboard/recent-activity"
import { PerformanceChart } from "@/components/dashboard/performance-chart"
import { TasksOverview } from "@/components/dashboard/tasks-overview"
import { NotificationsPanel } from "@/components/dashboard/notifications-panel"
import { QuickActions } from "@/components/dashboard/quick-actions"
import { StatsCards } from "./stats-card"

export function DashboardContent() {
  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Welcome back, John!</h1>
          <p className="text-muted-foreground">Heres whats happening with your academic progress today.</p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant="outline" className="animate-pulse">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
            Online
          </Badge>
        </div>
      </div>

      {/* Stats Cards */}
      <StatsCards />

      {/* Main Content Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        {/* Performance Chart */}
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Academic Performance</CardTitle>
            <CardDescription>Your performance trends over the last 6 months</CardDescription>
          </CardHeader>
          <CardContent>
            <PerformanceChart />
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Frequently used features</CardDescription>
          </CardHeader>
          <CardContent>
            <QuickActions />
          </CardContent>
        </Card>
      </div>

      {/* Secondary Content Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Tasks Overview */}
        <TasksOverview />

        {/* Recent Activity */}
        <RecentActivity />

        {/* Notifications */}
        <NotificationsPanel />
      </div>

      {/* Detailed Tabs Section */}
      <Card>
        <CardHeader>
          <CardTitle>Detailed Analytics</CardTitle>
          <CardDescription>Comprehensive view of your academic data</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="performance" className="space-y-4">
            <TabsList>
              <TabsTrigger value="performance">Performance</TabsTrigger>
              <TabsTrigger value="attendance">Attendance</TabsTrigger>
              <TabsTrigger value="assignments">Assignments</TabsTrigger>
              <TabsTrigger value="po-qoo">PO/QOO</TabsTrigger>
            </TabsList>

            <TabsContent value="performance" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Overall GPA</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">3.85</div>
                    <p className="text-xs text-muted-foreground">+0.12 from last semester</p>
                    <Progress value={85} className="mt-2" />
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Course Average</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">88.5%</div>
                    <p className="text-xs text-muted-foreground">Across 6 subjects</p>
                    <Progress value={88.5} className="mt-2" />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="attendance" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-3">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Overall Attendance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">92%</div>
                    <Progress value={92} className="mt-2" />
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">This Month</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">95%</div>
                    <Progress value={95} className="mt-2" />
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Days Present</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">156</div>
                    <p className="text-xs text-muted-foreground">Out of 170 days</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="assignments" className="space-y-4">
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
            </TabsContent>

            <TabsContent value="po-qoo" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Program Outcomes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>PO1: Engineering Knowledge</span>
                        <span>85%</span>
                      </div>
                      <Progress value={85} className="h-2" />
                      <div className="flex justify-between text-sm">
                        <span>PO2: Problem Analysis</span>
                        <span>78%</span>
                      </div>
                      <Progress value={78} className="h-2" />
                      <div className="flex justify-between text-sm">
                        <span>PO3: Design Solutions</span>
                        <span>92%</span>
                      </div>
                      <Progress value={92} className="h-2" />
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Quality Outcomes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Communication Skills</span>
                        <span>88%</span>
                      </div>
                      <Progress value={88} className="h-2" />
                      <div className="flex justify-between text-sm">
                        <span>Teamwork</span>
                        <span>91%</span>
                      </div>
                      <Progress value={91} className="h-2" />
                      <div className="flex justify-between text-sm">
                        <span>Leadership</span>
                        <span>76%</span>
                      </div>
                      <Progress value={76} className="h-2" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
