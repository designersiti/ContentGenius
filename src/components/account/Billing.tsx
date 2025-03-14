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
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  CreditCard,
  Download,
  FileText,
  Plus,
  Receipt,
  CreditCardIcon,
  Calendar,
  CheckCircle2,
  AlertCircle,
  Clock,
  Building,
  Mail,
  MapPin,
  Globe,
  DollarSign,
} from "lucide-react";

const Billing = () => {
  return (
    <div className="flex h-screen w-full bg-gray-50">
      <Sidebar activePath="/billing" />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title="Billing" />

        <div className="flex-1 overflow-y-auto p-6">
          <div className="max-w-6xl mx-auto space-y-6">
            <div>
              <h1 className="text-2xl font-bold">Billing & Invoices</h1>
              <p className="text-muted-foreground">
                Manage your subscription, payment methods, and billing history
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle>Current Plan</CardTitle>
                  <CardDescription>
                    Your current subscription plan
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold">Professional Plan</h3>
                        <Badge className="mt-1 bg-green-500">Active</Badge>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold">$49</div>
                        <div className="text-sm text-muted-foreground">
                          per month
                        </div>
                      </div>
                    </div>

                    <div className="pt-2 space-y-2">
                      <div className="flex items-center">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-sm">Unlimited websites</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-sm">Advanced analytics</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-sm">
                          500 AI content generations
                        </span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-sm">Priority support</span>
                      </div>
                    </div>

                    <div className="pt-2">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>Renews on July 15, 2023</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Change Plan</Button>
                  <Button variant="destructive">Cancel Plan</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle>Payment Method</CardTitle>
                  <CardDescription>Manage your payment methods</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 border rounded-md">
                      <div className="flex items-center space-x-3">
                        <div className="bg-primary/10 p-2 rounded-md">
                          <CreditCardIcon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <div className="font-medium">Visa ending in 4242</div>
                          <div className="text-sm text-muted-foreground">
                            Expires 12/2025
                          </div>
                        </div>
                      </div>
                      <Badge>Default</Badge>
                    </div>

                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" className="w-full gap-2">
                          <Plus className="h-4 w-4" />
                          Add Payment Method
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Add Payment Method</DialogTitle>
                          <DialogDescription>
                            Add a new credit card or debit card
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4 py-4">
                          <div className="space-y-2">
                            <Label htmlFor="cardName">Name on Card</Label>
                            <Input id="cardName" placeholder="John Doe" />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="cardNumber">Card Number</Label>
                            <div className="flex">
                              <span className="flex items-center px-3 rounded-l-md border border-r-0 border-input bg-muted">
                                <CreditCardIcon className="h-4 w-4 text-muted-foreground" />
                              </span>
                              <Input
                                id="cardNumber"
                                placeholder="1234 5678 9012 3456"
                                className="rounded-l-none"
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="expiryDate">Expiry Date</Label>
                              <div className="flex">
                                <span className="flex items-center px-3 rounded-l-md border border-r-0 border-input bg-muted">
                                  <Calendar className="h-4 w-4 text-muted-foreground" />
                                </span>
                                <Input
                                  id="expiryDate"
                                  placeholder="MM/YY"
                                  className="rounded-l-none"
                                />
                              </div>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="cvc">CVC</Label>
                              <Input id="cvc" placeholder="123" />
                            </div>
                          </div>
                        </div>
                        <DialogFooter>
                          <Button type="submit">Add Card</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle>Billing Information</CardTitle>
                  <CardDescription>Manage your billing details</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <div className="flex items-center">
                        <Building className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span className="font-medium">Acme Inc.</span>
                      </div>
                      <div className="flex items-center">
                        <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span>billing@acme.com</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span>123 Business St, New York, NY 10001</span>
                      </div>
                      <div className="flex items-center">
                        <Globe className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span>United States</span>
                      </div>
                      <div className="flex items-center">
                        <FileText className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span>VAT: US123456789</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Edit Billing Information
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Billing History</CardTitle>
                    <CardDescription>
                      View and download your invoices
                    </CardDescription>
                  </div>
                  <Button variant="outline" className="gap-2">
                    <Receipt className="h-4 w-4" />
                    Export All
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Invoice</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      {
                        id: "INV-001",
                        date: "June 15, 2023",
                        amount: "$49.00",
                        status: "paid",
                      },
                      {
                        id: "INV-002",
                        date: "May 15, 2023",
                        amount: "$49.00",
                        status: "paid",
                      },
                      {
                        id: "INV-003",
                        date: "April 15, 2023",
                        amount: "$49.00",
                        status: "paid",
                      },
                      {
                        id: "INV-004",
                        date: "March 15, 2023",
                        amount: "$49.00",
                        status: "paid",
                      },
                      {
                        id: "INV-005",
                        date: "February 15, 2023",
                        amount: "$49.00",
                        status: "paid",
                      },
                    ].map((invoice) => (
                      <TableRow key={invoice.id}>
                        <TableCell className="font-medium">
                          {invoice.id}
                        </TableCell>
                        <TableCell>{invoice.date}</TableCell>
                        <TableCell>{invoice.amount}</TableCell>
                        <TableCell>
                          {invoice.status === "paid" ? (
                            <Badge className="bg-green-500">
                              <CheckCircle2 className="h-3 w-3 mr-1" />
                              Paid
                            </Badge>
                          ) : invoice.status === "pending" ? (
                            <Badge
                              variant="outline"
                              className="border-amber-500 text-amber-700"
                            >
                              <Clock className="h-3 w-3 mr-1" />
                              Pending
                            </Badge>
                          ) : (
                            <Badge variant="destructive">
                              <AlertCircle className="h-3 w-3 mr-1" />
                              Failed
                            </Badge>
                          )}
                        </TableCell>
                        <TableCell className="text-right">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="gap-1 h-8"
                          >
                            <Download className="h-4 w-4" />
                            PDF
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Usage & Limits</CardTitle>
                <CardDescription>
                  Monitor your current usage and limits
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <Label>AI Content Generations</Label>
                      <span className="text-sm font-medium">350 / 500</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full"
                        style={{ width: "70%" }}
                      ></div>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Resets on July 15, 2023
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <Label>Storage</Label>
                      <span className="text-sm font-medium">2.5GB / 10GB</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full"
                        style={{ width: "25%" }}
                      ></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <Label>Team Members</Label>
                      <span className="text-sm font-medium">3 / 5</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full"
                        style={{ width: "60%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" className="gap-2">
                  <DollarSign className="h-4 w-4" />
                  Purchase Add-ons
                </Button>
                <Button>Upgrade Plan</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billing;
