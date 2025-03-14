import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import {
  FileText,
  Sparkles,
  Wand2,
  Plus,
  X,
  Save,
  Calendar,
  Clock,
  Send,
  Image,
  Link,
  Heading,
  List,
  AlignLeft,
  Zap,
} from "lucide-react";

interface CreateContentDialogProps {
  trigger?: React.ReactNode;
}

const CreateContentDialog = ({ trigger }: CreateContentDialogProps) => {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("ai");
  const [title, setTitle] = useState("");
  const [keywords, setKeywords] = useState<string[]>([]);
  const [keywordInput, setKeywordInput] = useState("");
  const [contentLength, setContentLength] = useState([500]);
  const [tone, setTone] = useState("professional");
  const [contentType, setContentType] = useState("blog");
  const [includeImages, setIncludeImages] = useState(true);
  const [manualContent, setManualContent] = useState("");
  const [generatedContent, setGeneratedContent] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedWebsite, setSelectedWebsite] = useState("website1");

  const websites = [
    { id: "website1", name: "Company Blog" },
    { id: "website2", name: "Product Website" },
    { id: "website3", name: "Marketing Site" },
  ];

  const handleAddKeyword = () => {
    if (keywordInput.trim() && !keywords.includes(keywordInput.trim())) {
      setKeywords([...keywords, keywordInput.trim()]);
      setKeywordInput("");
    }
  };

  const handleRemoveKeyword = (keyword: string) => {
    setKeywords(keywords.filter((k) => k !== keyword));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddKeyword();
    }
  };

  const handleGenerateContent = () => {
    setIsGenerating(true);
    // Simulate AI generation
    setTimeout(() => {
      setGeneratedContent(
        `# ${title}\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl.\n\n## Key Points\n\n- Point one about ${keywords[0] || "the topic"}\n- Point two about ${keywords[1] || "related subjects"}\n- Point three with detailed analysis\n\nFurther exploration of the topic with in-depth analysis and practical examples. This section would contain detailed information about ${title} with relevant examples and case studies.\n\n### Conclusion\n\nSummarizing the key points and providing actionable insights for the reader.`,
      );
      setIsGenerating(false);
    }, 2000);
  };

  const handleSubmit = () => {
    // In a real app, you would save the content here
    console.log("Content saved:", {
      title,
      content: activeTab === "ai" ? generatedContent : manualContent,
      website: selectedWebsite,
      keywords,
      contentType,
      tone,
    });

    // Reset form and close dialog
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Create New Content
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Create New Content</DialogTitle>
          <DialogDescription>
            Create content for your website using AI assistance or write it
            manually.
          </DialogDescription>
        </DialogHeader>

        <div className="py-4">
          <div className="space-y-4 mb-4">
            <div className="space-y-2">
              <Label htmlFor="website">Select Website</Label>
              <Select
                value={selectedWebsite}
                onValueChange={setSelectedWebsite}
              >
                <SelectTrigger id="website">
                  <SelectValue placeholder="Select website" />
                </SelectTrigger>
                <SelectContent>
                  {websites.map((website) => (
                    <SelectItem key={website.id} value={website.id}>
                      {website.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="title">Content Title</Label>
              <Input
                id="title"
                placeholder="Enter a title for your content"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="contentType">Content Type</Label>
              <Select value={contentType} onValueChange={setContentType}>
                <SelectTrigger id="contentType">
                  <SelectValue placeholder="Select content type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="blog">Blog Post</SelectItem>
                  <SelectItem value="article">Article</SelectItem>
                  <SelectItem value="product">Product Description</SelectItem>
                  <SelectItem value="landing">Landing Page</SelectItem>
                  <SelectItem value="social">Social Media Post</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-2 mb-4">
              <TabsTrigger value="ai" className="gap-2">
                <Sparkles className="h-4 w-4" />
                AI-Generated
              </TabsTrigger>
              <TabsTrigger value="manual" className="gap-2">
                <FileText className="h-4 w-4" />
                Write Manually
              </TabsTrigger>
            </TabsList>

            <TabsContent value="ai" className="space-y-4">
              <div className="space-y-4 border rounded-lg p-4 bg-muted/30">
                <div className="space-y-2">
                  <Label htmlFor="keywords">Keywords</Label>
                  <div className="flex gap-2">
                    <Input
                      id="keywords"
                      placeholder="Enter keywords and press Enter"
                      value={keywordInput}
                      onChange={(e) => setKeywordInput(e.target.value)}
                      onKeyDown={handleKeyDown}
                    />
                    <Button
                      type="button"
                      variant="outline"
                      onClick={handleAddKeyword}
                    >
                      Add
                    </Button>
                  </div>
                  {keywords.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {keywords.map((keyword) => (
                        <Badge
                          key={keyword}
                          variant="secondary"
                          className="gap-1 px-2 py-1"
                        >
                          {keyword}
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="h-4 w-4 ml-1 hover:bg-transparent"
                            onClick={() => handleRemoveKeyword(keyword)}
                          >
                            <X className="h-3 w-3" />
                          </Button>
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Label htmlFor="contentLength">Content Length</Label>
                    <span className="text-sm text-muted-foreground">
                      ~{contentLength[0]} words
                    </span>
                  </div>
                  <Slider
                    id="contentLength"
                    min={100}
                    max={2000}
                    step={100}
                    value={contentLength}
                    onValueChange={setContentLength}
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Short</span>
                    <span>Medium</span>
                    <span>Long</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tone">Content Tone</Label>
                  <Select value={tone} onValueChange={setTone}>
                    <SelectTrigger id="tone">
                      <SelectValue placeholder="Select tone" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="professional">Professional</SelectItem>
                      <SelectItem value="casual">Casual</SelectItem>
                      <SelectItem value="friendly">Friendly</SelectItem>
                      <SelectItem value="authoritative">
                        Authoritative
                      </SelectItem>
                      <SelectItem value="persuasive">Persuasive</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="includeImages"
                      checked={includeImages}
                      onCheckedChange={setIncludeImages}
                    />
                    <Label htmlFor="includeImages">
                      Include image suggestions
                    </Label>
                  </div>
                </div>

                <Button
                  type="button"
                  className="w-full gap-2"
                  onClick={handleGenerateContent}
                  disabled={!title || isGenerating}
                >
                  {isGenerating ? (
                    <>
                      <div className="animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Wand2 className="h-4 w-4" />
                      Generate Content
                    </>
                  )}
                </Button>
              </div>

              {generatedContent && (
                <div className="border rounded-lg p-4 space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium">Generated Content</h3>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="gap-1">
                        <Wand2 className="h-3 w-3" />
                        Regenerate
                      </Button>
                      <Button variant="outline" size="sm" className="gap-1">
                        <Zap className="h-3 w-3" />
                        Improve
                      </Button>
                    </div>
                  </div>
                  <div className="min-h-[200px] max-h-[300px] overflow-y-auto prose prose-sm">
                    <pre className="whitespace-pre-wrap font-sans">
                      {generatedContent}
                    </pre>
                  </div>
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" size="sm" className="gap-1">
                      <Calendar className="h-4 w-4" />
                      Schedule
                    </Button>
                    <Button size="sm" className="gap-1">
                      <Save className="h-4 w-4" />
                      Save Content
                    </Button>
                  </div>
                </div>
              )}
            </TabsContent>

            <TabsContent value="manual" className="space-y-4">
              <div className="border rounded-lg p-4 space-y-4">
                <div className="flex gap-2 flex-wrap">
                  <Button variant="outline" size="sm" className="h-8">
                    <Heading className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm" className="h-8">
                    <List className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm" className="h-8">
                    <AlignLeft className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm" className="h-8">
                    <Link className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm" className="h-8">
                    <Image className="h-4 w-4" />
                  </Button>
                </div>
                <Textarea
                  placeholder="Write your content here..."
                  className="min-h-[300px]"
                  value={manualContent}
                  onChange={(e) => setManualContent(e.target.value)}
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <DialogFooter className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-1">
              <Calendar className="h-4 w-4" />
              Schedule
            </Button>
            <Button variant="outline" size="sm" className="gap-1">
              <Clock className="h-4 w-4" />
              Save as Draft
            </Button>
          </div>
          <Button onClick={handleSubmit} className="gap-2">
            <Send className="h-4 w-4" />
            Publish Content
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreateContentDialog;
