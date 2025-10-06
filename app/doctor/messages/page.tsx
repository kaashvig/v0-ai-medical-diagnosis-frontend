"use client"

import { Search, Send } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"

export default function MessagesPage() {
  const conversations = [
    { id: 1, name: "Sarah Johnson", lastMessage: "Thank you for the diagnosis", time: "5m ago", unread: 2 },
    { id: 2, name: "Michael Chen", lastMessage: "When should I schedule follow-up?", time: "1h ago", unread: 0 },
    { id: 3, name: "Emily Davis", lastMessage: "I have some questions about...", time: "2h ago", unread: 1 },
    { id: 4, name: "James Wilson", lastMessage: "Medication side effects", time: "3h ago", unread: 0 },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Messages</h1>
        <p className="text-muted-foreground mt-2">Communicate with your patients</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Conversations</CardTitle>
            <div className="relative mt-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search messages..." className="pl-9" />
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <ScrollArea className="h-[500px]">
              {conversations.map((conv) => (
                <div
                  key={conv.id}
                  className="flex items-center gap-3 p-4 hover:bg-accent cursor-pointer border-b last:border-0"
                >
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=40&width=40" />
                    <AvatarFallback>
                      {conv.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <p className="font-medium truncate">{conv.name}</p>
                      {conv.unread > 0 && (
                        <Badge variant="default" className="ml-2">
                          {conv.unread}
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground truncate">{conv.lastMessage}</p>
                    <p className="text-xs text-muted-foreground mt-1">{conv.time}</p>
                  </div>
                </div>
              ))}
            </ScrollArea>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=40&width=40" />
                <AvatarFallback>SJ</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>Sarah Johnson</CardTitle>
                <p className="text-sm text-muted-foreground">Active now</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[400px] mb-4">
              <div className="space-y-4">
                <div className="flex gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>SJ</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="bg-muted rounded-lg p-3 max-w-[80%]">
                      <p className="text-sm">Hello Doctor, I received my diagnosis report. Thank you so much!</p>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">10:30 AM</p>
                  </div>
                </div>

                <div className="flex gap-3 justify-end">
                  <div className="flex-1 flex justify-end">
                    <div className="bg-primary text-primary-foreground rounded-lg p-3 max-w-[80%]">
                      <p className="text-sm">
                        You're welcome! I've reviewed your case and the AI diagnosis is accurate. Let's schedule a
                        follow-up in 2 weeks.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>SJ</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="bg-muted rounded-lg p-3 max-w-[80%]">
                      <p className="text-sm">That sounds great. Should I continue with the prescribed medication?</p>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">10:32 AM</p>
                  </div>
                </div>
              </div>
            </ScrollArea>

            <div className="flex gap-2">
              <Input placeholder="Type your message..." />
              <Button size="icon">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
