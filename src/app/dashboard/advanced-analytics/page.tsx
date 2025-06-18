"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

import {
  TrendingUp,
  TrendingDown,
  Target,
  Users,
  Award,
  Brain,
  Briefcase,
  BarChart3,
  PieChart,
  LineChart,
  Activity,
} from "lucide-react"
import { useState } from "react"
import { useUserRole } from "@/hooks/use-user-role"

export default function AdvancedAnalyticsPage() {
  const { userRole } = useUserRole()
  const [selectedPeriod, setSelectedPeriod] = useState("semester")
  const [comparisonType, setComparisonType] = useState("peer")

  // Mock data for different analytics
  const personalData = {
    gpa: 3.85,
    trend: "+0.25",
    careerReadiness: 78,
    subjects: [
      { name: "Computer Science", score: 92, trend: "+5" },
      { name: "Mathematics", score: 88, trend: "+3" },
      { name: "Physics", score: 85, trend: "-2" },
      { name: "English", score: 90, trend: "+7" },
    ],
  }

  const batchData = {
    averageGpa: 3.42,
    totalStudents: 156,
    topPerformers: 23,
    needsSupport: 12,
    subjects: [
      { name: "Computer Science", average: 82, variance: 12 },
      { name: "Mathematics", average: 78, variance: 15 },
      { name: "Physics", average: 80, variance: 18 },
      { name: "English", average: 85, variance: 10 },
    ],
  }

  const comparisonData = {
    peer: { rank: 5, total: 45, percentile: 89 },
    department: { rank: 23, total: 200, percentile: 88 },
    university: { rank: 156, total: 1200, percentile: 87 },
  }

  const careerReadinessMetrics = {
    technicalSkills: 85,
    softSkills: 78,
    industryKnowledge: 72,
    practicalExperience: 65,
    certifications: 45,
    overallScore: 78,
  }

  return (
    <div className="space-y-6 animate-in fade-in-50 duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Advanced Analytics</h1>
          <p className="text-muted-foreground">Comprehensive insights into academic performance and career readiness</p>
        </div>
        <div className="flex items-center space-x-2">
          <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="semester">Semester</SelectItem>
              <SelectItem value="year">Year</SelectItem>
              <SelectItem value="all">All Time</SelectItem>
            </SelectContent>
          </Select>
          <Badge variant="outline" className="animate-pulse">
            <Activity className="w-3 h-3 mr-1" />
            Live Data
          </Badge>
        </div>
      </div>

      {/* Key Metrics Overview */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="hover:shadow-md transition-all duration-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Performance Score</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{personalData.gpa}</div>
            <div className="flex items-center space-x-1 text-xs text-muted-foreground">
              <TrendingUp className="h-3 w-3 text-green-500" />
              <span>{personalData.trend} this semester</span>
            </div>
            <Progress value={(personalData.gpa / 4) * 100} className="mt-2" />
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-all duration-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Career Readiness</CardTitle>
            <Briefcase className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{careerReadinessMetrics.overallScore}%</div>
            <p className="text-xs text-muted-foreground">Industry ready score</p>
            <Progress value={careerReadinessMetrics.overallScore} className="mt-2" />
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-all duration-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Class Rank</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">#{comparisonData.peer.rank}</div>
            <p className="text-xs text-muted-foreground">of {comparisonData.peer.total} students</p>
            <Badge variant="secondary" className="mt-2">
              {comparisonData.peer.percentile}th percentile
            </Badge>
          </CardContent>
        </Card>

        {userRole === "faculty" && (
          <Card className="hover:shadow-md transition-all duration-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Batch Average</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{batchData.averageGpa}</div>
              <p className="text-xs text-muted-foreground">{batchData.totalStudents} students</p>
              <Progress value={(batchData.averageGpa / 4) * 100} className="mt-2" />
            </CardContent>
          </Card>
        )}
      </div>

      {/* Advanced Analytics Tabs */}
      <Tabs defaultValue="performance" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="performance">Performance Analytics</TabsTrigger>
          <TabsTrigger value="comparison">Comparison Analytics</TabsTrigger>
          <TabsTrigger value="career">Career Readiness</TabsTrigger>
          <TabsTrigger value="predictive">Predictive Insights</TabsTrigger>
        </TabsList>

        <TabsContent value="performance" className="space-y-4">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <LineChart className="h-5 w-5 mr-2" />
                  Performance Trends
                </CardTitle>
                <CardDescription>Academic performance over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {personalData.subjects.map((subject) => (
                    <div key={subject.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{subject.name}</span>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm">{subject.score}%</span>
                          <Badge
                            variant={subject.trend.startsWith("+") ? "default" : "destructive"}
                            className="text-xs"
                          >
                            {subject.trend.startsWith("+") ? (
                              <TrendingUp className="h-3 w-3 mr-1" />
                            ) : (
                              <TrendingDown className="h-3 w-3 mr-1" />
                            )}
                            {subject.trend}
                          </Badge>
                        </div>
                      </div>
                      <Progress value={subject.score} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {userRole === "faculty" && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart3 className="h-5 w-5 mr-2" />
                    Batch Analytics
                  </CardTitle>
                  <CardDescription>Class performance distribution</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div className="p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">{batchData.topPerformers}</div>
                        <p className="text-xs text-muted-foreground">Top Performers</p>
                      </div>
                      <div className="p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">
                          {batchData.totalStudents - batchData.topPerformers - batchData.needsSupport}
                        </div>
                        <p className="text-xs text-muted-foreground">Average</p>
                      </div>
                      <div className="p-3 bg-red-50 dark:bg-red-950/20 rounded-lg">
                        <div className="text-2xl font-bold text-red-600">{batchData.needsSupport}</div>
                        <p className="text-xs text-muted-foreground">Need Support</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {batchData.subjects.map((subject) => (
                        <div key={subject.name} className="flex justify-between items-center">
                          <span className="text-sm">{subject.name}</span>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm">{subject.average}%</span>
                            <Badge variant="outline" className="text-xs">
                              ±{subject.variance}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </TabsContent>

        <TabsContent value="comparison" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <PieChart className="h-5 w-5 mr-2" />
                Comparison Analytics
              </CardTitle>
              <CardDescription>Compare performance across different groups</CardDescription>
              <div className="flex items-center space-x-2">
                <Select value={comparisonType} onValueChange={setComparisonType}>
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="peer">Peer Group</SelectItem>
                    <SelectItem value="department">Department</SelectItem>
                    <SelectItem value="university">University</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-3">
                {Object.entries(comparisonData).map(([key, data]) => (
                  <Card key={key} className={comparisonType === key ? "ring-2 ring-primary" : ""}>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base capitalize">{key} Comparison</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center space-y-2">
                        <div className="text-3xl font-bold">#{data.rank}</div>
                        <p className="text-sm text-muted-foreground">out of {data.total}</p>
                        <Badge variant="secondary">{data.percentile}th percentile</Badge>
                        <Progress value={data.percentile} className="mt-2" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="career" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Brain className="h-5 w-5 mr-2" />
                Career Readiness Score
              </CardTitle>
              <CardDescription>Industry readiness assessment based on skills and experience</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-lg">
                    <div className="text-4xl font-bold text-blue-600">{careerReadinessMetrics.overallScore}%</div>
                    <p className="text-sm text-muted-foreground mt-2">Overall Career Readiness</p>
                    <Badge variant="secondary" className="mt-2">
                      {careerReadinessMetrics.overallScore >= 80
                        ? "Industry Ready"
                        : careerReadinessMetrics.overallScore >= 60
                          ? "Nearly Ready"
                          : "Needs Development"}
                    </Badge>
                  </div>
                </div>
                <div className="space-y-3">
                  {Object.entries(careerReadinessMetrics)
                    .filter(([key]) => key !== "overallScore")
                    .map(([key, value]) => (
                      <div key={key} className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span className="capitalize">{key.replace(/([A-Z])/g, " $1").trim()}</span>
                          <span className="font-medium">{value}%</span>
                        </div>
                        <Progress value={value} className="h-2" />
                      </div>
                    ))}
                </div>
              </div>
              <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg">
                <h4 className="font-medium text-yellow-800 dark:text-yellow-200 mb-2">Recommendations</h4>
                <ul className="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
                  <li>• Focus on gaining practical experience through internships</li>
                  <li>• Consider pursuing industry certifications</li>
                  <li>• Develop soft skills through group projects and presentations</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="predictive" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Activity className="h-5 w-5 mr-2" />
                Predictive Insights
              </CardTitle>
              <CardDescription>AI-powered predictions and recommendations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <h4 className="font-medium">Semester End Predictions</h4>
                  <div className="space-y-3">
                    <div className="p-3 border rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Expected GPA</span>
                        <span className="font-medium">3.92</span>
                      </div>
                      <Progress value={92} className="mt-2 h-2" />
                      <p className="text-xs text-muted-foreground mt-1">Based on current trends</p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Class Rank Projection</span>
                        <span className="font-medium">#3</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">Potential improvement of 2 positions</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-medium">Risk Assessment</h4>
                  <div className="space-y-3">
                    <div className="p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                      <p className="text-sm font-medium text-green-800 dark:text-green-200">Low Risk</p>
                      <p className="text-xs text-green-600 dark:text-green-400">
                        Strong performance trajectory maintained
                      </p>
                    </div>
                    <div className="p-3 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                      <p className="text-sm font-medium text-yellow-800 dark:text-yellow-200">Monitor Physics</p>
                      <p className="text-xs text-yellow-600 dark:text-yellow-400">
                        Slight decline detected, consider additional support
                      </p>
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
