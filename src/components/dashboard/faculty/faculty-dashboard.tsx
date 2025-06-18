"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Shield, Bell, Users, FileText, BarChart3, UserCheck, Upload, MessageSquare } from "lucide-react"

export function FacultyDashboard() {
  return (
    <div className="space-y-6 animate-in fade-in-50 duration-500">
      {/* Welcome Section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Welcome, Dr. Smith!</h1>
          <p className="text-muted-foreground">Manage your students and academic activities.</p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant="outline" className="animate-pulse">
            <Shield className="w-3 h-3 mr-1" />
            Biometric Active
          </Badge>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="hover:shadow-md transition-all duration-200 hover:-translate-y-1">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Students</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
            <p className="text-xs text-muted-foreground">Across 4 courses</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-all duration-200 hover:-translate-y-1">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Reviews</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23</div>
            <p className="text-xs text-muted-foreground">Assignments to review</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-all duration-200 hover:-translate-y-1">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Batch Average</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3.42</div>
            <p className="text-xs text-muted-foreground">Current semester GPA</p>
            <Progress value={85} className="mt-2" />
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-all duration-200 hover:-translate-y-1">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Notifications</CardTitle>
            <Bell className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Event updates</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Biometric Login Status */}
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Shield className="h-5 w-5 mr-2" />
              Biometric Authentication
            </CardTitle>
            <CardDescription>Secure login via fingerprint or facial recognition</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg bg-green-50 dark:bg-green-950/20">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <div>
                    <p className="font-medium">Fingerprint Scanner</p>
                    <p className="text-sm text-muted-foreground">Active and ready</p>
                  </div>
                </div>
                <Badge variant="secondary">Connected</Badge>
              </div>
              <div className="flex items-center justify-between p-4 border rounded-lg bg-green-50 dark:bg-green-950/20">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <div>
                    <p className="font-medium">Facial Recognition</p>
                    <p className="text-sm text-muted-foreground">Camera active</p>
                  </div>
                </div>
                <Badge variant="secondary">Connected</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Faculty tools and features</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full justify-start" variant="outline">
              <Users className="h-4 w-4 mr-2" />
              Assign Tasks
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Upload className="h-4 w-4 mr-2" />
              Upload Materials
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <MessageSquare className="h-4 w-4 mr-2" />
              Student Counseling
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <BarChart3 className="h-4 w-4 mr-2" />
              View Analytics
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <UserCheck className="h-4 w-4 mr-2" />
              Student Profiles
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Faculty Features Tabs */}
      <Tabs defaultValue="students" className="space-y-4">
        <TabsList>
          <TabsTrigger value="students">Student Interaction</TabsTrigger>
          <TabsTrigger value="tasks">Task Management</TabsTrigger>
          <TabsTrigger value="analytics">Analytics View</TabsTrigger>
          <TabsTrigger value="po-qoo">PO/QOO Dashboard</TabsTrigger>
          <TabsTrigger value="student-info">Student Info Access</TabsTrigger>
        </TabsList>

        <TabsContent value="students" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Student Interaction</CardTitle>
              <CardDescription>Assign tasks, provide suggestions, and counseling</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "John Doe", id: "CS2021001", course: "Computer Science", status: "Active", gpa: "3.85" },
                  { name: "Jane Smith", id: "CS2021002", course: "Computer Science", status: "Active", gpa: "3.92" },
                  {
                    name: "Mike Johnson",
                    id: "CS2021003",
                    course: "Computer Science",
                    status: "Counseling",
                    gpa: "2.85",
                  },
                ]?.map((student, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="space-y-1">
                      <p className="font-medium">{student.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {student.id} • {student.course}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant={student.status === "Counseling" ? "destructive" : "secondary"}>
                        {student.status}
                      </Badge>
                      <span className="text-sm font-medium">GPA: {student.gpa}</span>
                      <Button size="sm" variant="outline">
                        Interact
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tasks" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Task Management</CardTitle>
              <CardDescription>Upload course materials and review research papers</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Course Materials</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Uploaded this month</span>
                        <span>12 files</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Total materials</span>
                        <span>156 files</span>
                      </div>
                      <Button size="sm" className="w-full mt-2">
                        <Upload className="h-4 w-4 mr-2" />
                        Upload New Material
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Research Papers</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Pending reviews</span>
                        <span>8 papers</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Reviewed this week</span>
                        <span>15 papers</span>
                      </div>
                      <Button size="sm" className="w-full mt-2">
                        <FileText className="h-4 w-4 mr-2" />
                        Review Papers
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Analytics View</CardTitle>
              <CardDescription>Access student and batch academic data</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Batch Performance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">3.42</div>
                    <p className="text-xs text-muted-foreground">Average GPA</p>
                    <Progress value={85} className="mt-2" />
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Attendance Rate</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">89%</div>
                    <p className="text-xs text-muted-foreground">Class average</p>
                    <Progress value={89} className="mt-2" />
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Assignment Completion</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">94%</div>
                    <p className="text-xs text-muted-foreground">On-time submissions</p>
                    <Progress value={94} className="mt-2" />
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="po-qoo" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>PO/QOO Dashboard</CardTitle>
              <CardDescription>Evaluate department-level outcomes visually</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Department Program Outcomes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { po: "PO1: Engineering Knowledge", score: 82 },
                        { po: "PO2: Problem Analysis", score: 78 },
                        { po: "PO3: Design Solutions", score: 85 },
                        { po: "PO4: Investigation", score: 80 },
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
                    <CardTitle className="text-base">Quality Outcomes Evaluation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { qoo: "Communication Skills", score: 86 },
                        { qoo: "Teamwork", score: 89 },
                        { qoo: "Leadership", score: 74 },
                        { qoo: "Ethics", score: 92 },
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

        <TabsContent value="student-info" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Student Info Access</CardTitle>
              <CardDescription>View detailed student profiles including performance and ID information</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "John Doe", id: "CS2021001", gpa: "3.85", attendance: "92%", status: "Excellent" },
                  { name: "Jane Smith", id: "CS2021002", gpa: "3.92", attendance: "95%", status: "Outstanding" },
                  { name: "Mike Johnson", id: "CS2021003", gpa: "2.85", attendance: "78%", status: "Needs Support" },
                ]?.map((student, index) => (
                  <div key={index} className="p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <p className="font-medium">{student.name}</p>
                        <p className="text-sm text-muted-foreground">ID: {student.id}</p>
                      </div>
                      <div className="text-right space-y-1">
                        <p className="text-sm">
                          GPA: <span className="font-medium">{student.gpa}</span>
                        </p>
                        <p className="text-sm">
                          Attendance: <span className="font-medium">{student.attendance}</span>
                        </p>
                      </div>
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                      <Badge
                        variant={
                          student.status === "Needs Support"
                            ? "destructive"
                            : student.status === "Outstanding"
                              ? "default"
                              : "secondary"
                        }
                      >
                        {student.status}
                      </Badge>
                      <Button size="sm" variant="outline">
                        View Full Profile
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
