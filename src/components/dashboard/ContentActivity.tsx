import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Edit, FileText, Send, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ContentItem {
  id: string;
  title: string;
  status: "created" | "published" | "scheduled";
  timestamp: string;
  website: string;
}

interface ContentActivityProps {
  items?: ContentItem[];
  title?: string;
}

const ContentActivity = ({
  items = [
    {
      id: "1",
      title: "10 Tips for Better SEO Performance",
      status: "created",
      timestamp: "2023-06-15T10:30:00Z",
      website: "techblog.com",
    },
    {
      id: "2",
      title: "How to Improve Your Website Speed",
      status: "published",
      timestamp: "2023-06-14T14:45:00Z",
      website: "webperf.io",
    },
    {
      id: "3",
      title: "The Future of AI in Content Creation",
      status: "scheduled",
      timestamp: "2023-06-16T09:00:00Z",
      website: "aiblog.com",
    },
    {
      id: "4",
      title: "Best Practices for Mobile-First Design",
      status: "created",
      timestamp: "2023-06-15T08:15:00Z",
      website: "designhub.net",
    },
    {
      id: "5",
      title: "Understanding Web Accessibility Guidelines",
      status: "published",
      timestamp: "2023-06-13T16:20:00Z",
      website: "a11y.org",
    },
  ],
  title = "Recent Content Activity",
}: ContentActivityProps) => {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "created":
        return <Badge className="bg-blue-500">Created</Badge>;
      case "published":
        return <Badge className="bg-green-500">Published</Badge>;
      case "scheduled":
        return <Badge className="bg-amber-500">Scheduled</Badge>;
      default:
        return <Badge>Unknown</Badge>;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  };

  return (
    <Card className="w-full h-full bg-white overflow-hidden">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4 max-h-[280px] overflow-y-auto pr-2">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-start justify-between p-3 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-start space-x-3">
                <div className="mt-1">
                  {item.status === "created" && (
                    <FileText className="h-5 w-5 text-blue-500" />
                  )}
                  {item.status === "published" && (
                    <Send className="h-5 w-5 text-green-500" />
                  )}
                  {item.status === "scheduled" && (
                    <Clock className="h-5 w-5 text-amber-500" />
                  )}
                </div>
                <div>
                  <h4 className="font-medium text-sm line-clamp-1">
                    {item.title}
                  </h4>
                  <div className="flex items-center mt-1 space-x-2">
                    <span className="text-xs text-gray-500">
                      {item.website}
                    </span>
                    <span className="text-gray-300">•</span>
                    <span className="text-xs text-gray-500 flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {formatDate(item.timestamp)}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex space-x-1">
                {getStatusBadge(item.status)}
                <div className="flex ml-2">
                  <Button variant="ghost" size="icon" className="h-7 w-7">
                    <Edit className="h-4 w-4 text-gray-500" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-7 w-7">
                    <Trash2 className="h-4 w-4 text-gray-500" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Button variant="link" className="mt-4 text-sm p-0 h-auto">
          View all activity
        </Button>
      </CardContent>
    </Card>
  );
};

export default ContentActivity;
