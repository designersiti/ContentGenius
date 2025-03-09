import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MoreHorizontal, Edit, Trash, ExternalLink } from "lucide-react";

interface Website {
  id: string;
  name: string;
  url: string;
  contentCount: number;
  scheduledCount: number;
  status: "active" | "inactive" | "pending";
}

interface WebsiteOverviewProps {
  websites?: Website[];
  onEdit?: (websiteId: string) => void;
  onDelete?: (websiteId: string) => void;
  onView?: (websiteId: string) => void;
}

const WebsiteOverview = ({
  websites = [
    {
      id: "1",
      name: "Tech Blog",
      url: "https://techblog.example.com",
      contentCount: 45,
      scheduledCount: 12,
      status: "active",
    },
    {
      id: "2",
      name: "Marketing Site",
      url: "https://marketing.example.com",
      contentCount: 32,
      scheduledCount: 8,
      status: "active",
    },
    {
      id: "3",
      name: "Product Documentation",
      url: "https://docs.example.com",
      contentCount: 67,
      scheduledCount: 0,
      status: "inactive",
    },
    {
      id: "4",
      name: "Company Blog",
      url: "https://blog.example.com",
      contentCount: 28,
      scheduledCount: 5,
      status: "active",
    },
  ],
  onEdit = () => {},
  onDelete = () => {},
  onView = () => {},
}: WebsiteOverviewProps) => {
  return (
    <Card className="w-full h-full bg-white overflow-hidden">
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle>Website Overview</CardTitle>
            <CardDescription>Manage your connected websites</CardDescription>
          </div>
          <Button size="sm" variant="outline">
            View All
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-auto max-h-[280px]">
          <table className="w-full">
            <thead className="bg-muted/50 sticky top-0">
              <tr className="text-left text-xs font-medium text-muted-foreground">
                <th className="px-6 py-3">Website</th>
                <th className="px-6 py-3">Content</th>
                <th className="px-6 py-3">Scheduled</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {websites.map((website) => (
                <tr key={website.id} className="hover:bg-muted/50">
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="font-medium">{website.name}</span>
                      <span className="text-xs text-muted-foreground">
                        {website.url}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-medium">{website.contentCount}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-medium">
                      {website.scheduledCount}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <Badge
                      variant={
                        website.status === "active"
                          ? "default"
                          : website.status === "inactive"
                            ? "secondary"
                            : "outline"
                      }
                    >
                      {website.status.charAt(0).toUpperCase() +
                        website.status.slice(1)}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <Button
                        size="icon"
                        variant="ghost"
                        onClick={() => onView(website.id)}
                        className="h-8 w-8"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                      <Button
                        size="icon"
                        variant="ghost"
                        onClick={() => onEdit(website.id)}
                        className="h-8 w-8"
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        size="icon"
                        variant="ghost"
                        onClick={() => onDelete(website.id)}
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
  );
};

export default WebsiteOverview;
