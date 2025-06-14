"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown, BookOpen, CheckCircle, Clock, Target } from "lucide-react"

export function StatsCards() {
  const stats = [
    {
      title: "Overall GPA",
      value: "3.85",
      change: "+0.12",
      changeType: "positive" as const,
      icon: Target,
      description: "From last semester",
    },
    {
      title: "Completed Tasks",
      value: "47",
      change: "+5",
      changeType: "positive" as const,
      icon: CheckCircle,
      description: "This month",
    },
    {
      title: "Pending Tasks",
      value: "3",
      change: "-2",
      changeType: "positive" as const,
      icon: Clock,
      description: "Due this week",
    },
    {
      title: "Course Progress",
      value: "88.5%",
      change: "+2.3%",
      changeType: "positive" as const,
      icon: BookOpen,
      description: "Average across subjects",
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <Card key={index} className="hover:shadow-md transition-shadow duration-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <div className="flex items-center space-x-2 text-xs text-muted-foreground">
              <Badge variant={stat.changeType === "positive" ? "default" : "destructive"} className="text-xs px-1 py-0">
                {stat.changeType === "positive" ? (
                  <TrendingUp className="h-3 w-3 mr-1" />
                ) : (
                  <TrendingDown className="h-3 w-3 mr-1" />
                )}
                {stat.change}
              </Badge>
              <span>{stat.description}</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
