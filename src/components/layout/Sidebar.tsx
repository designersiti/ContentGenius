import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Globe,
  FileText,
  Calendar,
  Library,
  BarChart2,
  Settings,
  LogOut,
  HelpCircle,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  active?: boolean;
}

const NavItem = ({ icon, label, href, active = false }: NavItemProps) => {
  return (
    <Link to={href} className="w-full">
      <Button
        variant="ghost"
        className={cn(
          "w-full justify-start gap-3 px-3 py-6",
          active ? "bg-secondary" : "hover:bg-secondary/50",
        )}
      >
        <span className="text-muted-foreground">{icon}</span>
        <span className={cn(active ? "font-medium" : "")}>{label}</span>
      </Button>
    </Link>
  );
};

interface SidebarProps {
  activePath?: string;
}

const Sidebar = ({ activePath = "/" }: SidebarProps) => {
  return (
    <div className="h-full w-[280px] border-r bg-background flex flex-col">
      <div className="p-6">
        <h1 className="text-xl font-bold">Content Manager</h1>
      </div>

      <div className="flex-1 px-3 py-2">
        <nav className="flex flex-col gap-1">
          <NavItem
            icon={<LayoutDashboard size={20} />}
            label="Dashboard"
            href="/"
            active={activePath === "/"}
          />
          <NavItem
            icon={<Globe size={20} />}
            label="Website Management"
            href="/websites"
            active={activePath === "/websites"}
          />
          <NavItem
            icon={<FileText size={20} />}
            label="AI Content Generation"
            href="/content"
            active={activePath === "/content"}
          />
          <NavItem
            icon={<Calendar size={20} />}
            label="Scheduling System"
            href="/schedule"
            active={activePath === "/schedule"}
          />
          <NavItem
            icon={<Library size={20} />}
            label="Content Library"
            href="/library"
            active={activePath === "/library"}
          />
          <NavItem
            icon={<BarChart2 size={20} />}
            label="Analytics Dashboard"
            href="/analytics"
            active={activePath === "/analytics"}
          />
        </nav>
      </div>

      <div className="mt-auto px-3 py-4">
        <nav className="flex flex-col gap-1">
          <NavItem
            icon={<Settings size={20} />}
            label="Settings"
            href="/settings"
            active={activePath === "/settings"}
          />
          <NavItem
            icon={<HelpCircle size={20} />}
            label="Help & Support"
            href="/help"
            active={activePath === "/help"}
          />
        </nav>
      </div>

      <div className="border-t p-4">
        <div className="flex items-center gap-3">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Avatar className="h-10 w-10">
                  <AvatarImage
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=John"
                    alt="User"
                  />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </TooltipTrigger>
              <TooltipContent>
                <p>Your profile</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <div className="flex-1">
            <p className="text-sm font-medium">John Doe</p>
            <p className="text-xs text-muted-foreground">john@example.com</p>
          </div>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <LogOut size={18} />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Log out</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
