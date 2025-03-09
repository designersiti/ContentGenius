import React, { useState } from "react";
import Sidebar from "../layout/Sidebar";
import Header from "../layout/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import {
  Globe,
  Plus,
  Search,
  Edit,
  Trash,
  ExternalLink,
  MoreHorizontal,
} from "lucide-react";

interface Website {
  id: string;
  name: string;
  url: string;
  category: string;
  status: "active" | "inactive" | "pending";
  contentCount: number;
  lastUpdated: string;
}

const WebsiteManagement = () => {
  const [websites, setWebsites] = useState<Website[]>([
    {
      id: "1",
      name: "Tech Blog",
      url: "https://techblog.example.com",
      category: "Technology",
      status: "active",
      contentCount: 45,
      lastUpdated: "2023-06-15",
    },
    {
      id: "2",
      name: "Marketing Site",
      url: "https://marketing.example.com",
      category: "Marketing",
      status: "active",
      contentCount: 32,
      lastUpdated: "2023-06-14",
    },
    {
      id: "3",
      name: "Product Documentation",
      url: "https://docs.example.com",
      category: "Documentation",
      status: "inactive",
      contentCount: 67,
      lastUpdated: "2023-06-10",
    },
    {
      id: "4",
      name: "Company Blog",
      url: "https://blog.example.com",
      category: "Corporate",
      status: "active",
      contentCount: 28,
      lastUpdated: "2023-06-12",
    },
    {
      id: "5",
      name: "E-commerce Store",
      url: "https://store.example.com",
      category: "E-commerce",
      status: "pending",
      contentCount: 15,
      lastUpdated: "2023-06-08",
    },
  ]);

  const [showAddWebsite, setShowAddWebsite] = useState(false);
  const [filter, setFilter] = useState("all");

  const filteredWebsites = websites.filter((website) => {
    if (filter === "all") return true;
    if (filter === "active") return website.status === "active";
    if (filter === "inactive") return website.status === "inactive";
    if (filter === "pending") return website.status === "pending";
    return true;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-500">Active</Badge>;
      case "inactive":
        return <Badge className="bg-gray-500">Inactive</Badge>;
      case "pending":
        return <Badge className="bg-amber-500">Pending</Badge>;
      default:
        return <Badge>Unknown</Badge>;
    }
  };

  return (
    <div className="flex h-screen w-full bg-gray-50">
      <Sidebar activePath="/websites" />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title="Website Management" />

        <div className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold">Websites</h1>
                <p className="text-muted-foreground">
                  Manage your connected websites
                </p>
              </div>
              <Dialog open={showAddWebsite} onOpenChange={setShowAddWebsite}>
                <DialogTrigger asChild>
                  <Button className="gap-2">
                    <Plus className="h-4 w-4" />
                    Add Website
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px]">
                  <DialogHeader>
                    <DialogTitle>Add New Website</DialogTitle>
                    <DialogDescription>
                      Enter the details of the website you want to connect to
                      the platform.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-right">
                        Name
                      </Label>
                      <Input
                        id="name"
                        placeholder="My Website"
                        className="col-span-3"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="url" className="text-right">
                        URL
                      </Label>
                      <Input
                        id="url"
                        placeholder="https://example.com"
                        className="col-span-3"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="category" className="text-right">
                        Category
                      </Label>
                      <Select>
                        <SelectTrigger className="col-span-3">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="technology">Technology</SelectItem>
                          <SelectItem value="marketing">Marketing</SelectItem>
                          <SelectItem value="corporate">Corporate</SelectItem>
                          <SelectItem value="ecommerce">E-commerce</SelectItem>
                          <SelectItem value="documentation">
                            Documentation
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="status" className="text-right">
                        Status
                      </Label>
                      <div className="flex items-center space-x-2 col-span-3">
                        <Switch id="status" />
                        <Label htmlFor="status">Active</Label>
                      </div>
                    </div>
                  </div>
                  <DialogFooter>
                    <Button
                      variant="outline"
                      onClick={() => setShowAddWebsite(false)}
                    >
                      Cancel
                    </Button>
                    <Button onClick={() => setShowAddWebsite(false)}>
                      Add Website
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>

            <div className="flex justify-between items-center space-x-4">
              <div className="relative w-full max-w-sm">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <Input
                  placeholder="Search websites..."
                  className="pl-10 pr-4"
                />
              </div>
              <div className="flex space-x-2">
                <Button
                  variant={filter === "all" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilter("all")}
                >
                  All
                </Button>
                <Button
                  variant={filter === "active" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilter("active")}
                >
                  Active
                </Button>
                <Button
                  variant={filter === "inactive" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilter("inactive")}
                >
                  Inactive
                </Button>
                <Button
                  variant={filter === "pending" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilter("pending")}
                >
                  Pending
                </Button>
              </div>
            </div>

            <Card className="w-full bg-white overflow-hidden">
              <CardContent className="p-0">
                <div className="overflow-auto">
                  <table className="w-full">
                    <thead className="bg-muted/50 sticky top-0">
                      <tr className="text-left text-xs font-medium text-muted-foreground">
                        <th className="px-6 py-3">Website</th>
                        <th className="px-6 py-3">Category</th>
                        <th className="px-6 py-3">Content</th>
                        <th className="px-6 py-3">Last Updated</th>
                        <th className="px-6 py-3">Status</th>
                        <th className="px-6 py-3 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {filteredWebsites.map((website) => (
                        <tr key={website.id} className="hover:bg-muted/50">
                          <td className="px-6 py-4">
                            <div className="flex flex-col">
                              <span className="font-medium">
                                {website.name}
                              </span>
                              <span className="text-xs text-muted-foreground">
                                {website.url}
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <span className="text-sm">{website.category}</span>
                          </td>
                          <td className="px-6 py-4">
                            <span className="font-medium">
                              {website.contentCount}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <span className="text-sm">
                              {website.lastUpdated}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            {getStatusBadge(website.status)}
                          </td>
                          <td className="px-6 py-4 text-right">
                            <div className="flex justify-end gap-2">
                              <Button
                                size="icon"
                                variant="ghost"
                                className="h-8 w-8"
                              >
                                <ExternalLink className="h-4 w-4" />
                              </Button>
                              <Button
                                size="icon"
                                variant="ghost"
                                className="h-8 w-8"
                              >
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button
                                size="icon"
                                variant="ghost"
                                className="h-8 w-8"
                              >
                                <Trash className="h-4 w-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteManagement;
