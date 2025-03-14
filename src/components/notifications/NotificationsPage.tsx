import React from "react";
import Sidebar from "../layout/Sidebar";
import Header from "../layout/Header";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Bell,
  Calendar,
  Clock,
  FileText,
  MessageSquare,
  Settings,
  User,
  CheckCheck,
  Trash2,
  Filter,
} from "lucide-react";

interface Notification {
  id: string;
  title: string;
  description: string;
  time: string;
  read: boolean;
  type: "content" | "system" | "message" | "alert";
}

const NotificationsPage = () => {
  const notifications: Notification[] = [
    {
      id: "1",
      title: "New content published",
      description:
        "Your scheduled content 'How to Improve Your Website Speed' has been published successfully.",
      time: "10 minutes ago",
      read: false,
      type: "content",
    },
    {
      id: "2",
      title: "Content approval required",
      description:
        "'10 Tips for Better SEO Performance' needs your approval before publishing.",
      time: "1 hour ago",
      read: false,
      type: "content",
    },
    {
      id: "3",
      title: "System maintenance",
      description:
        "The system will undergo maintenance on June 30, 2023 at 2:00 AM UTC. Downtime is expected to be approximately 30 minutes.",
      time: "3 hours ago",
      read: true,
      type: "system",
    },
    {
      id: "4",
      title: "New comment on your post",
      description:
        "John Smith commented on your post 'The Future of AI in Content Creation'.",
      time: "Yesterday",
      read: true,
      type: "message",
    },
    {
      id: "5",
      title: "Analytics report ready",
      description:
        "Your weekly analytics report is now available. View it to see how your content performed.",
      time: "2 days ago",
      read: true,
      type: "alert",
    },
    {
      id: "6",
      title: "Content scheduled",
      description:
        "'Best Practices for Mobile-First Design' has been scheduled for publication on June 25, 2023.",
      time: "3 days ago",
      read: true,
      type: "content",
    },
    {
      id: "7",
      title: "New feature available",
      description:
        "We've added a new AI-powered content suggestion feature. Try it out now!",
      time: "5 days ago",
      read: true,
      type: "system",
    },
    {
      id: "8",
      title: "Account security alert",
      description:
        "A new login was detected from an unrecognized device. Please verify if this was you.",
      time: "1 week ago",
      read: true,
      type: "alert",
    },
  ];

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "content":
        return <FileText className="h-5 w-5 text-blue-500" />;
      case "system":
        return <Settings className="h-5 w-5 text-purple-500" />;
      case "message":
        return <MessageSquare className="h-5 w-5 text-green-500" />;
      case "alert":
        return <Bell className="h-5 w-5 text-amber-500" />;
      default:
        return <Bell className="h-5 w-5 text-gray-500" />;
    }
  };

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <div className="flex h-screen w-full bg-gray-50">
      <Sidebar activePath="/notifications" />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title="Notifications" />

        <div className="flex-1 overflow-y-auto p-6">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold">Notifications</h1>
                <p className="text-muted-foreground">
                  Stay updated with the latest activities and alerts
                </p>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" className="gap-1">
                  <Filter className="h-4 w-4" />
                  Filter
                </Button>
                <Button variant="outline" size="sm" className="gap-1">
                  <CheckCheck className="h-4 w-4" />
                  Mark all as read
                </Button>
              </div>
            </div>

            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-5 mb-6">
                <TabsTrigger value="all" className="relative">
                  All
                  {unreadCount > 0 && (
                    <Badge className="ml-2 bg-primary">{unreadCount}</Badge>
                  )}
                </TabsTrigger>
                <TabsTrigger value="content">Content</TabsTrigger>
                <TabsTrigger value="system">System</TabsTrigger>
                <TabsTrigger value="messages">Messages</TabsTrigger>
                <TabsTrigger value="alerts">Alerts</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="space-y-4">
                {notifications.map((notification) => (
                  <NotificationItem
                    key={notification.id}
                    notification={notification}
                  />
                ))}
              </TabsContent>

              <TabsContent value="content" className="space-y-4">
                {notifications
                  .filter((n) => n.type === "content")
                  .map((notification) => (
                    <NotificationItem
                      key={notification.id}
                      notification={notification}
                    />
                  ))}
              </TabsContent>

              <TabsContent value="system" className="space-y-4">
                {notifications
                  .filter((n) => n.type === "system")
                  .map((notification) => (
                    <NotificationItem
                      key={notification.id}
                      notification={notification}
                    />
                  ))}
              </TabsContent>

              <TabsContent value="messages" className="space-y-4">
                {notifications
                  .filter((n) => n.type === "message")
                  .map((notification) => (
                    <NotificationItem
                      key={notification.id}
                      notification={notification}
                    />
                  ))}
              </TabsContent>

              <TabsContent value="alerts" className="space-y-4">
                {notifications
                  .filter((n) => n.type === "alert")
                  .map((notification) => (
                    <NotificationItem
                      key={notification.id}
                      notification={notification}
                    />
                  ))}
              </TabsContent>
            </Tabs>

            <div className="flex justify-center">
              <Button variant="outline">Load More</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface NotificationItemProps {
  notification: Notification;
}

const NotificationItem = ({ notification }: NotificationItemProps) => {
  return (
    <Card
      className={`overflow-hidden transition-colors ${!notification.read ? "border-l-4 border-l-primary" : ""}`}
    >
      <CardContent className="p-4">
        <div className="flex items-start gap-4">
          <div className="mt-1">
            <div className="p-2 rounded-full bg-primary/10">
              {getNotificationIcon(notification.type)}
            </div>
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium">{notification.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {notification.description}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground flex items-center">
                  <Clock className="h-3 w-3 mr-1" />
                  {notification.time}
                </span>
                <div className="flex">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <CheckCheck className="h-4 w-4 text-gray-500" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Trash2 className="h-4 w-4 text-gray-500" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

function getNotificationIcon(type: string) {
  switch (type) {
    case "content":
      return <FileText className="h-5 w-5 text-blue-500" />;
    case "system":
      return <Settings className="h-5 w-5 text-purple-500" />;
    case "message":
      return <MessageSquare className="h-5 w-5 text-green-500" />;
    case "alert":
      return <Bell className="h-5 w-5 text-amber-500" />;
    default:
      return <Bell className="h-5 w-5 text-gray-500" />;
  }
}

export default NotificationsPage;
