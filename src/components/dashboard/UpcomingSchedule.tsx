import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarDays, Clock, ExternalLink } from "lucide-react";

interface ScheduledContent {
  id: string;
  title: string;
  website: string;
  date: string;
  time: string;
  status: "pending" | "ready";
}

interface UpcomingScheduleProps {
  scheduledContent?: ScheduledContent[];
}

const UpcomingSchedule = ({
  scheduledContent = [
    {
      id: "1",
      title: "10 Ways to Improve Your Website SEO",
      website: "techblog.com",
      date: "2023-06-15",
      time: "09:00 AM",
      status: "ready",
    },
    {
      id: "2",
      title: "The Future of AI in Content Creation",
      website: "futuristicthoughts.com",
      date: "2023-06-15",
      time: "02:30 PM",
      status: "pending",
    },
    {
      id: "3",
      title: "How to Build a Loyal Audience",
      website: "marketingtips.com",
      date: "2023-06-16",
      time: "11:15 AM",
      status: "ready",
    },
    {
      id: "4",
      title: "Latest Trends in Web Development",
      website: "devworld.com",
      date: "2023-06-17",
      time: "10:00 AM",
      status: "pending",
    },
  ],
}: UpcomingScheduleProps) => {
  // Group content by date
  const contentByDate = scheduledContent.reduce<
    Record<string, ScheduledContent[]>
  >((acc, content) => {
    if (!acc[content.date]) {
      acc[content.date] = [];
    }
    acc[content.date].push(content);
    return acc;
  }, {});

  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <Card className="w-full h-full bg-white overflow-hidden">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-xl font-bold">Upcoming Schedule</CardTitle>
        <Button variant="outline" size="sm" className="text-xs">
          View All
        </Button>
      </CardHeader>
      <CardContent className="px-6 pb-6">
        <div className="space-y-4 max-h-[270px] overflow-y-auto pr-2">
          {Object.keys(contentByDate).length > 0 ? (
            Object.entries(contentByDate).map(([date, contents]) => (
              <div key={date} className="space-y-2">
                <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                  <CalendarDays className="h-4 w-4" />
                  <span>{formatDate(date)}</span>
                </div>
                <div className="space-y-2">
                  {contents.map((content) => (
                    <div
                      key={content.id}
                      className="flex items-start justify-between p-3 rounded-lg border bg-card hover:bg-accent/10 transition-colors"
                    >
                      <div className="space-y-1">
                        <div className="font-medium">{content.title}</div>
                        <div className="text-sm text-muted-foreground">
                          {content.website}
                        </div>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          <span>{content.time}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${content.status === "ready" ? "bg-green-100 text-green-800" : "bg-amber-100 text-amber-800"}`}
                        >
                          {content.status === "ready" ? "Ready" : "Pending"}
                        </span>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center h-[200px] text-center">
              <p className="text-muted-foreground">
                No upcoming scheduled content
              </p>
              <Button variant="outline" size="sm" className="mt-2">
                Schedule Content
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default UpcomingSchedule;
