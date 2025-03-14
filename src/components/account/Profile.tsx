import React from "react";
import Sidebar from "../layout/Sidebar";
import Header from "../layout/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  Globe,
  Calendar,
  Save,
  Upload,
  Link as LinkIcon,
  Twitter,
  Linkedin,
  Github,
} from "lucide-react";

const Profile = () => {
  return (
    <div className="flex h-screen w-full bg-gray-50">
      <Sidebar activePath="/profile" />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title="Profile" />

        <div className="flex-1 overflow-y-auto p-6">
          <div className="max-w-4xl mx-auto space-y-6">
            <div>
              <h1 className="text-2xl font-bold">My Profile</h1>
              <p className="text-muted-foreground">
                Manage your personal profile and public information
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>
                  Update your profile information and how others see you
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex flex-col items-center space-y-3">
                    <Avatar className="h-32 w-32">
                      <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=John" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="gap-1">
                        <Upload className="h-4 w-4" />
                        Upload
                      </Button>
                      <Button variant="outline" size="sm" className="gap-1">
                        Remove
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground text-center">
                      Recommended: Square JPG, PNG, or GIF, at least 300x300
                      pixels
                    </p>
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
                        <Input id="lastName" placeholder="Doe" value="Doe" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="jobTitle">Job Title</Label>
                      <div className="flex">
                        <span className="flex items-center px-3 rounded-l-md border border-r-0 border-input bg-muted">
                          <Briefcase className="h-4 w-4 text-muted-foreground" />
                        </span>
                        <Input
                          id="jobTitle"
                          placeholder="Content Manager"
                          value="Content Manager"
                          className="rounded-l-none"
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

                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea
                    id="bio"
                    placeholder="Tell us about yourself"
                    className="min-h-[100px]"
                    defaultValue="Content marketing professional with over 5 years of experience in creating and managing digital content strategies for various industries."
                  />
                  <p className="text-xs text-muted-foreground">
                    Brief description for your profile. URLs are hyperlinked.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <div className="flex">
                      <span className="flex items-center px-3 rounded-l-md border border-r-0 border-input bg-muted">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                      </span>
                      <Input
                        id="location"
                        placeholder="New York, NY"
                        value="New York, NY"
                        className="rounded-l-none"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="timezone">Timezone</Label>
                    <Select defaultValue="America/New_York">
                      <SelectTrigger id="timezone">
                        <SelectValue placeholder="Select timezone" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="America/New_York">
                          Eastern Time (ET)
                        </SelectItem>
                        <SelectItem value="America/Chicago">
                          Central Time (CT)
                        </SelectItem>
                        <SelectItem value="America/Denver">
                          Mountain Time (MT)
                        </SelectItem>
                        <SelectItem value="America/Los_Angeles">
                          Pacific Time (PT)
                        </SelectItem>
                        <SelectItem value="Europe/London">
                          Greenwich Mean Time (GMT)
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="language">Preferred Language</Label>
                    <Select defaultValue="en-US">
                      <SelectTrigger id="language">
                        <SelectValue placeholder="Select language" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="en-US">English (US)</SelectItem>
                        <SelectItem value="en-GB">English (UK)</SelectItem>
                        <SelectItem value="es">Español</SelectItem>
                        <SelectItem value="fr">Français</SelectItem>
                        <SelectItem value="de">Deutsch</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dateJoined">Date Joined</Label>
                    <div className="flex">
                      <span className="flex items-center px-3 rounded-l-md border border-r-0 border-input bg-muted">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                      </span>
                      <Input
                        id="dateJoined"
                        value="January 15, 2023"
                        readOnly
                        className="rounded-l-none bg-muted"
                      />
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
                <CardTitle>Social Profiles</CardTitle>
                <CardDescription>
                  Connect your social media accounts
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="website">Website</Label>
                  <div className="flex">
                    <span className="flex items-center px-3 rounded-l-md border border-r-0 border-input bg-muted">
                      <Globe className="h-4 w-4 text-muted-foreground" />
                    </span>
                    <Input
                      id="website"
                      placeholder="https://yourwebsite.com"
                      value="https://johndoe.com"
                      className="rounded-l-none"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="twitter">Twitter</Label>
                  <div className="flex">
                    <span className="flex items-center px-3 rounded-l-md border border-r-0 border-input bg-muted">
                      <Twitter className="h-4 w-4 text-muted-foreground" />
                    </span>
                    <Input
                      id="twitter"
                      placeholder="@username"
                      value="@johndoe"
                      className="rounded-l-none"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="linkedin">LinkedIn</Label>
                  <div className="flex">
                    <span className="flex items-center px-3 rounded-l-md border border-r-0 border-input bg-muted">
                      <Linkedin className="h-4 w-4 text-muted-foreground" />
                    </span>
                    <Input
                      id="linkedin"
                      placeholder="LinkedIn profile URL"
                      value="https://linkedin.com/in/johndoe"
                      className="rounded-l-none"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="github">GitHub</Label>
                  <div className="flex">
                    <span className="flex items-center px-3 rounded-l-md border border-r-0 border-input bg-muted">
                      <Github className="h-4 w-4 text-muted-foreground" />
                    </span>
                    <Input
                      id="github"
                      placeholder="GitHub username"
                      value="johndoe"
                      className="rounded-l-none"
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button className="gap-2">
                  <LinkIcon className="h-4 w-4" />
                  Update Social Profiles
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
