import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { GraduationCap, Users, Heart, ArrowRight, CheckCircle } from "lucide-react"

export function UserTypes() {
  const userTypes = [
    {
      icon: GraduationCap,
      title: "Students",
      description: "Comprehensive academic management and progress tracking",
      color: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-50 dark:bg-blue-950/20",
      features: [
        "Real-time notifications for assignments and events",
        "Academic task management and submissions",
        "Personal performance analytics and charts",
        "PO/QOO tracking with visual flowcharts",
        "Access to counseling and academic support",
        "Assignment upload organized by semester",
      ],
    },
    {
      icon: Users,
      title: "Faculty",
      description: "Advanced tools for teaching, monitoring, and student interaction",
      color: "text-green-600 dark:text-green-400",
      bgColor: "bg-green-50 dark:bg-green-950/20",
      features: [
        "Secure biometric login system",
        "Student interaction and task assignment",
        "Course material upload and management",
        "Batch-wise academic analytics dashboard",
        "PO/QOO evaluation and reporting",
        "Student profile and performance access",
      ],
    },
    {
      icon: Heart,
      title: "Guardians",
      description: "Stay connected with your child's academic journey",
      color: "text-purple-600 dark:text-purple-400",
      bgColor: "bg-purple-50 dark:bg-purple-950/20",
      features: [
        "Biometric access via student ID card",
        "Academic progress and performance charts",
        "Real-time notifications about student activities",
        "Access to counseling discussions",
        "Attendance and behavior reports",
        "PO/QOO learning outcome visualizations",
      ],
    },
  ]

  return (
    <section id="dashboard" className="py-20">
      <div className="w-[95%] mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            User Dashboards
          </Badge>
          <h2 className="text-3xl font-bold mb-4">Tailored Experience for Every User</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Specialized dashboards and features designed for students, faculty, and guardians with role-based access
            control.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {userTypes.map((userType, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/20"
            >
              <CardHeader className="text-center pb-4">
                <div
                  className={`w-16 h-16 mx-auto rounded-full ${userType.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <userType.icon className={`h-8 w-8 ${userType.color}`} />
                </div>
                <CardTitle className="text-2xl mb-2">{userType.title}</CardTitle>
                <CardDescription className="text-base">{userType.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {userType.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-6 group-hover:bg-primary/90 transition-colors">
                  Explore {userType.title} Dashboard
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
