"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MessageSquare, Video, Phone, Calendar, Clock, User, Send } from "lucide-react"
import { useState } from "react"

export default function CounselingPage() {
  const [newMessage, setNewMessage] = useState("")

  const counselors = [
    {
      id: 1,
      name: "Dr. Sarah Wilson",
      title: "Academic Counselor",
      specialization: "Academic Performance & Study Skills",
      availability: "Available",
      rating: 4.9,
      avatar: "SW",
      online: true,
    },
    {
      id: 2,
      name: "Prof. Michael Chen",
      title: "Career Counselor",
      specialization: "Career Guidance & Industry Preparation",
      availability: "Busy",
      rating: 4.8,
      avatar: "MC",
      online: true,
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      title: "Personal Counselor",
      specialization: "Mental Health & Personal Development",
      availability: "Available",
      rating: 4.9,
      avatar: "ER",
      online: false,
    },
  ]

  const sessions = [
    {
      id: 1,
      counselor: "Dr. Sarah Wilson",
      date: "2024-12-20",
      time: "2:00 PM",
      type: "Academic Support",
      status: "scheduled",
      notes: "Discuss study strategies for upcoming exams",
    },
    {
      id: 2,
      counselor: "Prof. Michael Chen",
      date: "2024-12-18",
      time: "10:00 AM",
      type: "Career Guidance",
      status: "completed",
      notes: "Reviewed internship opportunities and resume",
    },
    {
      id: 3,
      counselor: "Dr. Emily Rodriguez",
      date: "2024-12-15",
      time: "3:30 PM",
      type: "Personal Development",
      status: "completed",
      notes: "Discussed time management and stress reduction techniques",
    },
  ]

  const chatMessages = [
    {
      id: 1,
      sender: "Dr. Sarah Wilson",
      message:
        "Hello John! I've reviewed your recent academic performance. How are you feeling about your current study routine?",
      time: "2:30 PM",
      isOwn: false,
    },
    {
      id: 2,
      sender: "You",
      message:
        "Hi Dr. Wilson! I've been struggling a bit with time management, especially with multiple assignments due around the same time.",
      time: "2:32 PM",
      isOwn: true,
    },
    {
      id: 3,
      sender: "Dr. Sarah Wilson",
      message:
        "That's a common challenge. Let's work on creating a structured schedule. Have you tried using any planning tools or techniques?",
      time: "2:35 PM",
      isOwn: false,
    },
  ]

  return (
    <div className="space-y-6 animate-in fade-in-50 duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Counseling</h1>
          <p className="text-muted-foreground">Access automated or real-time academic support and guidance.</p>
        </div>
        <Button>
          <Calendar className="h-4 w-4 mr-2" />
          Schedule Session
        </Button>
      </div>

      {/* Counseling Tabs */}
      <Tabs defaultValue="chat" className="space-y-4">
        <TabsList>
          <TabsTrigger value="chat">Live Chat</TabsTrigger>
          <TabsTrigger value="counselors">Counselors</TabsTrigger>
          <TabsTrigger value="sessions">My Sessions</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>

        <TabsContent value="chat" className="space-y-4">
          <div className="grid gap-6 lg:grid-cols-3">
            <Card className="lg:col-span-2">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="/placeholder.svg?height=40&width=40" />
                      <AvatarFallback>SW</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">Dr. Sarah Wilson</CardTitle>
                      <CardDescription>Academic Counselor • Online</CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                      <Phone className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Video className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="h-96 overflow-y-auto space-y-4 p-4 border rounded-lg bg-muted/20">
                  {chatMessages.map((message) => (
                    <div key={message.id} className={`flex ${message.isOwn ? "justify-end" : "justify-start"}`}>
                      <div
                        className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                          message.isOwn ? "bg-primary text-primary-foreground" : "bg-background border"
                        }`}
                      >
                        <p className="text-sm">{message.message}</p>
                        <p
                          className={`text-xs mt-1 ${
                            message.isOwn ? "text-primary-foreground/70" : "text-muted-foreground"
                          }`}
                        >
                          {message.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center space-x-2">
                  <Input
                    placeholder="Type your message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    className="flex-1"
                  />
                  <Button>
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Common counseling topics</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Study Strategies
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="h-4 w-4 mr-2" />
                  Time Management
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <User className="h-4 w-4 mr-2" />
                  Career Guidance
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Clock className="h-4 w-4 mr-2" />
                  Stress Management
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="counselors" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {counselors.map((counselor) => (
              <Card key={counselor.id} className="hover:shadow-md transition-all duration-200">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src="/placeholder.svg?height=48&width=48" />
                        <AvatarFallback>{counselor.avatar}</AvatarFallback>
                      </Avatar>
                      {counselor.online && (
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-background" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">{counselor.name}</h3>
                      <p className="text-sm text-muted-foreground">{counselor.title}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm font-medium mb-1">Specialization</p>
                    <p className="text-sm text-muted-foreground">{counselor.specialization}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <Badge
                      variant={counselor.availability === "Available" ? "secondary" : "outline"}
                      className={counselor.availability === "Available" ? "text-green-600" : "text-yellow-600"}
                    >
                      {counselor.availability}
                    </Badge>
                    <div className="text-sm">
                      <span className="text-muted-foreground">Rating: </span>
                      <span className="font-medium">{counselor.rating}/5</span>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" className="flex-1">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Chat
                    </Button>
                    <Button size="sm" variant="outline">
                      <Calendar className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="sessions" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>My Counseling Sessions</CardTitle>
              <CardDescription>Track your scheduled and completed counseling sessions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {sessions.map((session) => (
                  <Card key={session.id} className="hover:shadow-md transition-all duration-200">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h4 className="font-semibold">{session.type}</h4>
                          <p className="text-sm text-muted-foreground">with {session.counselor}</p>
                        </div>
                        <Badge variant={session.status === "scheduled" ? "default" : "secondary"}>
                          {session.status}
                        </Badge>
                      </div>
                      <div className="grid gap-2 md:grid-cols-2">
                        <div className="flex items-center space-x-2 text-sm">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(session.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <Clock className="h-4 w-4" />
                          <span>{session.time}</span>
                        </div>
                      </div>
                      <div className="mt-3">
                        <p className="text-sm font-medium mb-1">Session Notes:</p>
                        <p className="text-sm text-muted-foreground">{session.notes}</p>
                      </div>
                      {session.status === "scheduled" && (
                        <div className="flex justify-end space-x-2 mt-4">
                          <Button variant="outline" size="sm">
                            Reschedule
                          </Button>
                          <Button size="sm">Join Session</Button>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="resources" className="space-y-4">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Self-Help Resources</CardTitle>
                <CardDescription>Tools and guides for personal development</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="p-3 border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                    <h4 className="font-medium">Study Techniques Guide</h4>
                    <p className="text-sm text-muted-foreground">Effective methods for better learning</p>
                  </div>
                  <div className="p-3 border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                    <h4 className="font-medium">Time Management Workbook</h4>
                    <p className="text-sm text-muted-foreground">Organize your schedule efficiently</p>
                  </div>
                  <div className="p-3 border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                    <h4 className="font-medium">Stress Reduction Techniques</h4>
                    <p className="text-sm text-muted-foreground">Manage academic pressure effectively</p>
                  </div>
                  <div className="p-3 border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                    <h4 className="font-medium">Career Planning Toolkit</h4>
                    <p className="text-sm text-muted-foreground">Plan your professional journey</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Emergency Support</CardTitle>
                <CardDescription>Immediate help when you need it most</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800">
                  <h4 className="font-medium text-red-800 dark:text-red-200 mb-2">Crisis Support</h4>
                  <p className="text-sm text-red-600 dark:text-red-400 mb-3">
                    If youre experiencing a mental health crisis, please reach out immediately.
                  </p>
                  <Button variant="destructive" size="sm" className="w-full">
                    <Phone className="h-4 w-4 mr-2" />
                    Emergency Hotline
                  </Button>
                </div>

                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h4 className="font-medium text-blue-800 dark:text-blue-200 mb-2">24/7 Chat Support</h4>
                  <p className="text-sm text-blue-600 dark:text-blue-400 mb-3">
                    Connect with our automated support system anytime.
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Start Chat
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
