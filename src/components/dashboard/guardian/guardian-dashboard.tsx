"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Shield, Bell, Heart, MessageSquare, BarChart3, Target, Calendar, User } from "lucide-react"

export function GuardianDashboard() {
  return (
    <div className="space-y-6 animate-in fade-in-50 duration-500">
      {/* Welcome Section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Welcome, Jane!</h1>
          <p className="text-muted-foreground">Monitor Johns academic progress and stay connected.</p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant="outline" className="animate-pulse">
            <Shield className="w-3 h-3 mr-1" />
            Biometric Access
          </Badge>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="hover:shadow-md transition-all duration-200 hover:-translate-y-1">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Student GPA</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3.85</div>
            <p className="text-xs text-muted-foreground">+0.12 improvement</p>
            <Progress value={85} className="mt-2" />
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-all duration-200 hover:-translate-y-1">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Attendance</CardTitle>
            <User className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">92%</div>
            <p className="text-xs text-muted-foreground">This semester</p>
            <Progress value={92} className="mt-2" />
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-all duration-200 hover:-translate-y-1">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Behavior Score</CardTitle>
            <Heart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Excellent</div>
            <p className="text-xs text-muted-foreground">No incidents</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-all duration-200 hover:-translate-y-1">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Notifications</CardTitle>
            <Bell className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4</div>
            <p className="text-xs text-muted-foreground">Academic updates</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Biometric Access Status */}
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Shield className="h-5 w-5 mr-2" />
              Biometric Access
            </CardTitle>
            <CardDescription>Access via students ID card or biometric scan</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg bg-blue-50 dark:bg-blue-950/20">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
                  <div>
                    <p className="font-medium">Student ID Card Access</p>
                    <p className="text-sm text-muted-foreground">Linked to John Doe (CS2021001)</p>
                  </div>
                </div>
                <Badge variant="secondary">Active</Badge>
              </div>
              <div className="flex items-center justify-between p-4 border rounded-lg bg-green-50 dark:bg-green-950/20">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <div>
                    <p className="font-medium">Biometric Scan</p>
                    <p className="text-sm text-muted-foreground">Guardian fingerprint registered</p>
                  </div>
                </div>
                <Badge variant="secondary">Verified</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Guardian features</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full justify-start" variant="outline">
              <Heart className="h-4 w-4 mr-2" />
              View Progress
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <MessageSquare className="h-4 w-4 mr-2" />
              Counseling Access
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <BarChart3 className="h-4 w-4 mr-2" />
              Performance Charts
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Target className="h-4 w-4 mr-2" />
              PO/QOO Charts
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Calendar className="h-4 w-4 mr-2" />
              View Calendar
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Guardian Features Tabs */}
      <Tabs defaultValue="progress" className="space-y-4">
        <TabsList>
          <TabsTrigger value="progress">Student Progress</TabsTrigger>
          <TabsTrigger value="counseling">Counseling Access</TabsTrigger>
          <TabsTrigger value="charts">Performance Charts</TabsTrigger>
          <TabsTrigger value="po-qoo">PO/QOO Charts</TabsTrigger>
        </TabsList>

        <TabsContent value="progress" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Student Academic Progress</CardTitle>
              <CardDescription>Comprehensive view of Johns academic performance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Academic Performance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Current GPA</span>
                        <span className="font-medium">3.85</span>
                      </div>
                      <Progress value={85} className="h-2" />
                      <div className="flex justify-between text-sm">
                        <span>Class Rank</span>
                        <span className="font-medium">5th out of 45</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Attendance Reports</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Overall Attendance</span>
                        <span className="font-medium">92%</span>
                      </div>
                      <Progress value={92} className="h-2" />
                      <div className="flex justify-between text-sm">
                        <span>Days Present</span>
                        <span className="font-medium">156 of 170</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Behavior Reports</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Behavior Score</span>
                        <span className="font-medium">Excellent</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Incidents</span>
                        <span className="font-medium">0 this semester</span>
                      </div>
                      <Badge variant="secondary" className="w-full justify-center">
                        Outstanding Conduct
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="counseling" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Counseling Access</CardTitle>
              <CardDescription>Join faculty discussions regarding Johns progress</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    title: "Mid-Semester Review",
                    faculty: "Dr. Smith",
                    date: "2 days ago",
                    status: "Completed",
                    summary: "Excellent progress in Computer Science. Recommended for advanced courses.",
                  },
                  {
                    title: "Mathematics Support Session",
                    faculty: "Prof. Johnson",
                    date: "1 week ago",
                    status: "Scheduled",
                    summary: "Additional support session scheduled for calculus concepts.",
                  },
                  {
                    title: "Career Guidance Meeting",
                    faculty: "Dr. Williams",
                    date: "2 weeks ago",
                    status: "Completed",
                    summary: "Discussed internship opportunities and career paths in technology.",
                  },
                ]?.map((session, index) => (
                  <div key={index} className="p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">{session.title}</h4>
                      <Badge variant={session.status === "Completed" ? "secondary" : "default"}>{session.status}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      With {session.faculty} • {session.date}
                    </p>
                    <p className="text-sm">{session.summary}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="charts" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Performance Charts</CardTitle>
              <CardDescription>Track Johns academic journey over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Academic Journey</CardTitle>
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
                    <CardTitle className="text-base">Progress Timeline</CardTitle>
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
              <CardTitle>PO/QOO Charts</CardTitle>
              <CardDescription>View visuals on learning outcomes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Learning Outcomes</CardTitle>
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
                    <CardTitle className="text-base">Visual Reports</CardTitle>
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
