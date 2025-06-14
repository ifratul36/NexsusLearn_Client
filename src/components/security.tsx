import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Fingerprint, Eye, Lock, Key, UserCheck } from "lucide-react"

export function Security() {
  const securityFeatures = [
    {
      icon: Fingerprint,
      title: "Fingerprint Authentication",
      description: "Advanced biometric login using fingerprint scanning technology for secure access control.",
      badge: "Biometric",
    },
    {
      icon: Eye,
      title: "Facial Recognition",
      description: "AI-powered facial recognition system for seamless and secure user authentication.",
      badge: "AI-Powered",
    },
    {
      icon: Lock,
      title: "Data Encryption",
      description: "End-to-end encryption for all sensitive data in transit and at rest with industry standards.",
      badge: "Encrypted",
    },
    {
      icon: Key,
      title: "Role-Based Access",
      description: "Comprehensive role-based access control ensuring users see only authorized information.",
      badge: "RBAC",
    },
    {
      icon: UserCheck,
      title: "Identity Verification",
      description: "Multi-factor authentication combining biometric and traditional security methods.",
      badge: "Multi-Factor",
    },
    {
      icon: Shield,
      title: "Privacy Compliance",
      description: "Full compliance with data privacy regulations and secure biometric data handling.",
      badge: "Compliant",
    },
  ]

  return (
    <section id="security" className="py-20">
      <div className="w-[95%] mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Security & Privacy
          </Badge>
          <h2 className="text-3xl font-bold mb-4">Enterprise-Grade Security</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Advanced biometric authentication and comprehensive security measures to protect sensitive academic data and
            ensure user privacy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {securityFeatures.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
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

        <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 rounded-2xl p-8 border border-red-200 dark:border-red-800">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center flex-shrink-0">
              <Shield className="h-6 w-6 text-red-600 dark:text-red-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-red-900 dark:text-red-100 mb-2">Security First Approach</h3>
              <p className="text-red-700 dark:text-red-200 mb-4">
                Our security architecture follows industry best practices with multiple layers of protection, ensuring
                your academic data remains safe and private at all times.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="border-red-200 text-red-700 dark:border-red-700 dark:text-red-300">
                  HTTPS/TLS Encryption
                </Badge>
                <Badge variant="outline" className="border-red-200 text-red-700 dark:border-red-700 dark:text-red-300">
                  Secure Database Storage
                </Badge>
                <Badge variant="outline" className="border-red-200 text-red-700 dark:border-red-700 dark:text-red-300">
                  Regular Security Audits
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
