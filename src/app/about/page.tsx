"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, Target, Award, BookOpen, Shield, Brain, Heart, Lightbulb, Globe, TrendingUp } from "lucide-react"
import Link from "next/link"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10" />
        <motion.div
          className="max-w-6xl mx-auto text-center relative z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Badge className="mb-4 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">About NexusLearn</Badge>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Revolutionizing Academic Excellence
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            NexusLearn is the next-generation Smart Academic Monitoring and Communication System, designed to bridge the
            gap between students, faculty, and guardians through intelligent technology and comprehensive analytics.
          </p>
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp}>
              <Card className="h-full border-0 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <Target className="h-8 w-8 text-blue-600 mr-3" />
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Our Mission</h2>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    To empower educational institutions with cutting-edge technology that enhances academic performance,
                    streamlines communication, and provides actionable insights for continuous improvement in the
                    learning ecosystem.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full border-0 shadow-lg bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <Globe className="h-8 w-8 text-purple-600 mr-3" />
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Our Vision</h2>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    To become the global leader in smart academic solutions, creating a world where every student
                    reaches their full potential through personalized learning experiences and data-driven educational
                    strategies.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-4 bg-white/50 dark:bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Our Core Values</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              The principles that guide everything we do at NexusLearn
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                icon: Brain,
                title: "Innovation",
                description: "Continuously pushing boundaries with AI-powered solutions and cutting-edge technology.",
              },
              {
                icon: Heart,
                title: "Empathy",
                description:
                  "Understanding the unique needs of students, educators, and families in their academic journey.",
              },
              {
                icon: Shield,
                title: "Security",
                description:
                  "Protecting sensitive academic data with advanced biometric and multi-factor authentication.",
              },
              {
                icon: Lightbulb,
                title: "Excellence",
                description:
                  "Delivering superior quality in every feature, ensuring the best user experience possible.",
              },
              {
                icon: Users,
                title: "Collaboration",
                description: "Fostering seamless communication between all stakeholders in the educational ecosystem.",
              },
              {
                icon: TrendingUp,
                title: "Growth",
                description:
                  "Enabling continuous improvement through comprehensive analytics and personalized insights.",
              },
            ].map((value, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 group-hover:scale-110 transition-transform duration-300">
                        <value.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">{value.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">What Makes Us Different</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Advanced features that set NexusLearn apart from traditional academic management systems
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                icon: Brain,
                title: "AI-Powered Assistant",
                description: "24/7 academic support with intelligent tutoring and personalized recommendations",
              },
              {
                icon: TrendingUp,
                title: "Advanced Analytics",
                description: "Comprehensive performance tracking with predictive insights and career readiness scores",
              },
              {
                icon: Shield,
                title: "Biometric Security",
                description: "Multi-factor authentication with biometric access for maximum data protection",
              },
              {
                icon: Users,
                title: "Real-time Communication",
                description: "Seamless messaging system connecting students, faculty, and guardians instantly",
              },
              {
                icon: BookOpen,
                title: "Smart Assignment System",
                description: "Automated grading, plagiarism detection, and intelligent feedback generation",
              },
              {
                icon: Award,
                title: "Performance Monitoring",
                description: "Continuous tracking of academic progress with early intervention alerts",
              },
            ].map((feature, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <div className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 w-fit group-hover:scale-110 transition-transform duration-300">
                        <feature.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Impact</h2>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Numbers that showcase the success of NexusLearn across educational institutions
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { number: "50,000+", label: "Active Students" },
              { number: "2,500+", label: "Faculty Members" },
              { number: "100+", label: "Institutions" },
              { number: "98%", label: "Satisfaction Rate" },
            ].map((stat, index) => (
              <motion.div key={index} className="text-center" variants={fadeInUp}>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-blue-100 text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">
              Ready to Transform Your Institution?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of educators and students who are already experiencing the future of academic management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                <Link href="/signup">Get Started Today</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Contact Our Team</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
