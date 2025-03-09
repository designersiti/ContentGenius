import React from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { PlusCircle, FileText, Calendar, BarChart3 } from "lucide-react";

interface QuickActionProps {
  actions?: {
    icon: React.ReactNode;
    label: string;
    onClick?: () => void;
  }[];
}

const QuickActions = ({
  actions = [
    {
      icon: <PlusCircle className="h-5 w-5 mr-2" />,
      label: "Add New Website",
      onClick: () => console.log("Add New Website clicked"),
    },
    {
      icon: <FileText className="h-5 w-5 mr-2" />,
      label: "Create Content",
      onClick: () => console.log("Create Content clicked"),
    },
    {
      icon: <Calendar className="h-5 w-5 mr-2" />,
      label: "Schedule Posts",
      onClick: () => console.log("Schedule Posts clicked"),
    },
    {
      icon: <BarChart3 className="h-5 w-5 mr-2" />,
      label: "View Analytics",
      onClick: () => console.log("View Analytics clicked"),
    },
  ],
}: QuickActionProps) => {
  return (
    <Card className="w-full bg-white">
      <CardHeader>
        <CardTitle className="text-lg">Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
          {actions.map((action, index) => (
            <Button
              key={index}
              variant="outline"
              className="h-auto py-3 px-4 flex items-center justify-center gap-2 min-w-[180px] sm:min-w-[200px] transition-all hover:bg-primary hover:text-white"
              onClick={action.onClick}
            >
              {action.icon}
              <span>{action.label}</span>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickActions;
