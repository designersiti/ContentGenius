import React from "react";
import Sidebar from "../layout/Sidebar";
import Header from "../layout/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Textarea } from "@/components/ui/textarea";
import {
  Search,
  HelpCircle,
  Book,
  MessageSquare,
  FileText,
  Video,
  Mail,
  Phone,
  Send,
} from "lucide-react";

const HelpSupport = () => {
  return (
    <div className="flex h-screen w-full bg-gray-50">
      <Sidebar activePath="/help" />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title="Help & Support" />

        <div className="flex-1 overflow-y-auto p-6">
          <div className="max-w-6xl mx-auto space-y-6">
            <div>
              <h1 className="text-2xl font-bold">Help & Support</h1>
              <p className="text-muted-foreground">
                Find answers to your questions and get support
              </p>
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <Input
                placeholder="Search for help articles, tutorials, and more..."
                className="pl-10 py-6 text-lg"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-primary/5 border-primary/20">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-primary/10">
                      <Book className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Documentation</CardTitle>
                  </div>
                  <CardDescription>
                    Browse our comprehensive documentation
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    Find detailed guides, API references, and examples to help
                    you get the most out of our platform.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View Documentation
                  </Button>
                </CardFooter>
              </Card>

              <Card className="bg-primary/5 border-primary/20">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-primary/10">
                      <MessageSquare className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Live Chat</CardTitle>
                  </div>
                  <CardDescription>
                    Chat with our support team in real-time
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    Get immediate assistance from our support team. Available
                    Monday to Friday, 9 AM to 5 PM EST.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Start Chat</Button>
                </CardFooter>
              </Card>

              <Card className="bg-primary/5 border-primary/20">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-primary/10">
                      <Video className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Video Tutorials</CardTitle>
                  </div>
                  <CardDescription>
                    Learn through step-by-step video guides
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    Watch our collection of video tutorials to learn how to use
                    all the features of our platform effectively.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Watch Tutorials
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <Tabs defaultValue="faq" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="faq">
                  Frequently Asked Questions
                </TabsTrigger>
                <TabsTrigger value="contact">Contact Us</TabsTrigger>
                <TabsTrigger value="tickets">Support Tickets</TabsTrigger>
              </TabsList>

              <TabsContent value="faq" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Frequently Asked Questions</CardTitle>
                    <CardDescription>
                      Find answers to common questions about our platform
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                        <AccordionTrigger>
                          How do I add a new website to my account?
                        </AccordionTrigger>
                        <AccordionContent>
                          To add a new website, navigate to the Website
                          Management section from the sidebar. Click on the "Add
                          Website" button in the top right corner. Fill in the
                          required details such as website name, URL, and
                          category, then click "Add Website" to save.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                        <AccordionTrigger>
                          How does the AI content generation work?
                        </AccordionTrigger>
                        <AccordionContent>
                          Our AI content generation uses advanced natural
                          language processing to create high-quality content
                          based on your inputs. Simply select a website, specify
                          parameters like tone, length, and keywords, then click
                          "Generate Content". You can edit the generated content
                          before publishing or scheduling it.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-3">
                        <AccordionTrigger>
                          Can I schedule content for multiple websites at once?
                        </AccordionTrigger>
                        <AccordionContent>
                          Yes, you can schedule content for multiple websites
                          using our bulk scheduling feature. Go to the
                          Scheduling System, select "Bulk Schedule" from the
                          dropdown menu, choose the websites and content pieces
                          you want to schedule, set the dates and times, and
                          click "Schedule All".
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-4">
                        <AccordionTrigger>
                          How do I interpret the analytics data?
                        </AccordionTrigger>
                        <AccordionContent>
                          Our Analytics Dashboard provides comprehensive metrics
                          on your content performance. You can view metrics like
                          page views, engagement rate, and conversion rate. The
                          dashboard includes visualizations to help you
                          understand trends over time. Hover over any chart for
                          detailed information or export reports for deeper
                          analysis.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-5">
                        <AccordionTrigger>
                          What payment methods do you accept?
                        </AccordionTrigger>
                        <AccordionContent>
                          We accept all major credit cards (Visa, Mastercard,
                          American Express, Discover), PayPal, and bank
                          transfers for annual plans. You can manage your
                          payment methods in the Billing section of your
                          account.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-6">
                        <AccordionTrigger>
                          How can I upgrade or downgrade my subscription?
                        </AccordionTrigger>
                        <AccordionContent>
                          To change your subscription plan, go to the
                          Subscription page in your account settings. Click on
                          "Change Plan" and select the new plan you want. If
                          you're upgrading, the additional cost will be prorated
                          for the remainder of your billing cycle. If you're
                          downgrading, the change will take effect at the end of
                          your current billing cycle.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="contact" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Contact Us</CardTitle>
                    <CardDescription>
                      Get in touch with our support team
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="flex flex-col items-center text-center p-4 border rounded-lg">
                        <div className="p-3 bg-primary/10 rounded-full mb-3">
                          <Mail className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="font-medium">Email Support</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          support@contentmanager.com
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          Response time: 24-48 hours
                        </p>
                      </div>

                      <div className="flex flex-col items-center text-center p-4 border rounded-lg">
                        <div className="p-3 bg-primary/10 rounded-full mb-3">
                          <Phone className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="font-medium">Phone Support</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          +1 (555) 123-4567
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          Mon-Fri, 9 AM - 5 PM EST
                        </p>
                      </div>

                      <div className="flex flex-col items-center text-center p-4 border rounded-lg">
                        <div className="p-3 bg-primary/10 rounded-full mb-3">
                          <MessageSquare className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="font-medium">Live Chat</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          Available in your dashboard
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          Business hours, instant response
                        </p>
                      </div>
                    </div>

                    <div className="border-t pt-6">
                      <h3 className="font-medium mb-4">Send us a message</h3>
                      <form className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label
                              htmlFor="name"
                              className="text-sm font-medium"
                            >
                              Your Name
                            </label>
                            <Input id="name" placeholder="John Doe" />
                          </div>
                          <div className="space-y-2">
                            <label
                              htmlFor="email"
                              className="text-sm font-medium"
                            >
                              Email Address
                            </label>
                            <Input
                              id="email"
                              type="email"
                              placeholder="john@example.com"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label
                            htmlFor="subject"
                            className="text-sm font-medium"
                          >
                            Subject
                          </label>
                          <Input
                            id="subject"
                            placeholder="How can we help you?"
                          />
                        </div>
                        <div className="space-y-2">
                          <label
                            htmlFor="message"
                            className="text-sm font-medium"
                          >
                            Message
                          </label>
                          <Textarea
                            id="message"
                            placeholder="Please describe your issue or question in detail..."
                            rows={5}
                          />
                        </div>
                        <Button className="gap-2">
                          <Send className="h-4 w-4" />
                          Send Message
                        </Button>
                      </form>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="tickets" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Support Tickets</CardTitle>
                    <CardDescription>
                      View and manage your support tickets
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-12">
                      <HelpCircle className="h-12 w-12 mx-auto text-muted-foreground/50" />
                      <h3 className="mt-4 text-lg font-medium">
                        No active support tickets
                      </h3>
                      <p className="text-muted-foreground mt-2">
                        You don't have any active support tickets at the moment
                      </p>
                      <Button className="mt-4 gap-2">
                        <FileText className="h-4 w-4" />
                        Create New Ticket
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpSupport;
