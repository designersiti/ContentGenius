import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import {
  CalendarIcon,
  Clock,
  Globe,
  Repeat,
  Calendar as CalendarIcon2,
  CheckCircle2,
  AlertCircle,
  FileText,
  Search,
} from "lucide-react";

interface ScheduleContentDialogProps {
  trigger?: React.ReactNode;
}

const ScheduleContentDialog = ({ trigger }: ScheduleContentDialogProps) => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [time, setTime] = useState("12:00");
  const [website, setWebsite] = useState("website1");
  const [contentType, setContentType] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedContent, setSelectedContent] = useState<string[]>([]);
  const [repeatSchedule, setRepeatSchedule] = useState(false);
  const [repeatFrequency, setRepeatFrequency] = useState("weekly");

  const websites = [
    { id: "website1", name: "Company Blog" },
    { id: "website2", name: "Product Website" },
    { id: "website3", name: "Marketing Site" },
  ];

  const contentItems = [
    {
      id: "content1",
      title: "10 Tips for Better SEO Performance",
      type: "blog",
      status: "draft",
      date: "2023-06-15",
    },
    {
      id: "content2",
      title: "How to Improve Your Website Speed",
      type: "article",
      status: "ready",
      date: "2023-06-18",
    },
    {
      id: "content3",
      title: "The Future of AI in Content Creation",
      type: "blog",
      status: "draft",
      date: "2023-06-20",
    },
    {
      id: "content4",
      title: "Best Practices for Mobile-First Design",
      type: "article",
      status: "ready",
      date: "2023-06-22",
    },
    {
      id: "content5",
      title: "New Product Launch Announcement",
      type: "product",
      status: "ready",
      date: "2023-06-25",
    },
  ];

  const filteredContent = contentItems.filter(
    (item) =>
      (contentType === "all" || item.type === contentType) &&
      item.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const toggleContentSelection = (contentId: string) => {
    if (selectedContent.includes(contentId)) {
      setSelectedContent(selectedContent.filter((id) => id !== contentId));
    } else {
      setSelectedContent([...selectedContent, contentId]);
    }
  };

  const handleSubmit = () => {
    // In a real app, you would schedule the content here
    console.log("Content scheduled:", {
      date,
      time,
      website,
      selectedContent,
      repeatSchedule,
      repeatFrequency,
    });

    // Reset form and close dialog
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button className="gap-2">
            <CalendarIcon2 className="h-4 w-4" />
            Schedule Content
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Schedule Content</DialogTitle>
          <DialogDescription>
            Select content and set a publishing schedule for your website.
          </DialogDescription>
        </DialogHeader>

        <div className="py-4 space-y-6">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="website">Website</Label>
                <Select value={website} onValueChange={setWebsite}>
                  <SelectTrigger id="website">
                    <SelectValue placeholder="Select website" />
                  </SelectTrigger>
                  <SelectContent>
                    {websites.map((site) => (
                      <SelectItem key={site.id} value={site.id}>
                        {site.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="contentType">Content Type</Label>
                <Select value={contentType} onValueChange={setContentType}>
                  <SelectTrigger id="contentType">
                    <SelectValue placeholder="Select content type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="blog">Blog Posts</SelectItem>
                    <SelectItem value="article">Articles</SelectItem>
                    <SelectItem value="product">Product Content</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="search">Search Content</Label>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  id="search"
                  placeholder="Search by title or keyword"
                  className="pl-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <div className="border rounded-md">
              <div className="p-2 border-b bg-muted/50">
                <h3 className="text-sm font-medium">Available Content</h3>
              </div>
              <div className="max-h-[200px] overflow-y-auto">
                {filteredContent.length > 0 ? (
                  filteredContent.map((content) => (
                    <div
                      key={content.id}
                      className={`flex items-center justify-between p-3 border-b last:border-0 hover:bg-muted/50 cursor-pointer ${selectedContent.includes(content.id) ? "bg-primary/10" : ""}`}
                      onClick={() => toggleContentSelection(content.id)}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 rounded-full flex items-center justify-center ${selectedContent.includes(content.id) ? "bg-primary text-primary-foreground" : "border"}`}
                        >
                          {selectedContent.includes(content.id) && (
                            <CheckCircle2 className="h-4 w-4" />
                          )}
                        </div>
                        <div>
                          <h4 className="text-sm font-medium">
                            {content.title}
                          </h4>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge
                              variant="outline"
                              className="text-xs px-1 py-0"
                            >
                              {content.type}
                            </Badge>
                            <span className="text-xs text-muted-foreground">
                              Created: {content.date}
                            </span>
                          </div>
                        </div>
                      </div>
                      <Badge
                        variant={
                          content.status === "ready" ? "default" : "outline"
                        }
                        className={`${content.status === "ready" ? "bg-green-500" : "text-amber-500 border-amber-200 bg-amber-50"}`}
                      >
                        {content.status === "ready" ? (
                          <>
                            <CheckCircle2 className="h-3 w-3 mr-1" /> Ready
                          </>
                        ) : (
                          <>
                            <AlertCircle className="h-3 w-3 mr-1" /> Draft
                          </>
                        )}
                      </Badge>
                    </div>
                  ))
                ) : (
                  <div className="flex flex-col items-center justify-center py-8 text-center">
                    <FileText className="h-8 w-8 text-muted-foreground/50 mb-2" />
                    <p className="text-sm text-muted-foreground">
                      No content found matching your criteria
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="date">Publication Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="space-y-2">
                <Label htmlFor="time">Publication Time</Label>
                <Select value={time} onValueChange={setTime}>
                  <SelectTrigger id="time" className="w-full">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <SelectValue placeholder="Select time" />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    {[
                      "00:00",
                      "06:00",
                      "09:00",
                      "12:00",
                      "15:00",
                      "18:00",
                      "21:00",
                    ].map((t) => (
                      <SelectItem key={t} value={t}>
                        {t}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-4 pt-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Switch
                    id="repeatSchedule"
                    checked={repeatSchedule}
                    onCheckedChange={setRepeatSchedule}
                  />
                  <Label htmlFor="repeatSchedule">Repeat Schedule</Label>
                </div>
              </div>

              {repeatSchedule && (
                <div className="pl-6 space-y-2">
                  <Label htmlFor="repeatFrequency">Repeat Frequency</Label>
                  <Select
                    value={repeatFrequency}
                    onValueChange={setRepeatFrequency}
                  >
                    <SelectTrigger id="repeatFrequency" className="w-full">
                      <div className="flex items-center gap-2">
                        <Repeat className="h-4 w-4" />
                        <SelectValue placeholder="Select frequency" />
                      </div>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="daily">Daily</SelectItem>
                      <SelectItem value="weekly">Weekly</SelectItem>
                      <SelectItem value="biweekly">Bi-weekly</SelectItem>
                      <SelectItem value="monthly">Monthly</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}
            </div>
          </div>
        </div>

        <DialogFooter>
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center">
              <Globe className="h-4 w-4 text-muted-foreground mr-2" />
              <span className="text-sm text-muted-foreground">
                {selectedContent.length} item(s) selected
              </span>
            </div>
            <Button
              onClick={handleSubmit}
              disabled={selectedContent.length === 0 || !date}
              className="gap-2"
            >
              <CalendarIcon2 className="h-4 w-4" />
              Schedule Content
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ScheduleContentDialog;
