import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react"

export function CTA() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5">
      <div className="w-[95%] mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Get Started
          </Badge>
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Academic Experience?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Join thousands of educational institutions already using NexusLearn to enhance their academic monitoring and
            communication systems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="text-lg px-8">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              Schedule Demo
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Email Support</h3>
              <p className="text-sm text-muted-foreground mb-3">Get help from our support team</p>
              <p className="text-sm font-medium">support@nexuslearn.com</p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <Phone className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Phone Support</h3>
              <p className="text-sm text-muted-foreground mb-3">Speak with our experts directly</p>
              <p className="text-sm font-medium">+1 (555) 123-4567</p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <MapPin className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Office Location</h3>
              <p className="text-sm text-muted-foreground mb-3">Visit our headquarters</p>
              <p className="text-sm font-medium">123 Education St, Tech City</p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12 pt-8 border-t">
          <p className="text-sm text-muted-foreground">
            © 2024 NexusLearn. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </section>
  )
}
