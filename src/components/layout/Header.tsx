import React from "react";
import { Link } from "react-router-dom";
import { Search, Bell, Settings } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface HeaderProps {
  title?: string;
  username?: string;
  userAvatar?: string;
  notificationCount?: number;
}

const Header = ({
  title = "Dashboard",
  username = "John Doe",
  userAvatar = "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
  notificationCount = 3,
}: HeaderProps) => {
  return (
    <header className="sticky top-0 z-10 flex h-20 w-full items-center justify-between border-b border-gray-200 bg-white px-6 shadow-sm">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative w-64">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <Input placeholder="Search..." className="pl-10 pr-4" />
        </div>

        <div className="relative">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5 text-gray-600" />
                {notificationCount > 0 && (
                  <Badge
                    variant="destructive"
                    className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full p-0 text-xs"
                  >
                    {notificationCount}
                  </Badge>
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
              <DropdownMenuLabel>Notifications</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <div className="max-h-80 overflow-y-auto">
                {Array.from({ length: notificationCount || 3 }).map((_, i) => (
                  <DropdownMenuItem
                    key={i}
                    className="flex flex-col items-start py-2"
                  >
                    <div className="font-medium">New content published</div>
                    <div className="text-xs text-gray-500">
                      Website {i + 1} has new content ready
                    </div>
                    <div className="mt-1 text-xs text-gray-400">
                      {i + 1} hour ago
                    </div>
                  </DropdownMenuItem>
                ))}
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className="justify-center text-sm font-medium text-primary"
                asChild
              >
                <Link to="/notifications">View all notifications</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5 text-gray-600" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Settings</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link to="/settings/account">Account</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/settings/preferences">Preferences</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/settings/api-keys">API Keys</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-destructive">
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="flex items-center space-x-2 pl-2 pr-3"
            >
              <Avatar className="h-8 w-8">
                <AvatarImage src={userAvatar} alt={username} />
                <AvatarFallback>
                  {username
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <span className="text-sm font-medium">{username}</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link to="/profile">Profile</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/billing">Billing</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/subscription">Subscription</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-destructive" asChild>
              <Link to="/logout">Logout</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;
