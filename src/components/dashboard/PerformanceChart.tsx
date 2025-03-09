import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart,
  LineChart,
  PieChart,
  Activity,
  TrendingUp,
  TrendingDown,
  Filter,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface PerformanceData {
  date: string;
  views: number;
  engagement: number;
  shares: number;
}

interface PerformanceChartProps {
  data?: PerformanceData[];
  title?: string;
  period?: "daily" | "weekly" | "monthly";
}

const defaultData: PerformanceData[] = [
  { date: "Mon", views: 1200, engagement: 800, shares: 320 },
  { date: "Tue", views: 1800, engagement: 1200, shares: 480 },
  { date: "Wed", views: 1400, engagement: 950, shares: 380 },
  { date: "Thu", views: 2200, engagement: 1500, shares: 600 },
  { date: "Fri", views: 1900, engagement: 1300, shares: 520 },
  { date: "Sat", views: 1300, engagement: 850, shares: 340 },
  { date: "Sun", views: 1100, engagement: 750, shares: 300 },
];

const PerformanceChart: React.FC<PerformanceChartProps> = ({
  data = defaultData,
  title = "Content Performance",
  period = "weekly",
}) => {
  const [chartType, setChartType] = useState<"bar" | "line" | "pie">("bar");
  const [metric, setMetric] = useState<"views" | "engagement" | "shares">(
    "views",
  );

  // Calculate total and average for the selected metric
  const total = data.reduce((sum, item) => sum + item[metric], 0);
  const average = Math.round(total / data.length);

  // Calculate trend (positive if last day is higher than first day)
  const trend = data[data.length - 1][metric] > data[0][metric] ? "up" : "down";
  const trendPercentage = Math.abs(
    Math.round(
      ((data[data.length - 1][metric] - data[0][metric]) / data[0][metric]) *
        100,
    ),
  );

  return (
    <Card className="w-full h-full bg-white overflow-hidden">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-medium">{title}</CardTitle>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setChartType("bar")}
            className={cn(
              "p-1 rounded-md",
              chartType === "bar"
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground",
            )}
          >
            <BarChart className="h-4 w-4" />
          </button>
          <button
            onClick={() => setChartType("line")}
            className={cn(
              "p-1 rounded-md",
              chartType === "line"
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground",
            )}
          >
            <LineChart className="h-4 w-4" />
          </button>
          <button
            onClick={() => setChartType("pie")}
            className={cn(
              "p-1 rounded-md",
              chartType === "pie"
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground",
            )}
          >
            <PieChart className="h-4 w-4" />
          </button>
          <div className="h-4 w-px bg-border mx-2" />
          <button className="p-1 rounded-md text-muted-foreground hover:text-foreground">
            <Filter className="h-4 w-4" />
          </button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col space-y-4">
          <div className="flex space-x-4">
            <button
              onClick={() => setMetric("views")}
              className={cn(
                "flex-1 rounded-lg border p-3 text-sm",
                metric === "views"
                  ? "bg-primary/10 border-primary/20"
                  : "bg-card",
              )}
            >
              <div className="font-medium">Views</div>
              <div className="text-2xl font-bold mt-1">
                {data
                  .reduce((sum, item) => sum + item.views, 0)
                  .toLocaleString()}
              </div>
            </button>
            <button
              onClick={() => setMetric("engagement")}
              className={cn(
                "flex-1 rounded-lg border p-3 text-sm",
                metric === "engagement"
                  ? "bg-primary/10 border-primary/20"
                  : "bg-card",
              )}
            >
              <div className="font-medium">Engagement</div>
              <div className="text-2xl font-bold mt-1">
                {data
                  .reduce((sum, item) => sum + item.engagement, 0)
                  .toLocaleString()}
              </div>
            </button>
            <button
              onClick={() => setMetric("shares")}
              className={cn(
                "flex-1 rounded-lg border p-3 text-sm",
                metric === "shares"
                  ? "bg-primary/10 border-primary/20"
                  : "bg-card",
              )}
            >
              <div className="font-medium">Shares</div>
              <div className="text-2xl font-bold mt-1">
                {data
                  .reduce((sum, item) => sum + item.shares, 0)
                  .toLocaleString()}
              </div>
            </button>
          </div>

          {/* Chart visualization */}
          <div className="h-[180px] w-full mt-4 relative">
            {/* This is a placeholder for the actual chart implementation */}
            <div className="absolute inset-0 flex items-center justify-center">
              {chartType === "bar" && (
                <div className="w-full h-full flex items-end justify-between px-2">
                  {data.map((item, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div
                        className="w-8 bg-primary rounded-t-sm"
                        style={{
                          height: `${(item[metric] / Math.max(...data.map((d) => d[metric]))) * 150}px`,
                        }}
                      />
                      <div className="text-xs mt-1 text-muted-foreground">
                        {item.date}
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {chartType === "line" && (
                <div className="w-full h-full flex items-center justify-center">
                  <Activity className="w-full h-full text-primary opacity-50" />
                  <div className="absolute bottom-0 w-full flex justify-between px-2">
                    {data.map((item, index) => (
                      <div
                        key={index}
                        className="text-xs text-muted-foreground"
                      >
                        {item.date}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {chartType === "pie" && (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="relative w-32 h-32 rounded-full bg-primary/20 overflow-hidden">
                    <div
                      className="absolute bottom-0 w-full bg-primary"
                      style={{ height: "70%" }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center text-sm font-medium">
                      {metric.charAt(0).toUpperCase() + metric.slice(1)}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Summary section */}
          <div className="flex items-center justify-between pt-2 border-t">
            <div className="text-sm">
              <span className="text-muted-foreground">Average {metric}:</span>
              <span className="font-medium ml-1">
                {average.toLocaleString()}
              </span>
            </div>
            <div className="flex items-center text-sm">
              <span className="text-muted-foreground mr-1">Trend:</span>
              {trend === "up" ? (
                <div className="flex items-center text-green-500">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  <span>{trendPercentage}%</span>
                </div>
              ) : (
                <div className="flex items-center text-red-500">
                  <TrendingDown className="h-4 w-4 mr-1" />
                  <span>{trendPercentage}%</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PerformanceChart;
