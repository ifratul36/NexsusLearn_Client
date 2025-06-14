import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bell, MessageSquare, Upload, BarChart3, Target, FileText, Calendar, Award, BookOpen } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: Bell,
      title: "Smart Notifications",
      description: "Real-time updates for assignments, events, and academic deadlines",
      badge: "Real-time",
    },
    {
      icon: MessageSquare,
      title: "Counseling Support",
      description: "Automated and live academic counseling for student guidance",
      badge: "AI-Powered",
    },
    {
      icon: Upload,
      title: "Assignment Management",
      description: "Seamless upload and organization by semester and course",
      badge: "Organized",
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Visual charts and graphs for academic progress tracking",
      badge: "Insights",
    },
    {
      icon: Target,
      title: "PO/QOO Tracking",
      description: "Program Outcomes and Quality tracking with flowcharts",
      badge: "Outcomes",
    },
    {
      icon: FileText,
      title: "Task Management",
      description: "Department-assigned tasks with file uploads and reviews",
      badge: "Efficient",
    },
    {
      icon: Calendar,
      title: "Event Management",
      description: "University events, deadlines, and activity scheduling",
      badge: "Scheduled",
    },
    {
      icon: Award,
      title: "Achievement Tracking",
      description: "Monitor student achievements and academic milestones",
      badge: "Recognition",
    },
    {
      icon: BookOpen,
      title: "Resource Library",
      description: "Access to course materials, research papers, and resources",
      badge: "Comprehensive",
    },
  ]

  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="w-[95%] mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Features
          </Badge>
          <h2 className="text-3xl font-bold mb-4">Everything You Need for Academic Excellence</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive tools designed to enhance communication, monitoring, and academic performance across all
            stakeholders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <feature.icon className="h-10 w-10 text-primary group-hover:scale-110 transition-transform" />
                  <Badge variant="secondary" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
