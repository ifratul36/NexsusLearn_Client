"use client"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Bot,
  Send,
  BookOpen,
  Lightbulb,
  MessageSquare,
  Brain,
  Sparkles,
  Clock,
  Star,
  FileText,
  Video,
  LinkIcon,
} from "lucide-react"

interface Message {
  id: string
  type: "user" | "assistant"
  content: string
  timestamp: Date
  category?: string
}

interface Resource {
  id: string
  title: string
  type: "article" | "video" | "practice" | "link"
  url: string
  description: string
  difficulty: "beginner" | "intermediate" | "advanced"
}

export default function AIAssistantPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "assistant",
      content:
        "Hello! I'm your AI Academic Assistant. I can help you with:\n\n• Explaining complex concepts\n• Recommending study resources\n• Providing feedback on your work\n• Answering academic questions\n• Creating study plans\n\nWhat would you like to learn about today?",
      timestamp: new Date(),
      category: "greeting",
    },
  ])
  const [inputMessage, setInputMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: inputMessage,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputMessage("")
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = generateAIResponse(inputMessage)
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: "assistant",
        content: aiResponse,
        timestamp: new Date(),
        category: "response",
      }
      setMessages((prev) => [...prev, assistantMessage])
      setIsTyping(false)
    }, 1500)
  }

  const generateAIResponse = (input: string): string => {
    const lowerInput = input.toLowerCase()

    if (lowerInput.includes("data structure") || lowerInput.includes("algorithm")) {
      return "Great question about data structures! Let me explain:\n\n**Data Structures** are ways to organize and store data efficiently. Here are the key types:\n\n• **Arrays**: Linear collection of elements\n• **Linked Lists**: Dynamic linear structure\n• **Stacks**: LIFO (Last In, First Out) structure\n• **Queues**: FIFO (First In, First Out) structure\n• **Trees**: Hierarchical structure\n• **Graphs**: Network of connected nodes\n\n**Study Tip**: Practice implementing each structure in your preferred programming language. Would you like me to recommend specific resources or explain any particular data structure in detail?"
    }

    if (lowerInput.includes("calculus") || lowerInput.includes("derivative") || lowerInput.includes("integral")) {
      return "Calculus can be challenging, but I'll help you understand it step by step!\n\n**Key Concepts:**\n\n• **Derivatives**: Rate of change (slope of tangent line)\n• **Integrals**: Area under curve (accumulation)\n• **Limits**: Foundation of calculus\n\n**Study Strategy:**\n1. Master the basic rules first\n2. Practice with simple functions\n3. Gradually work on complex problems\n4. Visualize concepts with graphs\n\n**Recommended Practice**: Start with polynomial functions, then move to trigonometric and exponential functions. Would you like me to explain any specific calculus concept?"
    }

    if (lowerInput.includes("study plan") || lowerInput.includes("schedule")) {
      return "I'd be happy to help you create an effective study plan! Here's a framework:\n\n**Daily Study Structure:**\n• 🌅 Morning (2 hours): Most challenging subjects\n• 🌞 Afternoon (1.5 hours): Practice problems\n• 🌙 Evening (1 hour): Review and light reading\n\n**Weekly Planning:**\n• Monday-Wednesday: New concepts\n• Thursday-Friday: Practice and application\n• Weekend: Review and catch-up\n\n**Study Techniques:**\n• Pomodoro Technique (25 min focus + 5 min break)\n• Active recall and spaced repetition\n• Teaching concepts to others\n\nWhat subjects are you focusing on? I can create a personalized plan for you!"
    }

    if (lowerInput.includes("physics") || lowerInput.includes("mechanics") || lowerInput.includes("thermodynamics")) {
      return "Physics concepts can be abstract, but let's make them concrete!\n\n**Study Approach for Physics:**\n\n1. **Understand the Concept**: Don't just memorize formulas\n2. **Visualize**: Draw diagrams and free-body diagrams\n3. **Practice Problems**: Start simple, build complexity\n4. **Connect to Real Life**: Find everyday examples\n\n**Key Physics Topics:**\n• Mechanics: Motion, forces, energy\n• Thermodynamics: Heat, temperature, entropy\n• Electromagnetism: Electric and magnetic fields\n• Waves: Sound, light, interference\n\n**Pro Tip**: Always start problem-solving by identifying what you know and what you need to find. Which physics topic would you like to explore?"
    }

    return "That's an interesting question! Based on your query, here are some thoughts:\n\n• I can provide detailed explanations on academic topics\n• Recommend study strategies tailored to your learning style\n• Help break down complex problems into manageable steps\n• Suggest resources for deeper learning\n\nCould you provide more specific details about what you'd like to learn? For example:\n- Which subject or topic?\n- What specific concept you're struggling with?\n- What type of help you need (explanation, practice, resources)?\n\nThe more specific you are, the better I can assist you!"
  }

  const quickActions = [
    { label: "Explain Data Structures", icon: Brain },
    { label: "Help with Calculus", icon: BookOpen },
    { label: "Create Study Plan", icon: Clock },
    { label: "Physics Concepts", icon: Lightbulb },
  ]

  const recommendedResources: Resource[] = [
    {
      id: "1",
      title: "Introduction to Algorithms",
      type: "article",
      url: "#",
      description: "Comprehensive guide to fundamental algorithms and data structures",
      difficulty: "intermediate",
    },
    {
      id: "2",
      title: "Calculus Made Easy",
      type: "video",
      url: "#",
      description: "Visual explanations of calculus concepts with examples",
      difficulty: "beginner",
    },
    {
      id: "3",
      title: "Physics Problem Solving",
      type: "practice",
      url: "#",
      description: "Interactive physics problems with step-by-step solutions",
      difficulty: "intermediate",
    },
    {
      id: "4",
      title: "Khan Academy - Computer Science",
      type: "link",
      url: "#",
      description: "Free online courses covering programming and CS concepts",
      difficulty: "beginner",
    },
  ]

  const getResourceIcon = (type: string) => {
    switch (type) {
      case "article":
        return FileText
      case "video":
        return Video
      case "practice":
        return Brain
      case "link":
        return LinkIcon
      default:
        return FileText
    }
  }

  return (
    <div className="space-y-6 animate-in fade-in-50 duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">AI Academic Assistant</h1>
          <p className="text-muted-foreground">Your 24/7 AI-powered learning companion for academic success</p>
        </div>
        <Badge variant="outline" className="animate-pulse">
          <Sparkles className="w-3 h-3 mr-1" />
          AI Powered
        </Badge>
      </div>

      <Tabs defaultValue="chat" className="space-y-4">
        <TabsList>
          <TabsTrigger value="chat">AI Chat</TabsTrigger>
          <TabsTrigger value="resources">Recommended Resources</TabsTrigger>
          <TabsTrigger value="feedback">Auto Feedback</TabsTrigger>
          <TabsTrigger value="concepts">Concept Explorer</TabsTrigger>
        </TabsList>

        <TabsContent value="chat" className="space-y-4">
          <div className="grid gap-6 lg:grid-cols-4">
            <div className="lg:col-span-3">
              <Card className="h-[600px] flex flex-col">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center">
                    <Bot className="h-5 w-5 mr-2 text-blue-500" />
                    AI Assistant Chat
                  </CardTitle>
                  <CardDescription>Ask questions, get explanations, and receive personalized help</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <ScrollArea className="flex-1 pr-4">
                    <div className="space-y-4">
                      {messages?.map((message) => (
                        <div
                          key={message.id}
                          className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                        >
                          <div
                            className={`max-w-[80%] p-3 rounded-lg ${
                              message.type === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                            }`}
                          >
                            <div className="whitespace-pre-wrap text-sm">{message.content}</div>
                            <div className="text-xs opacity-70 mt-1">{message.timestamp.toLocaleTimeString()}</div>
                          </div>
                        </div>
                      ))}
                      {isTyping && (
                        <div className="flex justify-start">
                          <div className="bg-muted p-3 rounded-lg">
                            <div className="flex items-center space-x-1">
                              <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                              <div
                                className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
                                style={{ animationDelay: "0.1s" }}
                              ></div>
                              <div
                                className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
                                style={{ animationDelay: "0.2s" }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      )}
                      <div ref={messagesEndRef} />
                    </div>
                  </ScrollArea>
                  <div className="flex items-center space-x-2 pt-4 border-t">
                    <Input
                      placeholder="Ask me anything about your studies..."
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                      className="flex-1"
                    />
                    <Button onClick={handleSendMessage} disabled={!inputMessage.trim() || isTyping}>
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-4">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {quickActions?.map((action, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="w-full justify-start text-sm"
                      onClick={() => setInputMessage(action.label)}
                    >
                      <action.icon className="h-4 w-4 mr-2" />
                      {action.label}
                    </Button>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">AI Capabilities</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center space-x-2">
                      <MessageSquare className="h-4 w-4 text-blue-500" />
                      <span>24/7 Question Answering</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <BookOpen className="h-4 w-4 text-green-500" />
                      <span>Concept Explanations</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Lightbulb className="h-4 w-4 text-yellow-500" />
                      <span>Study Recommendations</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Star className="h-4 w-4 text-purple-500" />
                      <span>Personalized Feedback</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="resources" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recommended Learning Resources</CardTitle>
              <CardDescription>AI-curated resources based on your learning patterns and needs</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                {recommendedResources?.map((resource) => {
                  const IconComponent = getResourceIcon(resource.type)
                  return (
                    <Card key={resource.id} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex items-start space-x-3">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <IconComponent className="h-5 w-5 text-primary" />
                          </div>
                          <div className="flex-1 space-y-2">
                            <div className="flex items-center justify-between">
                              <h4 className="font-medium">{resource.title}</h4>
                              <Badge variant="outline" className="text-xs">
                                {resource.difficulty}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">{resource.description}</p>
                            <Button size="sm" variant="outline" className="w-full">
                              Access Resource
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="feedback" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Auto-Generated Feedback</CardTitle>
              <CardDescription>AI analysis of your recent academic performance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                  <h4 className="font-medium text-green-800 dark:text-green-200 mb-2">Strengths Identified</h4>
                  <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                    <li>• Consistent improvement in Computer Science assignments</li>
                    <li>• Strong analytical thinking in Mathematics problems</li>
                    <li>• Good time management for assignment submissions</li>
                  </ul>
                </div>

                <div className="p-4 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                  <h4 className="font-medium text-yellow-800 dark:text-yellow-200 mb-2">Areas for Improvement</h4>
                  <ul className="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
                    <li>• Physics concepts need more practice with real-world applications</li>
                    <li>• Consider forming study groups for collaborative learning</li>
                    <li>• Increase participation in class discussions</li>
                  </ul>
                </div>

                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h4 className="font-medium text-blue-800 dark:text-blue-200 mb-2">Personalized Recommendations</h4>
                  <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                    <li>• Schedule 30 minutes daily for Physics problem-solving</li>
                    <li>• Use visual aids and diagrams for better concept understanding</li>
                    <li>• Set up weekly review sessions for challenging topics</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="concepts" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Concept Explorer</CardTitle>
              <CardDescription>Interactive learning paths for complex topics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                {[
                  { title: "Data Structures & Algorithms", progress: 75, topics: 12 },
                  { title: "Calculus & Derivatives", progress: 60, topics: 8 },
                  { title: "Physics Mechanics", progress: 45, topics: 10 },
                  { title: "Database Systems", progress: 30, topics: 15 },
                  { title: "Linear Algebra", progress: 85, topics: 6 },
                  { title: "Thermodynamics", progress: 20, topics: 9 },
                ]?.map((concept, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
                    <CardContent className="p-4">
                      <div className="space-y-3">
                        <h4 className="font-medium">{concept.title}</h4>
                        <div className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span>Progress</span>
                            <span>{concept.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-primary h-2 rounded-full transition-all duration-300"
                              style={{ width: `${concept.progress}%` }}
                            />
                          </div>
                        </div>
                        <div className="flex justify-between items-center text-sm text-muted-foreground">
                          <span>{concept.topics} topics</span>
                          <Button size="sm" variant="outline">
                            Continue
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
