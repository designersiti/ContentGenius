import React from "react";
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { User, Mail, Phone, Shield, Bell, Lock, Save } from "lucide-react";

const Account = () => {
  return (
    <div className="flex h-screen w-full bg-gray-50">
      <Sidebar activePath="/settings" />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title="Account Settings" />

        <div className="flex-1 overflow-y-auto p-6">
          <div className="max-w-4xl mx-auto space-y-6">
            <div>
              <h1 className="text-2xl font-bold">Account Settings</h1>
              <p className="text-muted-foreground">
                Manage your account information and preferences
              </p>
            </div>

            <Tabs defaultValue="profile" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="profile">Profile</TabsTrigger>
                <TabsTrigger value="security">Security</TabsTrigger>
                <TabsTrigger value="notifications">Notifications</TabsTrigger>
              </TabsList>

              <TabsContent value="profile" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                    <CardDescription>
                      Update your personal details and contact information
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex flex-col items-center space-y-3">
                        <Avatar className="h-24 w-24">
                          <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=John" />
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <Button variant="outline" size="sm">
                          Change Avatar
                        </Button>
                      </div>

                      <div className="flex-1 space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="firstName">First Name</Label>
                            <div className="flex">
                              <span className="flex items-center px-3 rounded-l-md border border-r-0 border-input bg-muted">
                                <User className="h-4 w-4 text-muted-foreground" />
                              </span>
                              <Input
                                id="firstName"
                                placeholder="John"
                                value="John"
                                className="rounded-l-none"
                              />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="lastName">Last Name</Label>
                            <Input
                              id="lastName"
                              placeholder="Doe"
                              value="Doe"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <div className="flex">
                            <span className="flex items-center px-3 rounded-l-md border border-r-0 border-input bg-muted">
                              <Mail className="h-4 w-4 text-muted-foreground" />
                            </span>
                            <Input
                              id="email"
                              type="email"
                              placeholder="john@example.com"
                              value="john@example.com"
                              className="rounded-l-none"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <div className="flex">
                            <span className="flex items-center px-3 rounded-l-md border border-r-0 border-input bg-muted">
                              <Phone className="h-4 w-4 text-muted-foreground" />
                            </span>
                            <Input
                              id="phone"
                              type="tel"
                              placeholder="+1 (555) 123-4567"
                              value="+1 (555) 123-4567"
                              className="rounded-l-none"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-end">
                    <Button className="gap-2">
                      <Save className="h-4 w-4" />
                      Save Changes
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Company Information</CardTitle>
                    <CardDescription>
                      Update your company details and business information
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="companyName">Company Name</Label>
                      <Input
                        id="companyName"
                        placeholder="Acme Inc."
                        value="Acme Inc."
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="industry">Industry</Label>
                        <Input
                          id="industry"
                          placeholder="Technology"
                          value="Technology"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="size">Company Size</Label>
                        <Input
                          id="size"
                          placeholder="10-50 employees"
                          value="10-50 employees"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="website">Company Website</Label>
                      <Input
                        id="website"
                        placeholder="https://acme.com"
                        value="https://acme.com"
                      />
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-end">
                    <Button className="gap-2">
                      <Save className="h-4 w-4" />
                      Save Changes
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="security" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Password</CardTitle>
                    <CardDescription>
                      Change your password or enable two-factor authentication
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="currentPassword">Current Password</Label>
                      <div className="flex">
                        <span className="flex items-center px-3 rounded-l-md border border-r-0 border-input bg-muted">
                          <Lock className="h-4 w-4 text-muted-foreground" />
                        </span>
                        <Input
                          id="currentPassword"
                          type="password"
                          placeholder="••••••••"
                          className="rounded-l-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="newPassword">New Password</Label>
                        <Input
                          id="newPassword"
                          type="password"
                          placeholder="••••••••"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword">
                          Confirm New Password
                        </Label>
                        <Input
                          id="confirmPassword"
                          type="password"
                          placeholder="••••••••"
                        />
                      </div>
                    </div>

                    <div className="pt-4">
                      <Button>Update Password</Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Two-Factor Authentication</CardTitle>
                    <CardDescription>
                      Add an extra layer of security to your account
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="p-2 bg-primary/10 rounded-full">
                          <Shield className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">Authenticator App</h4>
                          <p className="text-sm text-muted-foreground">
                            Use an authenticator app to generate one-time codes
                          </p>
                        </div>
                      </div>
                      <Switch />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="p-2 bg-primary/10 rounded-full">
                          <Phone className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">SMS Authentication</h4>
                          <p className="text-sm text-muted-foreground">
                            Receive a code via SMS to verify your identity
                          </p>
                        </div>
                      </div>
                      <Switch checked={true} />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Active Sessions</CardTitle>
                    <CardDescription>
                      Manage your active sessions and devices
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 border rounded-md">
                        <div className="flex items-center space-x-4">
                          <div className="p-2 bg-primary/10 rounded-full">
                            <User className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium">Current Session</h4>
                            <p className="text-sm text-muted-foreground">
                              Chrome on Windows • New York, USA
                            </p>
                          </div>
                        </div>
                        <Badge>Active Now</Badge>
                      </div>

                      <div className="flex items-center justify-between p-3 border rounded-md">
                        <div className="flex items-center space-x-4">
                          <div className="p-2 bg-muted rounded-full">
                            <User className="h-5 w-5 text-muted-foreground" />
                          </div>
                          <div>
                            <h4 className="font-medium">Mobile App</h4>
                            <p className="text-sm text-muted-foreground">
                              iPhone 13 • San Francisco, USA
                            </p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          Log Out
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Log Out of All Devices
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="notifications" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Notification Preferences</CardTitle>
                    <CardDescription>
                      Manage how and when you receive notifications
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">
                        Email Notifications
                      </h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div>
                            <Label htmlFor="email-content">
                              Content Updates
                            </Label>
                            <p className="text-sm text-muted-foreground">
                              Receive notifications about content changes and
                              updates
                            </p>
                          </div>
                          <Switch id="email-content" checked={true} />
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <Label htmlFor="email-schedule">
                              Scheduled Content
                            </Label>
                            <p className="text-sm text-muted-foreground">
                              Get notified when scheduled content is published
                            </p>
                          </div>
                          <Switch id="email-schedule" checked={true} />
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <Label htmlFor="email-analytics">
                              Analytics Reports
                            </Label>
                            <p className="text-sm text-muted-foreground">
                              Receive weekly analytics reports
                            </p>
                          </div>
                          <Switch id="email-analytics" />
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <Label htmlFor="email-marketing">
                              Marketing Updates
                            </Label>
                            <p className="text-sm text-muted-foreground">
                              Receive news about new features and updates
                            </p>
                          </div>
                          <Switch id="email-marketing" />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">
                        In-App Notifications
                      </h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div>
                            <Label htmlFor="app-content">Content Updates</Label>
                            <p className="text-sm text-muted-foreground">
                              Show notifications for content changes
                            </p>
                          </div>
                          <Switch id="app-content" checked={true} />
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <Label htmlFor="app-comments">Comments</Label>
                            <p className="text-sm text-muted-foreground">
                              Show notifications for new comments
                            </p>
                          </div>
                          <Switch id="app-comments" checked={true} />
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <Label htmlFor="app-analytics">
                              Performance Alerts
                            </Label>
                            <p className="text-sm text-muted-foreground">
                              Get notified about significant changes in
                              analytics
                            </p>
                          </div>
                          <Switch id="app-analytics" checked={true} />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-end">
                    <Button className="gap-2">
                      <Bell className="h-4 w-4" />
                      Update Preferences
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
