import React, { useState } from "react";
import Sidebar from "../layout/Sidebar";
import Header from "../layout/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import {
  CalendarDays,
  Clock,
  Plus,
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
  FileText,
  Edit,
  Trash,
  Check,
  X,
} from "lucide-react";

interface ScheduledItem {
  id: string;
  title: string;
  website: string;
  date: Date;
  dateStr?: string;
  time: string;
  status: "pending" | "ready" | "published";
  contentType: string;
}

const SchedulingSystem = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedWebsite, setSelectedWebsite] = useState("all");
  const [view, setView] = useState("calendar");

  const websites = [
    { id: "1", name: "Tech Blog", url: "https://techblog.example.com" },
    { id: "2", name: "Marketing Site", url: "https://marketing.example.com" },
    { id: "3", name: "Product Documentation", url: "https://docs.example.com" },
    { id: "4", name: "Company Blog", url: "https://blog.example.com" },
  ];

  // Mock JSON data for scheduled content
  const mockScheduledData = [
    {
      id: "1",
      title: "10 Ways to Improve Your Website SEO",
      website: "Tech Blog",
      dateStr: "2023-07-15",
      time: "09:00 AM",
      status: "ready",
      contentType: "Blog Post",
    },
    {
      id: "2",
      title: "The Future of AI in Content Creation",
      website: "Marketing Site",
      dateStr: "2023-07-15",
      time: "02:30 PM",
      status: "pending",
      contentType: "Article",
    },
    {
      id: "3",
      title: "How to Build a Loyal Audience",
      website: "Company Blog",
      dateStr: "2023-07-16",
      time: "11:15 AM",
      status: "ready",
      contentType: "Blog Post",
    },
    {
      id: "4",
      title: "Latest Trends in Web Development",
      website: "Tech Blog",
      dateStr: "2023-07-17",
      time: "10:00 AM",
      status: "pending",
      contentType: "Article",
    },
    {
      id: "5",
      title: "Understanding Web Accessibility Guidelines",
      website: "Product Documentation",
      dateStr: "2023-07-18",
      time: "01:00 PM",
      status: "ready",
      contentType: "Guide",
    },
    {
      id: "6",
      title: "Content Marketing Strategies for 2023",
      website: "Marketing Site",
      dateStr: "2023-07-19",
      time: "11:30 AM",
      status: "pending",
      contentType: "Article",
    },
    {
      id: "7",
      title: "Mobile App Development Best Practices",
      website: "Tech Blog",
      dateStr: "2023-07-15",
      time: "04:00 PM",
      status: "published",
      contentType: "Tutorial",
    },
    {
      id: "8",
      title: "Email Marketing Automation Guide",
      website: "Marketing Site",
      dateStr: "2023-07-16",
      time: "09:30 AM",
      status: "ready",
      contentType: "Guide",
    },
    {
      id: "9",
      title: "Social Media Strategy for B2B Companies",
      website: "Company Blog",
      dateStr: "2023-07-17",
      time: "03:15 PM",
      status: "pending",
      contentType: "Article",
    },
    {
      id: "10",
      title: "Product Launch Announcement Template",
      website: "Marketing Site",
      dateStr: "2023-07-18",
      time: "10:45 AM",
      status: "ready",
      contentType: "Template",
    },
  ];

  // Convert string dates to Date objects
  const scheduledItems: ScheduledItem[] = mockScheduledData.map((item) => ({
    ...item,
    date: new Date(item.dateStr),
  }));

  const getItemsForDate = (date: Date | undefined) => {
    if (!date) return [];
    return scheduledItems.filter(
      (item) =>
        item.date.getDate() === date.getDate() &&
        item.date.getMonth() === date.getMonth() &&
        item.date.getFullYear() === date.getFullYear(),
    );
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "ready":
        return <Badge className="bg-green-500">Ready</Badge>;
      case "pending":
        return <Badge className="bg-amber-500">Pending</Badge>;
      case "published":
        return <Badge className="bg-blue-500">Published</Badge>;
      default:
        return <Badge>Unknown</Badge>;
    }
  };

  return (
    <div className="flex h-screen w-full bg-gray-50">
      <Sidebar activePath="/schedule" />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title="Scheduling System" />

        <div className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold">Content Schedule</h1>
                <p className="text-muted-foreground">
                  Plan and schedule your content publishing
                </p>
              </div>
              <Button className="gap-2">
                <Plus className="h-4 w-4" />
                Schedule Content
              </Button>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3 space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Filters</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label>Website</Label>
                      <Select
                        value={selectedWebsite}
                        onValueChange={setSelectedWebsite}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="All Websites" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Websites</SelectItem>
                          {websites.map((website) => (
                            <SelectItem key={website.id} value={website.id}>
                              {website.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Date Range</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-start text-left font-normal"
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP") : "Pick a date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Upcoming Schedule</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {scheduledItems.slice(0, 3).map((item) => (
                        <div
                          key={item.id}
                          className="flex items-start space-x-3 p-3 border rounded-md hover:bg-muted/50 transition-colors"
                        >
                          <div className="bg-primary/10 p-2 rounded-md">
                            <CalendarDays className="h-5 w-5 text-primary" />
                          </div>
                          <div className="space-y-1">
                            <div className="font-medium line-clamp-1">
                              {item.title}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {item.website}
                            </div>
                            <div className="flex items-center text-xs text-muted-foreground">
                              <Clock className="h-3 w-3 mr-1" />
                              {format(item.date, "MMM d")} at {item.time}
                            </div>
                          </div>
                        </div>
                      ))}
                      <Button variant="link" className="w-full text-sm">
                        View All Scheduled Content
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Publishing Stats</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Total Scheduled</span>
                        <span className="font-medium">
                          {scheduledItems.length}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Ready to Publish</span>
                        <span className="font-medium">
                          {
                            scheduledItems.filter(
                              (item) => item.status === "ready",
                            ).length
                          }
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Pending Review</span>
                        <span className="font-medium">
                          {
                            scheduledItems.filter(
                              (item) => item.status === "pending",
                            ).length
                          }
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Published Today</span>
                        <span className="font-medium">
                          {
                            scheduledItems.filter(
                              (item) =>
                                item.status === "published" &&
                                item.date.getDate() === new Date().getDate() &&
                                item.date.getMonth() ===
                                  new Date().getMonth() &&
                                item.date.getFullYear() ===
                                  new Date().getFullYear(),
                            ).length
                          }
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="md:w-2/3">
                <Card className="h-full">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center">
                      <CardTitle>Schedule</CardTitle>
                      <Tabs
                        value={view}
                        onValueChange={setView}
                        className="w-auto"
                      >
                        <TabsList className="grid w-[200px] grid-cols-2">
                          <TabsTrigger value="calendar">Calendar</TabsTrigger>
                          <TabsTrigger value="list">List</TabsTrigger>
                        </TabsList>
                      </Tabs>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Tabs value={view} onValueChange={setView}>
                      <TabsContent value="calendar" className="mt-0">
                        <div className="space-y-4">
                          <div className="flex justify-between items-center">
                            <h3 className="font-medium">
                              {format(date || new Date(), "MMMM yyyy")}
                            </h3>
                            <div className="flex space-x-2">
                              <Button variant="outline" size="icon">
                                <ChevronLeft className="h-4 w-4" />
                              </Button>
                              <Button variant="outline" size="icon">
                                <ChevronRight className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>

                          <div className="grid grid-cols-7 gap-1">
                            {[
                              "Sun",
                              "Mon",
                              "Tue",
                              "Wed",
                              "Thu",
                              "Fri",
                              "Sat",
                            ].map((day) => (
                              <div
                                key={day}
                                className="text-center text-sm font-medium py-2"
                              >
                                {day}
                              </div>
                            ))}
                            {Array.from({ length: 35 }).map((_, i) => {
                              const dayNum = (i % 31) + 1;
                              const currentDate = new Date(date || new Date());
                              currentDate.setDate(dayNum);

                              // Find items for this day
                              const dayItems = scheduledItems.filter(
                                (item) =>
                                  item.date.getDate() === dayNum &&
                                  item.date.getMonth() ===
                                    currentDate.getMonth() &&
                                  item.date.getFullYear() ===
                                    currentDate.getFullYear(),
                              );

                              return (
                                <div
                                  key={i}
                                  className={`border rounded-md h-24 p-1 overflow-auto ${dayNum === (date?.getDate() || 1) ? "bg-primary/5 border-primary/20" : ""}`}
                                  onClick={() => {
                                    const newDate = new Date(
                                      date || new Date(),
                                    );
                                    newDate.setDate(dayNum);
                                    setDate(newDate);
                                  }}
                                >
                                  <div className="text-xs font-medium p-1">
                                    {dayNum}
                                  </div>
                                  {dayItems.map((item, idx) => {
                                    let bgColor = "bg-blue-100 text-blue-800";
                                    if (item.contentType === "Article")
                                      bgColor = "bg-purple-100 text-purple-800";
                                    if (item.contentType === "Guide")
                                      bgColor = "bg-green-100 text-green-800";
                                    if (item.contentType === "Template")
                                      bgColor = "bg-amber-100 text-amber-800";
                                    if (item.contentType === "Tutorial")
                                      bgColor = "bg-pink-100 text-pink-800";

                                    return (
                                      <div
                                        key={idx}
                                        className={`${bgColor} text-xs p-1 rounded mb-1 truncate`}
                                      >
                                        {item.contentType}
                                      </div>
                                    );
                                  })}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </TabsContent>

                      <TabsContent value="list" className="mt-0">
                        <div className="space-y-4">
                          <div className="flex justify-between items-center">
                            <h3 className="font-medium">
                              Scheduled Content for{" "}
                              {format(date || new Date(), "MMMM d, yyyy")}
                            </h3>
                            <div className="flex space-x-2">
                              <Select defaultValue="all">
                                <SelectTrigger className="w-[180px]">
                                  <SelectValue placeholder="Filter by Status" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="all">
                                    All Statuses
                                  </SelectItem>
                                  <SelectItem value="ready">Ready</SelectItem>
                                  <SelectItem value="pending">
                                    Pending
                                  </SelectItem>
                                  <SelectItem value="published">
                                    Published
                                  </SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>

                          <div className="space-y-2">
                            {getItemsForDate(date).length > 0 ? (
                              getItemsForDate(date)
                                .sort((a, b) => {
                                  // Convert time strings to comparable values (e.g., "09:00 AM" to minutes since midnight)
                                  const getMinutes = (timeStr) => {
                                    const [time, period] = timeStr.split(" ");
                                    let [hours, minutes] = time
                                      .split(":")
                                      .map(Number);
                                    if (period === "PM" && hours !== 12)
                                      hours += 12;
                                    if (period === "AM" && hours === 12)
                                      hours = 0;
                                    return hours * 60 + minutes;
                                  };
                                  return (
                                    getMinutes(a.time) - getMinutes(b.time)
                                  );
                                })
                                .map((item) => (
                                  <div
                                    key={item.id}
                                    className="flex items-center justify-between p-3 border rounded-md hover:bg-muted/50 transition-colors"
                                  >
                                    <div className="flex items-start space-x-3">
                                      <div className="bg-primary/10 p-2 rounded-md">
                                        <FileText className="h-5 w-5 text-primary" />
                                      </div>
                                      <div>
                                        <div className="font-medium">
                                          {item.title}
                                        </div>
                                        <div className="text-sm text-muted-foreground">
                                          {item.website}
                                        </div>
                                        <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                                          <div className="flex items-center">
                                            <Clock className="h-3 w-3 mr-1" />
                                            {item.time}
                                          </div>
                                          <span>·</span>
                                          <div className="flex items-center">
                                            <FileText className="h-3 w-3 mr-1" />
                                            {item.contentType}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                      {getStatusBadge(item.status)}
                                      <div className="flex space-x-1">
                                        <Button
                                          variant="ghost"
                                          size="icon"
                                          className="h-8 w-8"
                                        >
                                          <Edit className="h-4 w-4" />
                                        </Button>
                                        {item.status === "pending" ? (
                                          <Button
                                            variant="ghost"
                                            size="icon"
                                            className="h-8 w-8 text-green-500"
                                          >
                                            <Check className="h-4 w-4" />
                                          </Button>
                                        ) : (
                                          <Button
                                            variant="ghost"
                                            size="icon"
                                            className="h-8 w-8 text-amber-500"
                                          >
                                            <X className="h-4 w-4" />
                                          </Button>
                                        )}
                                        <Button
                                          variant="ghost"
                                          size="icon"
                                          className="h-8 w-8 text-destructive"
                                        >
                                          <Trash className="h-4 w-4" />
                                        </Button>
                                      </div>
                                    </div>
                                  </div>
                                ))
                            ) : (
                              <div className="text-center py-8 text-muted-foreground">
                                No content scheduled for{" "}
                                {format(date || new Date(), "MMMM d, yyyy")}
                              </div>
                            )}
                          </div>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchedulingSystem;
