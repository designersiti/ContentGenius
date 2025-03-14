import React from "react";
import Sidebar from "../layout/Sidebar";
import Header from "../layout/Header";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import {
  Monitor,
  Moon,
  Sun,
  Languages,
  Clock,
  Calendar,
  Save,
  Palette,
  Layout,
} from "lucide-react";

const Preferences = () => {
  return (
    <div className="flex h-screen w-full bg-gray-50">
      <Sidebar activePath="/settings" />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title="Preferences" />

        <div className="flex-1 overflow-y-auto p-6">
          <div className="max-w-4xl mx-auto space-y-6">
            <div>
              <h1 className="text-2xl font-bold">Preferences</h1>
              <p className="text-muted-foreground">
                Customize your experience with the platform
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Appearance</CardTitle>
                <CardDescription>
                  Customize how the application looks
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-primary/10 rounded-full">
                        <Palette className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <Label htmlFor="theme">Theme</Label>
                        <p className="text-sm text-muted-foreground">
                          Choose your preferred color theme
                        </p>
                      </div>
                    </div>
                    <Select defaultValue="system">
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select theme" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">
                          <div className="flex items-center">
                            <Sun className="mr-2 h-4 w-4" />
                            Light
                          </div>
                        </SelectItem>
                        <SelectItem value="dark">
                          <div className="flex items-center">
                            <Moon className="mr-2 h-4 w-4" />
                            Dark
                          </div>
                        </SelectItem>
                        <SelectItem value="system">
                          <div className="flex items-center">
                            <Monitor className="mr-2 h-4 w-4" />
                            System
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-primary/10 rounded-full">
                        <Layout className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <Label htmlFor="density">Interface Density</Label>
                        <p className="text-sm text-muted-foreground">
                          Adjust the spacing and density of the interface
                        </p>
                      </div>
                    </div>
                    <Select defaultValue="comfortable">
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select density" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="compact">Compact</SelectItem>
                        <SelectItem value="comfortable">Comfortable</SelectItem>
                        <SelectItem value="spacious">Spacious</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-primary/10 rounded-full">
                        <Sun className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <Label htmlFor="animations">Animations</Label>
                        <p className="text-sm text-muted-foreground">
                          Enable or disable interface animations
                        </p>
                      </div>
                    </div>
                    <Switch id="animations" checked={true} />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Localization</CardTitle>
                <CardDescription>
                  Set your language and regional preferences
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-primary/10 rounded-full">
                        <Languages className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <Label htmlFor="language">Language</Label>
                        <p className="text-sm text-muted-foreground">
                          Choose your preferred language
                        </p>
                      </div>
                    </div>
                    <Select defaultValue="en-US">
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select language" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="en-US">English (US)</SelectItem>
                        <SelectItem value="en-GB">English (UK)</SelectItem>
                        <SelectItem value="es">Español</SelectItem>
                        <SelectItem value="fr">Français</SelectItem>
                        <SelectItem value="de">Deutsch</SelectItem>
                        <SelectItem value="ja">日本語</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-primary/10 rounded-full">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <Label htmlFor="timeFormat">Time Format</Label>
                        <p className="text-sm text-muted-foreground">
                          Choose your preferred time format
                        </p>
                      </div>
                    </div>
                    <Select defaultValue="12h">
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select time format" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="12h">12-hour (AM/PM)</SelectItem>
                        <SelectItem value="24h">24-hour</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-primary/10 rounded-full">
                        <Calendar className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <Label htmlFor="dateFormat">Date Format</Label>
                        <p className="text-sm text-muted-foreground">
                          Choose your preferred date format
                        </p>
                      </div>
                    </div>
                    <Select defaultValue="MM/DD/YYYY">
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select date format" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="MM/DD/YYYY">MM/DD/YYYY</SelectItem>
                        <SelectItem value="DD/MM/YYYY">DD/MM/YYYY</SelectItem>
                        <SelectItem value="YYYY-MM-DD">YYYY-MM-DD</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Dashboard Preferences</CardTitle>
                <CardDescription>
                  Customize your dashboard experience
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="defaultView">Default View</Label>
                      <p className="text-sm text-muted-foreground">
                        Choose which view to show when you first log in
                      </p>
                    </div>
                    <Select defaultValue="dashboard">
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select default view" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="dashboard">Dashboard</SelectItem>
                        <SelectItem value="content">
                          Content Generation
                        </SelectItem>
                        <SelectItem value="websites">
                          Website Management
                        </SelectItem>
                        <SelectItem value="schedule">
                          Scheduling System
                        </SelectItem>
                        <SelectItem value="analytics">Analytics</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label htmlFor="itemsPerPage">Items Per Page</Label>
                      <span className="text-sm text-muted-foreground">
                        10 items
                      </span>
                    </div>
                    <Slider
                      id="itemsPerPage"
                      defaultValue={[10]}
                      max={50}
                      step={5}
                      className="w-full"
                    />
                    <p className="text-xs text-muted-foreground">
                      Set the number of items to display per page in lists and
                      tables
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div>
                      <Label htmlFor="autoRefresh">
                        Auto-refresh Dashboard
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        Automatically refresh dashboard data
                      </p>
                    </div>
                    <Switch id="autoRefresh" checked={true} />
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div>
                      <Label htmlFor="showTips">Show Tips and Hints</Label>
                      <p className="text-sm text-muted-foreground">
                        Display helpful tips throughout the interface
                      </p>
                    </div>
                    <Switch id="showTips" checked={true} />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button className="gap-2">
                  <Save className="h-4 w-4" />
                  Save Preferences
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preferences;
