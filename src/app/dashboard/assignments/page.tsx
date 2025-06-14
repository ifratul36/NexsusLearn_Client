/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Upload, FileText, Calendar, CheckCircle, Clock, Star } from "lucide-react"

export default function AssignmentsPage() {
  const assignments = [
    {
      id: 1,
      title: "Data Structures Implementation",
      course: "Computer Science 101",
      semester: "Fall 2024",
      dueDate: "2024-12-20",
      submittedDate: "2024-12-18",
      status: "submitted",
      grade: "A+",
      points: "95/100",
      feedback: "Excellent implementation with clean code structure.",
    },
    {
      id: 2,
      title: "Physics Lab Analysis",
      course: "Physics 201",
      semester: "Fall 2024",
      dueDate: "2024-12-19",
      submittedDate: null,
      status: "pending",
      grade: null,
      points: null,
      feedback: null,
    },
    {
      id: 3,
      title: "Calculus Problem Set",
      course: "Mathematics 301",
      semester: "Fall 2024",
      dueDate: "2024-12-15",
      submittedDate: "2024-12-14",
      status: "graded",
      grade: "B+",
      points: "87/100",
      feedback: "Good work, but some optimization needed in problem 5.",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "submitted":
        return "default"
      case "graded":
        return "secondary"
      case "pending":
        return "destructive"
      default:
        return "outline"
    }
  }

  const getGradeColor = (grade: string) => {
    if (grade?.startsWith("A")) return "text-green-600 dark:text-green-400"
    if (grade?.startsWith("B")) return "text-blue-600 dark:text-blue-400"
    if (grade?.startsWith("C")) return "text-yellow-600 dark:text-yellow-400"
    return "text-red-600 dark:text-red-400"
  }

  return (
    <div className="space-y-6 animate-in fade-in-50 duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Assignment Uploads</h1>
          <p className="text-muted-foreground">Submit assignments organized by semester and course.</p>
        </div>
      </div>

      {/* Assignment Statistics */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Assignments</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{assignments.length}</div>
            <p className="text-xs text-muted-foreground">This semester</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Submitted</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{assignments.filter((a) => a.status !== "pending").length}</div>
            <p className="text-xs text-muted-foreground">On time submissions</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{assignments.filter((a) => a.status === "pending").length}</div>
            <p className="text-xs text-muted-foreground">Due soon</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Grade</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">A-</div>
            <p className="text-xs text-muted-foreground">3.7 GPA equivalent</p>
            <Progress value={87} className="mt-2" />
          </CardContent>
        </Card>
      </div>

      {/* Assignment Tabs */}
      <Tabs defaultValue="submit" className="space-y-4">
        <TabsList>
          <TabsTrigger value="submit">Submit Assignment</TabsTrigger>
          <TabsTrigger value="submissions">My Submissions</TabsTrigger>
          <TabsTrigger value="grades">Grades</TabsTrigger>
        </TabsList>

        <TabsContent value="submit" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Submit New Assignment</CardTitle>
              <CardDescription>Upload your assignment organized by semester and course</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="course">Course</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select course" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cs101">Computer Science 101</SelectItem>
                      <SelectItem value="phys201">Physics 201</SelectItem>
                      <SelectItem value="math301">Mathematics 301</SelectItem>
                      <SelectItem value="eng101">English 101</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="semester">Semester</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select semester" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fall2024">Fall 2024</SelectItem>
                      <SelectItem value="spring2024">Spring 2024</SelectItem>
                      <SelectItem value="summer2024">Summer 2024</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="title">Assignment Title</Label>
                <Input id="title" placeholder="Enter assignment title" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" placeholder="Brief description of your assignment" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="file">Upload File</Label>
                <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center hover:border-muted-foreground/50 transition-colors">
                  <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground mb-2">Drag and drop your file here, or click to browse</p>
                  <Button variant="outline" size="sm">
                    Choose File
                  </Button>
                  <p className="text-xs text-muted-foreground mt-2">
                    Supported formats: PDF, DOC, DOCX, ZIP (Max 10MB)
                  </p>
                </div>
              </div>

              <Button className="w-full">
                <Upload className="h-4 w-4 mr-2" />
                Submit Assignment
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="submissions" className="space-y-4">
          <div className="grid gap-4">
            {assignments.map((assignment) => (
              <Card key={assignment.id} className="hover:shadow-md transition-all duration-200">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">{assignment.title}</CardTitle>
                      <CardDescription>
                        {assignment.course} • {assignment.semester}
                      </CardDescription>
                    </div>
                    <Badge variant={getStatusColor(assignment.status) as any}>{assignment.status}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-sm">
                        <Calendar className="h-4 w-4" />
                        <span>Due: {new Date(assignment.dueDate).toLocaleDateString()}</span>
                      </div>
                      {assignment.submittedDate && (
                        <div className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Submitted: {new Date(assignment.submittedDate).toLocaleDateString()}</span>
                        </div>
                      )}
                    </div>

                    {assignment.grade && (
                      <div className="space-y-2">
                        <div className="text-sm">
                          <span className="text-muted-foreground">Grade: </span>
                          <span className={`font-semibold ${getGradeColor(assignment.grade)}`}>{assignment.grade}</span>
                        </div>
                        <div className="text-sm">
                          <span className="text-muted-foreground">Points: </span>
                          <span className="font-semibold">{assignment.points}</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {assignment.feedback && (
                    <div className="p-3 bg-muted rounded-lg">
                      <p className="text-sm font-medium mb-1">Instructor Feedback:</p>
                      <p className="text-sm text-muted-foreground">{assignment.feedback}</p>
                    </div>
                  )}

                  <div className="flex justify-end space-x-2">
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                    {assignment.status === "pending" && <Button size="sm">Upload File</Button>}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="grades" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Grade Summary</CardTitle>
              <CardDescription>Your assignment grades and performance overview</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {assignments
                  .filter((a) => a.grade)
                  .map((assignment) => (
                    <div key={assignment.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="space-y-1">
                        <p className="font-medium">{assignment.title}</p>
                        <p className="text-sm text-muted-foreground">{assignment.course}</p>
                      </div>
                      <div className="text-right space-y-1">
                        <p className={`text-lg font-bold ${getGradeColor(assignment.grade!)}`}>{assignment.grade}</p>
                        <p className="text-sm text-muted-foreground">{assignment.points}</p>
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
