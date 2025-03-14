import React from "react";
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
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  CheckCircle2,
  Clock,
  CreditCard,
  AlertCircle,
  ArrowRight,
  Calendar,
  Zap,
  Users,
  HardDrive,
  FileText,
  BarChart,
  Headphones,
  Shield,
} from "lucide-react";

const Subscription = () => {
  return (
    <div className="flex h-screen w-full bg-gray-50">
      <Sidebar activePath="/subscription" />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title="Subscription" />

        <div className="flex-1 overflow-y-auto p-6">
          <div className="max-w-6xl mx-auto space-y-6">
            <div>
              <h1 className="text-2xl font-bold">Subscription</h1>
              <p className="text-muted-foreground">
                Manage your subscription plan and billing cycle
              </p>
            </div>

            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Current Plan</CardTitle>
                    <CardDescription>
                      Your current subscription details
                    </CardDescription>
                  </div>
                  <Badge className="bg-green-500">Active</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 p-4 border rounded-lg bg-primary/5">
                  <div>
                    <h3 className="text-xl font-bold">Professional Plan</h3>
                    <p className="text-muted-foreground">
                      Ideal for small to medium businesses
                    </p>
                  </div>
                  <div className="text-center md:text-right">
                    <div className="text-3xl font-bold">$49</div>
                    <div className="text-sm text-muted-foreground">
                      per month, billed monthly
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-medium">Plan Features</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                        <span>Unlimited websites</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                        <span>500 AI content generations per month</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                        <span>Advanced analytics and reporting</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                        <span>10GB storage</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                        <span>5 team members</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                        <span>Priority support</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-medium">Subscription Details</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Status</span>
                        <span className="font-medium text-green-600">
                          Active
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">
                          Billing Cycle
                        </span>
                        <span className="font-medium">Monthly</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">
                          Next Billing Date
                        </span>
                        <span className="font-medium">July 15, 2023</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">
                          Payment Method
                        </span>
                        <span className="font-medium">Visa ending in 4242</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">
                          Subscription Started
                        </span>
                        <span className="font-medium">January 15, 2023</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Change Plan</Button>
                <Button variant="destructive">Cancel Plan</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
