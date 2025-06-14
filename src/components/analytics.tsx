import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { TrendingUp, BarChart3, PieChart, Activity, Target, Award } from "lucide-react"

export function Analytics() {
  const analyticsFeatures = [
    {
      icon: TrendingUp,
      title: "Performance Trends",
      description: "Track academic progress over time with detailed trend analysis",
      value: 85,
      change: "+12%",
    },
    {
      icon: BarChart3,
      title: "Subject-wise Analysis",
      description: "Compare performance across different subjects and courses",
      value: 92,
      change: "+8%",
    },
    {
      icon: PieChart,
      title: "Attendance Tracking",
      description: "Visual representation of attendance patterns and statistics",
      value: 78,
      change: "+5%",
    },
    {
      icon: Activity,
      title: "Engagement Metrics",
      description: "Monitor student engagement and participation levels",
      value: 88,
      change: "+15%",
    },
    {
      icon: Target,
      title: "Goal Achievement",
      description: "Track progress towards academic goals and milestones",
      value: 76,
      change: "+10%",
    },
    {
      icon: Award,
      title: "Achievement Analytics",
      description: "Comprehensive view of awards, recognitions, and accomplishments",
      value: 94,
      change: "+18%",
    },
  ]

  return (
    <section id="analytics" className="py-20 bg-muted/30">
      <div className="w-[95%] mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Analytics & Insights
          </Badge>
          <h2 className="text-3xl font-bold mb-4">Data-Driven Academic Insights</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful analytics tools that transform academic data into actionable insights for better decision-making
            and improved outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {analyticsFeatures.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <feature.icon className="h-8 w-8 text-primary" />
                  <Badge variant="secondary" className="text-xs font-medium">
                    {feature.change}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
                <CardDescription className="text-sm">{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-medium">{feature.value}%</span>
                  </div>
                  <Progress value={feature.value} className="h-2" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Advanced Visualization Tools</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Interactive charts, graphs, and dashboards powered by Chart.js and D3.js for comprehensive academic data
            visualization and Program Outcome (PO) tracking.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="outline" className="px-4 py-2">
              Chart.js Integration
            </Badge>
            <Badge variant="outline" className="px-4 py-2">
              D3.js Visualizations
            </Badge>
            <Badge variant="outline" className="px-4 py-2">
              Real-time Updates
            </Badge>
            <Badge variant="outline" className="px-4 py-2">
              Export Reports
            </Badge>
          </div>
        </div>
      </div>
    </section>
  )
}
