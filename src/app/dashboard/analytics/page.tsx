"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart3, TrendingUp, Calendar, Target } from "lucide-react"

export default function AnalyticsPage() {
  const performanceData = [
    { semester: "Fall 2023", gpa: 3.2, attendance: 85, assignments: 92 },
    { semester: "Spring 2024", gpa: 3.4, attendance: 88, assignments: 95 },
    { semester: "Summer 2024", gpa: 3.6, attendance: 92, assignments: 98 },
    { semester: "Fall 2024", gpa: 3.85, attendance: 94, assignments: 96 },
  ]

  const subjectPerformance = [
    { subject: "Computer Science", score: 92, credits: 4, grade: "A" },
    { subject: "Mathematics", score: 88, credits: 3, grade: "B+" },
    { subject: "Physics", score: 85, credits: 3, grade: "B" },
    { subject: "English", score: 90, credits: 2, grade: "A-" },
    { subject: "Chemistry", score: 87, credits: 3, grade: "B+" },
  ]

  return (
    <div className="space-y-6 animate-in fade-in-50 duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
          <p className="text-muted-foreground">View personal academic performance charts and insights.</p>
        </div>
        <Badge variant="outline" className="animate-pulse">
          <TrendingUp className="w-3 h-3 mr-1" />
          Trending Up
        </Badge>
      </div>

      {/* Performance Overview */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current GPA</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3.85</div>
            <p className="text-xs text-muted-foreground">+0.25 from last semester</p>
            <Progress value={85} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Attendance Rate</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94%</div>
            <p className="text-xs text-muted-foreground">Above average</p>
            <Progress value={94} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Assignment Score</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">96%</div>
            <p className="text-xs text-muted-foreground">Excellent performance</p>
            <Progress value={96} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Class Rank</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5th</div>
            <p className="text-xs text-muted-foreground">Out of 45 students</p>
          </CardContent>
        </Card>
      </div>

      {/* Analytics Tabs */}
      <Tabs defaultValue="performance" className="space-y-4">
        <TabsList>
          <TabsTrigger value="performance">Performance Charts</TabsTrigger>
          <TabsTrigger value="progress">Academic Progress</TabsTrigger>
          <TabsTrigger value="subjects">Subject Analysis</TabsTrigger>
          <TabsTrigger value="trends">Trends</TabsTrigger>
        </TabsList>

        <TabsContent value="performance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Performance Charts</CardTitle>
              <CardDescription>Visual representation of your academic performance over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-medium mb-4">GPA Trend</h4>
                  <div className="space-y-3">
                    {performanceData.map((data, index) => (
                      <div key={data.semester} className="flex items-center space-x-4">
                        <div className="w-24 text-sm">{data.semester}</div>
                        <div className="flex-1 bg-muted rounded-full h-3">
                          <div
                            className="bg-primary h-3 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${(data.gpa / 4) * 100}%` }}
                          />
                        </div>
                        <div className="w-12 text-sm font-medium">{data.gpa}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-4">Attendance Trend</h4>
                  <div className="space-y-3">
                    {performanceData.map((data, index) => (
                      <div key={data.semester} className="flex items-center space-x-4">
                        <div className="w-24 text-sm">{data.semester}</div>
                        <div className="flex-1 bg-muted rounded-full h-3">
                          <div
                            className="bg-green-500 h-3 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${data.attendance}%` }}
                          />
                        </div>
                        <div className="w-12 text-sm font-medium">{data.attendance}%</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="progress" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Academic Progress</CardTitle>
              <CardDescription>Track your improvement across different metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <h4 className="text-sm font-medium">Semester Comparison</h4>
                  {performanceData.slice(-2).map((data, index) => (
                    <Card key={data.semester}>
                      <CardContent className="p-4">
                        <div className="flex justify-between items-center mb-2">
                          <h5 className="font-medium">{data.semester}</h5>
                          <Badge variant={index === 1 ? "default" : "secondary"}>
                            {index === 1 ? "Current" : "Previous"}
                          </Badge>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>GPA</span>
                            <span className="font-medium">{data.gpa}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Attendance</span>
                            <span className="font-medium">{data.attendance}%</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Assignments</span>
                            <span className="font-medium">{data.assignments}%</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="space-y-4">
                  <h4 className="text-sm font-medium">Improvement Areas</h4>
                  <div className="space-y-3">
                    <div className="p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                      <p className="text-sm font-medium text-green-800 dark:text-green-200">Strengths</p>
                      <p className="text-xs text-green-600 dark:text-green-400">
                        Consistent improvement in GPA and attendance
                      </p>
                    </div>
                    <div className="p-3 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                      <p className="text-sm font-medium text-yellow-800 dark:text-yellow-200">Focus Areas</p>
                      <p className="text-xs text-yellow-600 dark:text-yellow-400">
                        Maintain assignment submission consistency
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="subjects" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Subject-wise Performance</CardTitle>
              <CardDescription>Compare your performance across different subjects</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {subjectPerformance.map((subject) => (
                  <div key={subject.subject} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">{subject.subject}</h4>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline">{subject.credits} credits</Badge>
                        <Badge variant="secondary">{subject.grade}</Badge>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Performance Score</span>
                        <span className="font-medium">{subject.score}%</span>
                      </div>
                      <Progress value={subject.score} className="h-2" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="trends" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Performance Trends</CardTitle>
              <CardDescription>Analyze your academic trends and patterns</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <h4 className="text-sm font-medium">Positive Trends</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
                      <TrendingUp className="h-5 w-5 text-green-600" />
                      <div>
                        <p className="text-sm font-medium">GPA Improvement</p>
                        <p className="text-xs text-muted-foreground">+0.65 over 4 semesters</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
                      <TrendingUp className="h-5 w-5 text-green-600" />
                      <div>
                        <p className="text-sm font-medium">Attendance Rate</p>
                        <p className="text-xs text-muted-foreground">+9% improvement</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-sm font-medium">Key Insights</h4>
                  <div className="space-y-3">
                    <div className="p-3 border rounded-lg">
                      <p className="text-sm font-medium">Best Performing Subject</p>
                      <p className="text-xs text-muted-foreground">Computer Science (92%)</p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <p className="text-sm font-medium">Most Improved</p>
                      <p className="text-xs text-muted-foreground">Mathematics (+15% this semester)</p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <p className="text-sm font-medium">Consistency Score</p>
                      <p className="text-xs text-muted-foreground">High (Low variance across subjects)</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
