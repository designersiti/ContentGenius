import React, { useState } from "react";
import Sidebar from "../layout/Sidebar";
import Header from "../layout/Header";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  BarChart,
  LineChart,
  PieChart,
  ArrowUp,
  ArrowDown,
  Download,
  Calendar,
  RefreshCw,
} from "lucide-react";

const AnalyticsDashboard = () => {
  const [period, setPeriod] = useState("7d");
  const [website, setWebsite] = useState("");

  const websites = [
    { id: "1", name: "Tech Blog", url: "https://techblog.example.com" },
    { id: "2", name: "Marketing Site", url: "https://marketing.example.com" },
    { id: "3", name: "Product Documentation", url: "https://docs.example.com" },
    { id: "4", name: "Company Blog", url: "https://blog.example.com" },
  ];

  return (
    <div className="flex h-screen w-full bg-gray-50">
      <Sidebar activePath="/analytics" />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title="Analytics Dashboard" />

        <div className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold">Content Performance</h1>
                <p className="text-muted-foreground">
                  Track and analyze your content metrics
                </p>
              </div>
              <div className="flex space-x-2">
                <Select value={website} onValueChange={setWebsite}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="All Websites" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Websites</SelectItem>
                    {websites.map((site) => (
                      <SelectItem key={site.id} value={site.id}>
                        {site.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={period} onValueChange={setPeriod}>
                  <SelectTrigger className="w-[150px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="7d">Last 7 days</SelectItem>
                    <SelectItem value="30d">Last 30 days</SelectItem>
                    <SelectItem value="90d">Last 90 days</SelectItem>
                    <SelectItem value="12m">Last 12 months</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" size="icon">
                  <Calendar className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <RefreshCw className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <MetricCard
                title="Total Views"
                value="24,521"
                change={{ value: 12.5, isPositive: true }}
                period={period}
              />
              <MetricCard
                title="Engagement Rate"
                value="18.3%"
                change={{ value: 3.2, isPositive: true }}
                period={period}
              />
              <MetricCard
                title="Avg. Time on Page"
                value="3:24"
                change={{ value: 0.8, isPositive: false }}
                period={period}
              />
              <MetricCard
                title="Conversion Rate"
                value="2.8%"
                change={{ value: 0.5, isPositive: true }}
                period={period}
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>Traffic Overview</CardTitle>
                    <Tabs defaultValue="line">
                      <TabsList className="grid grid-cols-3 h-8 w-fit">
                        <TabsTrigger value="line" className="px-3">
                          <LineChart className="h-4 w-4" />
                        </TabsTrigger>
                        <TabsTrigger value="bar" className="px-3">
                          <BarChart className="h-4 w-4" />
                        </TabsTrigger>
                        <TabsTrigger value="pie" className="px-3">
                          <PieChart className="h-4 w-4" />
                        </TabsTrigger>
                      </TabsList>
                    </Tabs>
                  </div>
                  <CardDescription>
                    Daily traffic for the selected period
                  </CardDescription>
                </CardHeader>
                <CardContent className="h-[300px] flex items-center justify-center">
                  <div className="w-full h-full flex items-end justify-between px-2">
                    {Array.from({ length: 7 }).map((_, index) => (
                      <div key={index} className="flex flex-col items-center">
                        <div
                          className="w-12 bg-primary rounded-t-sm"
                          style={{
                            height: `${Math.floor(Math.random() * 150) + 50}px`,
                          }}
                        />
                        <div className="text-xs mt-1 text-muted-foreground">
                          {
                            ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][
                              index
                            ]
                          }
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>Traffic Sources</CardTitle>
                    <Select defaultValue="percentage">
                      <SelectTrigger className="w-[130px]">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="percentage">Percentage</SelectItem>
                        <SelectItem value="absolute">Absolute</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <CardDescription>
                    Where your visitors are coming from
                  </CardDescription>
                </CardHeader>
                <CardContent className="h-[300px] flex items-center justify-center">
                  <div className="w-full max-w-md">
                    <div className="space-y-4">
                      <SourceItem
                        label="Organic Search"
                        value={42}
                        color="bg-blue-500"
                      />
                      <SourceItem
                        label="Direct"
                        value={27}
                        color="bg-green-500"
                      />
                      <SourceItem
                        label="Social Media"
                        value={18}
                        color="bg-purple-500"
                      />
                      <SourceItem
                        label="Referral"
                        value={8}
                        color="bg-amber-500"
                      />
                      <SourceItem label="Email" value={5} color="bg-red-500" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Top Content</CardTitle>
                  <CardDescription>
                    Best performing content by views
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        title: "10 Tips for Better SEO Performance",
                        views: 3245,
                        change: 12,
                      },
                      {
                        title: "How to Improve Your Website Speed",
                        views: 2876,
                        change: 8,
                      },
                      {
                        title: "The Future of AI in Content Creation",
                        views: 2154,
                        change: -3,
                      },
                      {
                        title: "Best Practices for Mobile-First Design",
                        views: 1987,
                        change: 5,
                      },
                      {
                        title: "Understanding Web Accessibility Guidelines",
                        views: 1654,
                        change: 2,
                      },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-start space-x-2">
                          <div className="bg-primary/10 text-primary font-medium rounded-md w-6 h-6 flex items-center justify-center text-xs">
                            {index + 1}
                          </div>
                          <div className="text-sm font-medium line-clamp-1">
                            {item.title}
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="text-sm font-medium">
                            {item.views.toLocaleString()}
                          </div>
                          <div
                            className={`flex items-center text-xs ${item.change >= 0 ? "text-green-500" : "text-red-500"}`}
                          >
                            {item.change >= 0 ? (
                              <ArrowUp className="h-3 w-3 mr-1" />
                            ) : (
                              <ArrowDown className="h-3 w-3 mr-1" />
                            )}
                            {Math.abs(item.change)}%
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Audience Demographics</CardTitle>
                  <CardDescription>
                    User age and gender distribution
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-medium mb-2">Age Groups</h4>
                      <div className="space-y-2">
                        <AgeGroupBar label="18-24" percentage={15} />
                        <AgeGroupBar label="25-34" percentage={32} />
                        <AgeGroupBar label="35-44" percentage={28} />
                        <AgeGroupBar label="45-54" percentage={18} />
                        <AgeGroupBar label="55+" percentage={7} />
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium mb-2">Gender</h4>
                      <div className="flex items-center gap-4">
                        <div className="w-32 h-32 rounded-full border-8 border-primary relative flex items-center justify-center">
                          <div
                            className="absolute inset-0 rounded-full border-8 border-muted-foreground"
                            style={{
                              clipPath:
                                "polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 0, 0 42%, 100% 42%, 100% 0, 0 0)",
                            }}
                          ></div>
                          <div className="text-center">
                            <div className="text-xs text-muted-foreground">
                              Male
                            </div>
                            <div className="text-lg font-bold">58%</div>
                          </div>
                        </div>
                        <div className="flex-1 space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm">Male</span>
                            <span className="text-sm font-medium">58%</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div
                              className="bg-primary h-2 rounded-full"
                              style={{ width: "58%" }}
                            ></div>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm">Female</span>
                            <span className="text-sm font-medium">42%</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div
                              className="bg-muted-foreground h-2 rounded-full"
                              style={{ width: "42%" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Geographic Distribution</CardTitle>
                  <CardDescription>Top countries by traffic</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        country: "United States",
                        percentage: 42,
                        count: 10325,
                      },
                      {
                        country: "United Kingdom",
                        percentage: 18,
                        count: 4412,
                      },
                      { country: "Canada", percentage: 11, count: 2698 },
                      { country: "Australia", percentage: 8, count: 1962 },
                      { country: "Germany", percentage: 6, count: 1471 },
                      { country: "France", percentage: 5, count: 1226 },
                      { country: "Other", percentage: 10, count: 2452 },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center space-x-2">
                          <div className="w-6 h-6 bg-primary/10 rounded-md flex items-center justify-center text-xs font-medium">
                            {item.country.substring(0, 2)}
                          </div>
                          <span className="text-sm">{item.country}</span>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="w-16 bg-muted rounded-full h-2">
                            <div
                              className="bg-primary h-2 rounded-full"
                              style={{ width: `${item.percentage}%` }}
                            ></div>
                          </div>
                          <span className="text-sm font-medium w-10 text-right">
                            {item.percentage}%
                          </span>
                          <span className="text-xs text-muted-foreground w-16 text-right">
                            {item.count.toLocaleString()}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface MetricCardProps {
  title: string;
  value: string;
  change: {
    value: number;
    isPositive: boolean;
  };
  period: string;
}

const MetricCard = ({ title, value, change, period }: MetricCardProps) => {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col space-y-1.5">
          <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">{value}</div>
            <div
              className={`flex items-center text-sm ${change.isPositive ? "text-green-500" : "text-red-500"}`}
            >
              {change.isPositive ? (
                <ArrowUp className="h-4 w-4 mr-1" />
              ) : (
                <ArrowDown className="h-4 w-4 mr-1" />
              )}
              {change.value}%
            </div>
          </div>
          <p className="text-xs text-muted-foreground">
            vs. previous{" "}
            {period === "7d"
              ? "week"
              : period === "30d"
                ? "month"
                : period === "90d"
                  ? "quarter"
                  : "year"}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

interface SourceItemProps {
  label: string;
  value: number;
  color: string;
}

const SourceItem = ({ label, value, color }: SourceItemProps) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <div className={`w-3 h-3 rounded-full ${color}`}></div>
        <span className="text-sm">{label}</span>
      </div>
      <div className="flex items-center space-x-4">
        <div className="w-32 bg-muted rounded-full h-2">
          <div
            className={`${color} h-2 rounded-full`}
            style={{ width: `${value}%` }}
          ></div>
        </div>
        <span className="text-sm font-medium w-8 text-right">{value}%</span>
      </div>
    </div>
  );
};

interface AgeGroupBarProps {
  label: string;
  percentage: number;
}

const AgeGroupBar = ({ label, percentage }: AgeGroupBarProps) => {
  return (
    <div className="flex items-center space-x-2">
      <div className="w-12 text-xs">{label}</div>
      <div className="flex-1 bg-muted rounded-full h-2">
        <div
          className="bg-primary h-2 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <div className="w-8 text-xs text-right">{percentage}%</div>
    </div>
  );
};

export default AnalyticsDashboard;
