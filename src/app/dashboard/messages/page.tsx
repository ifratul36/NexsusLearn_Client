"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Search, Send, Paperclip, MoreVertical, Phone, Video } from "lucide-react"
import { useState } from "react"

export default function MessagesPage() {
  const [selectedChat, setSelectedChat] = useState(0)
  const [newMessage, setNewMessage] = useState("")

  const conversations = [
    {
      id: 1,
      name: "Dr. Smith",
      role: "Faculty",
      lastMessage: "Your assignment has been reviewed. Great work!",
      time: "2 min ago",
      unread: 2,
      avatar: "DS",
      online: true,
    },
    {
      id: 2,
      name: "Jane Doe",
      role: "Guardian",
      lastMessage: "How is John's progress in mathematics?",
      time: "1 hour ago",
      unread: 0,
      avatar: "JD",
      online: false,
    },
    {
      id: 3,
      name: "Study Group - CS101",
      role: "Group",
      lastMessage: "Meeting tomorrow at 3 PM in library",
      time: "3 hours ago",
      unread: 5,
      avatar: "SG",
      online: true,
    },
    {
      id: 4,
      name: "Prof. Johnson",
      role: "Faculty",
      lastMessage: "Please submit your lab report by Friday",
      time: "1 day ago",
      unread: 0,
      avatar: "PJ",
      online: false,
    },
  ]

  const messages = [
    {
      id: 1,
      sender: "Dr. Smith",
      content: "Hello John, I've reviewed your latest assignment on Data Structures.",
      time: "10:30 AM",
      isOwn: false,
    },
    {
      id: 2,
      sender: "You",
      content: "Thank you, Dr. Smith! I was particularly proud of the binary tree implementation.",
      time: "10:32 AM",
      isOwn: true,
    },
    {
      id: 3,
      sender: "Dr. Smith",
      content:
        "Your implementation was excellent. The time complexity analysis was spot on. I've given you an A+ for this assignment.",
      time: "10:35 AM",
      isOwn: false,
    },
    {
      id: 4,
      sender: "You",
      content:
        "That's wonderful! Thank you for the feedback. Are there any areas you'd recommend I focus on for the next assignment?",
      time: "10:37 AM",
      isOwn: true,
    },
    {
      id: 5,
      sender: "Dr. Smith",
      content:
        "Your assignment has been reviewed. Great work! For the next assignment, I'd suggest focusing more on algorithm optimization and edge case handling.",
      time: "10:40 AM",
      isOwn: false,
    },
  ]

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Handle sending message
      setNewMessage("")
    }
  }

  return (
    <div className="h-[calc(100vh-8rem)] animate-in fade-in-50 duration-500">
      <div className="flex h-full">
        {/* Conversations List */}
        <Card className="w-80 mr-4 flex flex-col">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Messages</CardTitle>
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search conversations..." className="pl-8" />
            </div>
          </CardHeader>
          <CardContent className="flex-1 p-0">
            <ScrollArea className="h-full">
              <div className="space-y-1 p-3">
                {conversations.map((conversation, index) => (
                  <div
                    key={conversation.id}
                    className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-colors hover:bg-muted/50 ${
                      selectedChat === index ? "bg-muted" : ""
                    }`}
                    onClick={() => setSelectedChat(index)}
                  >
                    <div className="relative">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src="/placeholder.svg?height=40&width=40" />
                        <AvatarFallback>{conversation.avatar}</AvatarFallback>
                      </Avatar>
                      {conversation.online && (
                        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-background" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium truncate">{conversation.name}</p>
                        <span className="text-xs text-muted-foreground">{conversation.time}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-xs text-muted-foreground truncate">{conversation.lastMessage}</p>
                        {conversation.unread > 0 && (
                          <Badge variant="default" className="ml-2 h-5 w-5 rounded-full p-0 text-xs">
                            {conversation.unread}
                          </Badge>
                        )}
                      </div>
                      <Badge variant="outline" className="text-xs mt-1">
                        {conversation.role}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>

        {/* Chat Area */}
        <Card className="flex-1 flex flex-col">
          {/* Chat Header */}
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="/placeholder.svg?height=40&width=40" />
                    <AvatarFallback>{conversations[selectedChat]?.avatar}</AvatarFallback>
                  </Avatar>
                  {conversations[selectedChat]?.online && (
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-background" />
                  )}
                </div>
                <div>
                  <p className="font-medium">{conversations[selectedChat]?.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {conversations[selectedChat]?.online ? "Online" : "Last seen 2 hours ago"}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="icon">
                  <Phone className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Video className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>

          <Separator />

          {/* Messages */}
          <CardContent className="flex-1 p-0">
            <ScrollArea className="h-full p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div key={message.id} className={`flex ${message.isOwn ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                        message.isOwn ? "bg-primary text-primary-foreground" : "bg-muted"
                      }`}
                    >
                      <p className="text-sm">{message.content}</p>
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
            </ScrollArea>
          </CardContent>

          <Separator />

          {/* Message Input */}
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon">
                <Paperclip className="h-4 w-4" />
              </Button>
              <Input
                placeholder="Type a message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                className="flex-1"
              />
              <Button onClick={handleSendMessage} disabled={!newMessage.trim()}>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
