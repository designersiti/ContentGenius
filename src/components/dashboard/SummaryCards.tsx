import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowUp,
  ArrowDown,
  Globe,
  FileText,
  Calendar,
  BarChart,
} from "lucide-react";

interface SummaryCardProps {
  title: string;
  value: string | number;
  change?: {
    value: number;
    isPositive: boolean;
  };
  icon: React.ReactNode;
  bgColor?: string;
}

const SummaryCard = ({
  title = "Title",
  value = "0",
  change = { value: 0, isPositive: true },
  icon = <Globe className="h-5 w-5" />,
  bgColor = "bg-blue-50",
}: SummaryCardProps) => {
  return (
    <Card className="bg-white">
      <CardContent className="p-4 flex items-center space-x-4">
        <div className={`${bgColor} p-3 rounded-full`}>{icon}</div>
        <div className="flex-1">
          <h3 className="text-sm font-medium text-gray-500">{title}</h3>
          <div className="flex items-center space-x-2">
            <p className="text-2xl font-bold">{value}</p>
            {change && (
              <span
                className={`flex items-center text-xs ${change.isPositive ? "text-green-500" : "text-red-500"}`}
              >
                {change.isPositive ? (
                  <ArrowUp className="h-3 w-3 mr-1" />
                ) : (
                  <ArrowDown className="h-3 w-3 mr-1" />
                )}
                {change.value}%
              </span>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

interface SummaryCardsProps {
  websites?: number;
  contentPieces?: number;
  scheduledPosts?: number;
  performanceScore?: number;
}

const SummaryCards = ({
  websites = 12,
  contentPieces = 248,
  scheduledPosts = 36,
  performanceScore = 87,
}: SummaryCardsProps) => {
  const summaryData = [
    {
      title: "Total Websites",
      value: websites,
      change: { value: 8, isPositive: true },
      icon: <Globe className="h-5 w-5 text-blue-600" />,
      bgColor: "bg-blue-50",
    },
    {
      title: "Content Created",
      value: contentPieces,
      change: { value: 12, isPositive: true },
      icon: <FileText className="h-5 w-5 text-purple-600" />,
      bgColor: "bg-purple-50",
    },
    {
      title: "Scheduled Posts",
      value: scheduledPosts,
      change: { value: 5, isPositive: false },
      icon: <Calendar className="h-5 w-5 text-amber-600" />,
      bgColor: "bg-amber-50",
    },
    {
      title: "Performance Score",
      value: `${performanceScore}%`,
      change: { value: 3, isPositive: true },
      icon: <BarChart className="h-5 w-5 text-green-600" />,
      bgColor: "bg-green-50",
    },
  ];

  return (
    <div className="w-full bg-white p-4 rounded-lg shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {summaryData.map((card, index) => (
          <SummaryCard
            key={index}
            title={card.title}
            value={card.value}
            change={card.change}
            icon={card.icon}
            bgColor={card.bgColor}
          />
        ))}
      </div>
    </div>
  );
};

export default SummaryCards;
