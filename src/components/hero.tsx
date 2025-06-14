import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Play, Shield, BarChart3, Users } from "lucide-react"

export function Hero() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      <div className="w-[95%] mx-auto relative">
        <div className="mx-auto max-w-4xl text-center">
          <Badge variant="secondary" className="mb-6">
            <Shield className="w-4 h-4 mr-2" />
            Secure Biometric Authentication
          </Badge>

          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl mb-6">
            Smart Academic
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent block">
              Monitoring System
            </span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Streamline academic communication and monitoring between students, faculty, and guardians with advanced
            biometric security and real-time analytics.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="text-lg px-8">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center p-6 rounded-lg bg-card border">
              <Users className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Multi-User Platform</h3>
              <p className="text-sm text-muted-foreground text-center">Students, Faculty & Guardians</p>
            </div>
            <div className="flex flex-col items-center p-6 rounded-lg bg-card border">
              <Shield className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Biometric Security</h3>
              <p className="text-sm text-muted-foreground text-center">Fingerprint & Facial Recognition</p>
            </div>
            <div className="flex flex-col items-center p-6 rounded-lg bg-card border">
              <BarChart3 className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Real-time Analytics</h3>
              <p className="text-sm text-muted-foreground text-center">Performance Tracking & Insights</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
