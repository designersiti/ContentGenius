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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Search,
  Filter,
  FileText,
  Edit,
  Trash,
  Clock,
  Calendar,
  MoreHorizontal,
  Eye,
  Send,
  Download,
} from "lucide-react";

interface ContentItem {
  id: string;
  title: string;
  excerpt: string;
  website: string;
  status: "draft" | "published" | "scheduled";
  type: string;
  createdAt: string;
  updatedAt: string;
  author: string;
}

const ContentLibrary = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState<string>("");
  const [selectedType, setSelectedType] = useState<string>("");
  const [selectedWebsite, setSelectedWebsite] = useState<string>("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const contentItems: ContentItem[] = [
    {
      id: "1",
      title: "10 Tips for Better SEO Performance",
      excerpt:
        "Learn how to improve your website's search engine ranking with these proven tips.",
      website: "Tech Blog",
      status: "published",
      type: "Blog Post",
      createdAt: "2023-06-10",
      updatedAt: "2023-06-15",
      author: "John Doe",
    },
    {
      id: "2",
      title: "How to Improve Your Website Speed",
      excerpt:
        "Discover techniques to make your website load faster and improve user experience.",
      website: "Marketing Site",
      status: "published",
      type: "Article",
      createdAt: "2023-06-08",
      updatedAt: "2023-06-14",
      author: "Jane Smith",
    },
    {
      id: "3",
      title: "The Future of AI in Content Creation",
      excerpt:
        "Explore how artificial intelligence is transforming the way we create and distribute content.",
      website: "Tech Blog",
      status: "scheduled",
      type: "Blog Post",
      createdAt: "2023-06-12",
      updatedAt: "2023-06-16",
      author: "John Doe",
    },
    {
      id: "4",
      title: "Best Practices for Mobile-First Design",
      excerpt:
        "Learn why mobile-first design is essential and how to implement it effectively.",
      website: "Design Hub",
      status: "draft",
      type: "Tutorial",
      createdAt: "2023-06-14",
      updatedAt: "2023-06-15",
      author: "Alex Johnson",
    },
    {
      id: "5",
      title: "Understanding Web Accessibility Guidelines",
      excerpt:
        "A comprehensive guide to making your website accessible to all users.",
      website: "Marketing Site",
      status: "published",
      type: "Guide",
      createdAt: "2023-06-05",
      updatedAt: "2023-06-13",
      author: "Sarah Williams",
    },
    {
      id: "6",
      title: "Content Marketing Strategies for 2023",
      excerpt:
        "Stay ahead of the competition with these effective content marketing strategies.",
      website: "Marketing Site",
      status: "draft",
      type: "Article",
      createdAt: "2023-06-15",
      updatedAt: "2023-06-15",
      author: "Jane Smith",
    },
  ];

  const filteredItems = contentItems.filter((item) => {
    const matchesSearch =
      searchQuery === "" ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus =
      selectedStatus === "" || item.status === selectedStatus;
    const matchesType = selectedType === "" || item.type === selectedType;
    const matchesWebsite =
      selectedWebsite === "" || item.website === selectedWebsite;

    return matchesSearch && matchesStatus && matchesType && matchesWebsite;
  });

  const toggleItemSelection = (id: string) => {
    setSelectedItems((prev) =>
      prev.includes(id)
        ? prev.filter((itemId) => itemId !== id)
        : [...prev, id],
    );
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "published":
        return <Badge className="bg-green-500">Published</Badge>;
      case "scheduled":
        return <Badge className="bg-amber-500">Scheduled</Badge>;
      case "draft":
        return <Badge className="bg-gray-500">Draft</Badge>;
      default:
        return <Badge>Unknown</Badge>;
    }
  };

  return (
    <div className="flex h-screen w-full bg-gray-50">
      <Sidebar activePath="/library" />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title="Content Library" />

        <div className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold">Content Library</h1>
                <p className="text-muted-foreground">
                  Browse and manage your content
                </p>
              </div>
              <Button className="gap-2">
                <FileText className="h-4 w-4" />
                Create New Content
              </Button>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/4 space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Filters</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label>Status</Label>
                      <Select
                        value={selectedStatus}
                        onValueChange={setSelectedStatus}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="All Statuses" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all-statuses">
                            All Statuses
                          </SelectItem>
                          <SelectItem value="published">Published</SelectItem>
                          <SelectItem value="scheduled">Scheduled</SelectItem>
                          <SelectItem value="draft">Draft</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Content Type</Label>
                      <Select
                        value={selectedType}
                        onValueChange={setSelectedType}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="All Types" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all-types">All Types</SelectItem>
                          <SelectItem value="Blog Post">Blog Post</SelectItem>
                          <SelectItem value="Article">Article</SelectItem>
                          <SelectItem value="Guide">Guide</SelectItem>
                          <SelectItem value="Tutorial">Tutorial</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

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
                          <SelectItem value="all-websites">
                            All Websites
                          </SelectItem>
                          <SelectItem value="Tech Blog">Tech Blog</SelectItem>
                          <SelectItem value="Marketing Site">
                            Marketing Site
                          </SelectItem>
                          <SelectItem value="Design Hub">Design Hub</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => {
                        setSelectedStatus("");
                        setSelectedType("");
                        setSelectedWebsite("");
                      }}
                    >
                      Clear Filters
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Content Stats</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Total Content</span>
                        <span className="font-medium">
                          {contentItems.length}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Published</span>
                        <span className="font-medium">
                          {
                            contentItems.filter(
                              (item) => item.status === "published",
                            ).length
                          }
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Scheduled</span>
                        <span className="font-medium">
                          {
                            contentItems.filter(
                              (item) => item.status === "scheduled",
                            ).length
                          }
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Drafts</span>
                        <span className="font-medium">
                          {
                            contentItems.filter(
                              (item) => item.status === "draft",
                            ).length
                          }
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="md:w-3/4">
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                      <div className="relative w-full sm:w-64">
                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                        <Input
                          placeholder="Search content..."
                          className="pl-10 pr-4"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                        />
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button
                          variant={viewMode === "grid" ? "default" : "outline"}
                          size="sm"
                          onClick={() => setViewMode("grid")}
                        >
                          Grid
                        </Button>
                        <Button
                          variant={viewMode === "list" ? "default" : "outline"}
                          size="sm"
                          onClick={() => setViewMode("list")}
                        >
                          List
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {filteredItems.length > 0 ? (
                      viewMode === "grid" ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {filteredItems.map((item) => (
                            <Card key={item.id} className="overflow-hidden">
                              <CardHeader className="p-4 pb-2">
                                <div className="flex justify-between items-start">
                                  <div className="space-y-1">
                                    <CardTitle className="text-base">
                                      {item.title}
                                    </CardTitle>
                                    <CardDescription className="line-clamp-2">
                                      {item.excerpt}
                                    </CardDescription>
                                  </div>
                                  <Checkbox
                                    checked={selectedItems.includes(item.id)}
                                    onCheckedChange={() =>
                                      toggleItemSelection(item.id)
                                    }
                                  />
                                </div>
                              </CardHeader>
                              <CardContent className="p-4 pt-0">
                                <div className="flex flex-wrap gap-2 mt-2">
                                  {getStatusBadge(item.status)}
                                  <Badge variant="outline">{item.type}</Badge>
                                  <Badge variant="secondary">
                                    {item.website}
                                  </Badge>
                                </div>
                                <div className="flex justify-between items-center mt-4 text-xs text-muted-foreground">
                                  <div className="flex items-center">
                                    <Clock className="h-3 w-3 mr-1" />
                                    {item.updatedAt}
                                  </div>
                                  <span>{item.author}</span>
                                </div>
                              </CardContent>
                              <CardFooter className="p-2 bg-muted/20 flex justify-between">
                                <Button variant="ghost" size="sm">
                                  <Eye className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="sm">
                                  <Edit className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="sm">
                                  <Calendar className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="sm">
                                  <Send className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="sm">
                                  <MoreHorizontal className="h-4 w-4" />
                                </Button>
                              </CardFooter>
                            </Card>
                          ))}
                        </div>
                      ) : (
                        <div className="space-y-2">
                          {filteredItems.map((item) => (
                            <div
                              key={item.id}
                              className="flex items-center justify-between p-3 border rounded-md"
                            >
                              <div className="flex items-center space-x-3">
                                <Checkbox
                                  checked={selectedItems.includes(item.id)}
                                  onCheckedChange={() =>
                                    toggleItemSelection(item.id)
                                  }
                                />
                                <div>
                                  <div className="font-medium">
                                    {item.title}
                                  </div>
                                  <div className="text-sm text-muted-foreground line-clamp-1">
                                    {item.excerpt}
                                  </div>
                                  <div className="flex items-center gap-2 mt-1">
                                    {getStatusBadge(item.status)}
                                    <span className="text-xs text-muted-foreground">
                                      {item.website}
                                    </span>
                                    <span className="text-xs text-muted-foreground">
                                      ·
                                    </span>
                                    <span className="text-xs text-muted-foreground">
                                      {item.type}
                                    </span>
                                    <span className="text-xs text-muted-foreground">
                                      ·
                                    </span>
                                    <span className="text-xs text-muted-foreground">
                                      {item.updatedAt}
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-8 w-8"
                                >
                                  <Eye className="h-4 w-4" />
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-8 w-8"
                                >
                                  <Edit className="h-4 w-4" />
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-8 w-8"
                                >
                                  <Calendar className="h-4 w-4" />
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-8 w-8"
                                >
                                  <Send className="h-4 w-4" />
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-8 w-8"
                                >
                                  <MoreHorizontal className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      )
                    ) : (
                      <div className="text-center py-12">
                        <FileText className="h-12 w-12 mx-auto text-muted-foreground/50" />
                        <h3 className="mt-4 text-lg font-medium">
                          No content found
                        </h3>
                        <p className="text-muted-foreground mt-2">
                          Try adjusting your search or filters
                        </p>
                        <Button variant="outline" className="mt-4">
                          Clear Filters
                        </Button>
                      </div>
                    )}
                  </CardContent>
                  {filteredItems.length > 0 && (
                    <CardFooter className="flex justify-between border-t p-4">
                      <div className="text-sm text-muted-foreground">
                        Showing {filteredItems.length} of {contentItems.length}{" "}
                        items
                      </div>
                      <div className="flex space-x-2">
                        {selectedItems.length > 0 && (
                          <>
                            <Button
                              variant="outline"
                              size="sm"
                              className="gap-1"
                            >
                              <Download className="h-4 w-4" />
                              Export
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              className="gap-1"
                            >
                              <Trash className="h-4 w-4" />
                              Delete
                            </Button>
                          </>
                        )}
                      </div>
                    </CardFooter>
                  )}
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentLibrary;
