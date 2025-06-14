/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Target, TrendingUp, BarChart3, CheckCircle } from "lucide-react"

export default function POQOOPage() {
  const programOutcomes = [
    {
      id: "PO1",
      title: "Engineering Knowledge",
      description: "Apply knowledge of mathematics, science, and engineering fundamentals",
      score: 85,
      target: 80,
      status: "achieved",
      courses: ["Mathematics", "Physics", "Computer Science"],
    },
    {
      id: "PO2",
      title: "Problem Analysis",
      description: "Identify, formulate, and solve complex engineering problems",
      score: 78,
      target: 75,
      status: "achieved",
      courses: ["Data Structures", "Algorithms", "Software Engineering"],
    },
    {
      id: "PO3",
      title: "Design/Development of Solutions",
      description: "Design solutions for complex engineering problems",
      score: 92,
      target: 85,
      status: "exceeded",
      courses: ["System Design", "Database Design", "Web Development"],
    },
    {
      id: "PO4",
      title: "Conduct Investigations",
      description: "Conduct investigations of complex problems using research-based knowledge",
      score: 88,
      target: 80,
      status: "achieved",
      courses: ["Research Methodology", "Project Work", "Lab Experiments"],
    },
  ]

  const qualityOutcomes = [
    {
      id: "QOO1",
      title: "Communication Skills",
      description: "Communicate effectively on complex engineering activities",
      score: 88,
      target: 85,
      status: "achieved",
      activities: ["Presentations", "Technical Writing", "Group Discussions"],
    },
    {
      id: "QOO2",
      title: "Teamwork",
      description: "Function effectively as an individual and as a member of diverse teams",
      score: 91,
      target: 80,
      status: "exceeded",
      activities: ["Group Projects", "Team Assignments", "Collaborative Work"],
    },
    {
      id: "QOO3",
      title: "Leadership",
      description: "Demonstrate leadership qualities in multidisciplinary settings",
      score: 76,
      target: 75,
      status: "achieved",
      activities: ["Project Leadership", "Team Management", "Initiative Taking"],
    },
    {
      id: "QOO4",
      title: "Ethics and Responsibility",
      description: "Apply ethical principles and commit to professional ethics",
      score: 94,
      target: 90,
      status: "exceeded",
      activities: ["Ethics Courses", "Professional Conduct", "Social Responsibility"],
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "exceeded":
        return "default"
      case "achieved":
        return "secondary"
      case "developing":
        return "outline"
      default:
        return "destructive"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "exceeded":
        return <TrendingUp className="h-4 w-4 text-green-600" />
      case "achieved":
        return <CheckCircle className="h-4 w-4 text-blue-600" />
      default:
        return <Target className="h-4 w-4 text-yellow-600" />
    }
  }

  return (
    <div className="space-y-6 animate-in fade-in-50 duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">PO/QOO Tracker</h1>
          <p className="text-muted-foreground">
            Track Program Outcomes (PO) and Quality of Outcomes (QOO) through flowcharts and graphs.
          </p>
        </div>
        <Badge variant="outline" className="animate-pulse">
          <Target className="w-3 h-3 mr-1" />
          Tracking Active
        </Badge>
      </div>

      {/* Overview Statistics */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">PO Average</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">85.8%</div>
            <p className="text-xs text-muted-foreground">Program Outcomes</p>
            <Progress value={85.8} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">QOO Average</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">87.3%</div>
            <p className="text-xs text-muted-foreground">Quality Outcomes</p>
            <Progress value={87.3} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Targets Met</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8/8</div>
            <p className="text-xs text-muted-foreground">All outcomes achieved</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Exceeded</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Above target</p>
          </CardContent>
        </Card>
      </div>

      {/* PO/QOO Tabs */}
      <Tabs defaultValue="program-outcomes" className="space-y-4">
        <TabsList>
          <TabsTrigger value="program-outcomes">Program Outcomes</TabsTrigger>
          <TabsTrigger value="quality-outcomes">Quality Outcomes</TabsTrigger>
          <TabsTrigger value="charts">Flowcharts & Graphs</TabsTrigger>
          <TabsTrigger value="analysis">Analysis</TabsTrigger>
        </TabsList>

        <TabsContent value="program-outcomes" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Program Outcomes (PO)</CardTitle>
              <CardDescription>Track your achievement of program-specific learning outcomes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {programOutcomes.map((po) => (
                  <Card key={po.id} className="hover:shadow-md transition-all duration-200">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          {getStatusIcon(po.status)}
                          <div>
                            <h4 className="font-semibold">
                              {po.id}: {po.title}
                            </h4>
                            <p className="text-sm text-muted-foreground">{po.description}</p>
                          </div>
                        </div>
                        <Badge variant={getStatusColor(po.status) as any}>{po.status}</Badge>
                      </div>

                      <div className="space-y-3">
                        <div className="flex justify-between text-sm">
                          <span>Current Score</span>
                          <span className="font-medium">{po.score}%</span>
                        </div>
                        <Progress value={po.score} className="h-3" />
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>Target: {po.target}%</span>
                          <span>
                            {po.score >= po.target
                              ? `+${po.score - po.target}% above target`
                              : `${po.target - po.score}% to target`}
                          </span>
                        </div>
                      </div>

                      <div className="mt-4">
                        <p className="text-sm font-medium mb-2">Related Courses:</p>
                        <div className="flex flex-wrap gap-2">
                          {po.courses.map((course) => (
                            <Badge key={course} variant="outline" className="text-xs">
                              {course}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="quality-outcomes" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Quality of Outcomes (QOO)</CardTitle>
              <CardDescription>Monitor the quality and depth of your learning achievements</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {qualityOutcomes.map((qoo) => (
                  <Card key={qoo.id} className="hover:shadow-md transition-all duration-200">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          {getStatusIcon(qoo.status)}
                          <div>
                            <h4 className="font-semibold">
                              {qoo.id}: {qoo.title}
                            </h4>
                            <p className="text-sm text-muted-foreground">{qoo.description}</p>
                          </div>
                        </div>
                        <Badge variant={getStatusColor(qoo.status) as any}>{qoo.status}</Badge>
                      </div>

                      <div className="space-y-3">
                        <div className="flex justify-between text-sm">
                          <span>Quality Score</span>
                          <span className="font-medium">{qoo.score}%</span>
                        </div>
                        <Progress value={qoo.score} className="h-3" />
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>Target: {qoo.target}%</span>
                          <span>
                            {qoo.score >= qoo.target
                              ? `+${qoo.score - qoo.target}% above target`
                              : `${qoo.target - qoo.score}% to target`}
                          </span>
                        </div>
                      </div>

                      <div className="mt-4">
                        <p className="text-sm font-medium mb-2">Assessment Activities:</p>
                        <div className="flex flex-wrap gap-2">
                          {qoo.activities.map((activity) => (
                            <Badge key={activity} variant="outline" className="text-xs">
                              {activity}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="charts" className="space-y-4">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>PO Achievement Flowchart</CardTitle>
                <CardDescription>Visual representation of program outcome progression</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border-2 border-blue-200 dark:border-blue-800">
                    <p className="font-medium">Program Start</p>
                    <p className="text-sm text-muted-foreground">Baseline Assessment</p>
                  </div>
                  <div className="flex justify-center">
                    <div className="w-px h-8 bg-border"></div>
                  </div>
                  {programOutcomes.map((po, index) => (
                    <div key={po.id}>
                      <div
                        className={`p-4 rounded-lg border-2 ${
                          po.status === "exceeded"
                            ? "bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800"
                            : po.status === "achieved"
                              ? "bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800"
                              : "bg-yellow-50 dark:bg-yellow-950/20 border-yellow-200 dark:border-yellow-800"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">
                              {po.id}: {po.title}
                            </p>
                            <p className="text-sm text-muted-foreground">{po.score}%</p>
                          </div>
                          {getStatusIcon(po.status)}
                        </div>
                      </div>
                      {index < programOutcomes.length - 1 && (
                        <div className="flex justify-center">
                          <div className="w-px h-8 bg-border"></div>
                        </div>
                      )}
                    </div>
                  ))}
                  <div className="flex justify-center">
                    <div className="w-px h-8 bg-border"></div>
                  </div>
                  <div className="text-center p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border-2 border-green-200 dark:border-green-800">
                    <p className="font-medium">Program Completion</p>
                    <p className="text-sm text-muted-foreground">All outcomes achieved</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>QOO Quality Matrix</CardTitle>
                <CardDescription>Quality assessment across different dimensions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {qualityOutcomes.map((qoo) => (
                    <div key={qoo.id} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>
                          {qoo.id}: {qoo.title}
                        </span>
                        <span className="font-medium">{qoo.score}%</span>
                      </div>
                      <div className="relative">
                        <Progress value={qoo.score} className="h-4" />
                        <div className="absolute top-0 h-4 w-1 bg-red-500 rounded" style={{ left: `${qoo.target}%` }} />
                      </div>
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>Target: {qoo.target}%</span>
                        <Badge variant={getStatusColor(qoo.status) as any} className="text-xs">
                          {qoo.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="analysis" className="space-y-4">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Performance Analysis</CardTitle>
                <CardDescription>Detailed analysis of your PO/QOO achievements</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                    <h4 className="font-medium text-green-800 dark:text-green-200 mb-2">Strengths</h4>
                    <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                      <li>• Excellent design and development skills (PO3: 92%)</li>
                      <li>• Strong ethical foundation (QOO4: 94%)</li>
                      <li>• Outstanding teamwork abilities (QOO2: 91%)</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                    <h4 className="font-medium text-blue-800 dark:text-blue-200 mb-2">Achievements</h4>
                    <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                      <li>• All program outcomes achieved or exceeded</li>
                      <li>• 3 outcomes exceeded target expectations</li>
                      <li>• Consistent performance across all domains</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                    <h4 className="font-medium text-yellow-800 dark:text-yellow-200 mb-2">Growth Areas</h4>
                    <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-1">
                      <li>• Leadership skills can be further developed</li>
                      <li>• Problem analysis techniques improvement</li>
                      <li>• Research methodology enhancement</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recommendations</CardTitle>
                <CardDescription>Personalized suggestions for continued growth</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Short-term Goals (Next Semester)</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Take on leadership roles in group projects</li>
                      <li>• Participate in research activities</li>
                      <li>• Join technical clubs and societies</li>
                    </ul>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Long-term Development</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Pursue advanced courses in weak areas</li>
                      <li>• Engage in industry internships</li>
                      <li>• Develop portfolio projects</li>
                    </ul>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Career Alignment</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Strong foundation for software development</li>
                      <li>• Well-suited for team-based environments</li>
                      <li>• Consider roles requiring design thinking</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
