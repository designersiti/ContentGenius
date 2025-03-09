import React, { useState } from "react";
import Sidebar from "../layout/Sidebar";
import Header from "../layout/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import {
  Sparkles,
  Globe,
  FileText,
  RefreshCw,
  Send,
  Clock,
  Save,
  Wand2,
} from "lucide-react";

const ContentGeneration = () => {
  const [selectedWebsite, setSelectedWebsite] = useState("");
  const [contentType, setContentType] = useState("blog");
  const [tone, setTone] = useState("professional");
  const [length, setLength] = useState([500]);
  const [keywords, setKeywords] = useState("");
  const [title, setTitle] = useState("");
  const [generatedContent, setGeneratedContent] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const websites = [
    { id: "1", name: "Tech Blog", url: "https://techblog.example.com" },
    { id: "2", name: "Marketing Site", url: "https://marketing.example.com" },
    { id: "3", name: "Product Documentation", url: "https://docs.example.com" },
    { id: "4", name: "Company Blog", url: "https://blog.example.com" },
  ];

  const handleGenerate = () => {
    setIsGenerating(true);
    // Simulate content generation
    setTimeout(() => {
      setGeneratedContent(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nisl nisl aliquet nisl, eget aliquam nisl nisl eget nisl. Nullam euismod, nisl eget aliquam ultricies, nisl nisl aliquet nisl, eget aliquam nisl nisl eget nisl.\n\nNullam euismod, nisl eget aliquam ultricies, nisl nisl aliquet nisl, eget aliquam nisl nisl eget nisl. Nullam euismod, nisl eget aliquam ultricies, nisl nisl aliquet nisl, eget aliquam nisl nisl eget nisl.\n\nNullam euismod, nisl eget aliquam ultricies, nisl nisl aliquet nisl, eget aliquam nisl nisl eget nisl. Nullam euismod, nisl eget aliquam ultricies, nisl nisl aliquet nisl, eget aliquam nisl nisl eget nisl.",
      );
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="flex h-screen w-full bg-gray-50">
      <Sidebar activePath="/content" />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title="AI Content Generation" />

        <div className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold">AI Content Generation</h1>
                <p className="text-muted-foreground">
                  Create content with AI assistance
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-1 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Globe className="h-5 w-5" />
                      Select Website
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Select
                      value={selectedWebsite}
                      onValueChange={setSelectedWebsite}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a website" />
                      </SelectTrigger>
                      <SelectContent>
                        {websites.map((website) => (
                          <SelectItem key={website.id} value={website.id}>
                            {website.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="h-5 w-5" />
                      Content Parameters
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label>Content Type</Label>
                      <Select
                        value={contentType}
                        onValueChange={setContentType}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="blog">Blog Post</SelectItem>
                          <SelectItem value="article">Article</SelectItem>
                          <SelectItem value="product">
                            Product Description
                          </SelectItem>
                          <SelectItem value="social">
                            Social Media Post
                          </SelectItem>
                          <SelectItem value="email">
                            Email Newsletter
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Tone</Label>
                      <Select value={tone} onValueChange={setTone}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="professional">
                            Professional
                          </SelectItem>
                          <SelectItem value="casual">Casual</SelectItem>
                          <SelectItem value="friendly">Friendly</SelectItem>
                          <SelectItem value="authoritative">
                            Authoritative
                          </SelectItem>
                          <SelectItem value="humorous">Humorous</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <Label>Content Length</Label>
                        <span className="text-sm text-muted-foreground">
                          {length[0]} words
                        </span>
                      </div>
                      <Slider
                        value={length}
                        min={100}
                        max={2000}
                        step={100}
                        onValueChange={setLength}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Keywords (comma separated)</Label>
                      <Input
                        placeholder="Enter keywords"
                        value={keywords}
                        onChange={(e) => setKeywords(e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Title</Label>
                      <Input
                        placeholder="Enter title or leave blank for AI suggestion"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      />
                    </div>

                    <Button
                      className="w-full gap-2"
                      onClick={handleGenerate}
                      disabled={!selectedWebsite || isGenerating}
                    >
                      {isGenerating ? (
                        <>
                          <RefreshCw className="h-4 w-4 animate-spin" />
                          Generating...
                        </>
                      ) : (
                        <>
                          <Sparkles className="h-4 w-4" />
                          Generate Content
                        </>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <div className="lg:col-span-2">
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Wand2 className="h-5 w-5" />
                      Generated Content
                    </CardTitle>
                    <CardDescription>
                      {generatedContent
                        ? "Review and edit your generated content"
                        : "Content will appear here after generation"}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {isGenerating ? (
                      <div className="flex flex-col items-center justify-center h-[400px] space-y-4">
                        <RefreshCw className="h-8 w-8 animate-spin text-primary" />
                        <p className="text-muted-foreground">
                          Generating your content...
                        </p>
                      </div>
                    ) : generatedContent ? (
                      <Textarea
                        className="min-h-[400px] font-mono"
                        value={generatedContent}
                        onChange={(e) => setGeneratedContent(e.target.value)}
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center h-[400px] space-y-4 border-2 border-dashed rounded-md p-6">
                        <Sparkles className="h-12 w-12 text-muted-foreground/50" />
                        <div className="text-center">
                          <h3 className="font-medium">
                            No Content Generated Yet
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            Select a website and set your parameters, then click
                            "Generate Content"
                          </p>
                        </div>
                      </div>
                    )}
                  </CardContent>
                  {generatedContent && (
                    <CardFooter className="flex justify-between">
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm" className="gap-1">
                          <RefreshCw className="h-4 w-4" />
                          Regenerate
                        </Button>
                        <Button variant="outline" size="sm" className="gap-1">
                          <Save className="h-4 w-4" />
                          Save Draft
                        </Button>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm" className="gap-1">
                          <Clock className="h-4 w-4" />
                          Schedule
                        </Button>
                        <Button size="sm" className="gap-1">
                          <Send className="h-4 w-4" />
                          Publish Now
                        </Button>
                      </div>
                    </CardFooter>
                  )}
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentGeneration;
