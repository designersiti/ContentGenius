import React, { useState } from "react";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
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
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Key,
  Plus,
  Copy,
  Eye,
  EyeOff,
  RefreshCw,
  Trash,
  Clock,
  Shield,
  Globe,
  FileText,
  BarChart,
} from "lucide-react";

interface ApiKey {
  id: string;
  name: string;
  key: string;
  created: string;
  lastUsed: string;
  status: "active" | "inactive";
  permissions: string[];
}

const ApiKeys = () => {
  const [apiKeys, setApiKeys] = useState<ApiKey[]>([
    {
      id: "1",
      name: "Production API Key",
      key: "pk_live_51HG7d9CjftzIHg76JUX5jsKD8JsSfUlIQmjY",
      created: "2023-05-15",
      lastUsed: "2023-06-20",
      status: "active",
      permissions: ["read", "write", "analytics"],
    },
    {
      id: "2",
      name: "Development API Key",
      key: "pk_test_51HG7d9CjftzIHg76JUX5jsKD8JsSfUlIQmjY",
      created: "2023-05-20",
      lastUsed: "2023-06-18",
      status: "active",
      permissions: ["read", "write"],
    },
    {
      id: "3",
      name: "Analytics Only",
      key: "pk_analytics_51HG7d9CjftzIHg76JUX5jsKD8JsSfUlIQmjY",
      created: "2023-06-01",
      lastUsed: "2023-06-15",
      status: "active",
      permissions: ["read", "analytics"],
    },
    {
      id: "4",
      name: "Legacy API Key",
      key: "pk_legacy_51HG7d9CjftzIHg76JUX5jsKD8JsSfUlIQmjY",
      created: "2022-11-10",
      lastUsed: "2023-05-01",
      status: "inactive",
      permissions: ["read"],
    },
  ]);

  const [showKeys, setShowKeys] = useState<Record<string, boolean>>({});
  const [newKeyDialogOpen, setNewKeyDialogOpen] = useState(false);
  const [newKeyName, setNewKeyName] = useState("");
  const [newKeyPermissions, setNewKeyPermissions] = useState<string[]>([
    "read",
  ]);
  const [generatedKey, setGeneratedKey] = useState<string | null>(null);

  const toggleKeyVisibility = (id: string) => {
    setShowKeys((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleCreateKey = () => {
    // Generate a random API key
    const generatedApiKey = `pk_${Math.random().toString(36).substring(2, 15)}_${Math.random().toString(36).substring(2, 15)}`;
    setGeneratedKey(generatedApiKey);
  };

  const handleSaveNewKey = () => {
    if (generatedKey && newKeyName) {
      const newKey: ApiKey = {
        id: (apiKeys.length + 1).toString(),
        name: newKeyName,
        key: generatedKey,
        created: new Date().toISOString().split("T")[0],
        lastUsed: "Never",
        status: "active",
        permissions: newKeyPermissions,
      };

      setApiKeys([...apiKeys, newKey]);
      setNewKeyName("");
      setNewKeyPermissions(["read"]);
      setGeneratedKey(null);
      setNewKeyDialogOpen(false);
    }
  };

  const handleToggleKeyStatus = (id: string) => {
    setApiKeys(
      apiKeys.map((key) =>
        key.id === id
          ? {
              ...key,
              status: key.status === "active" ? "inactive" : "active",
            }
          : key,
      ),
    );
  };

  const handleDeleteKey = (id: string) => {
    setApiKeys(apiKeys.filter((key) => key.id !== id));
  };

  const getPermissionBadge = (permission: string) => {
    switch (permission) {
      case "read":
        return (
          <Badge
            variant="outline"
            className="bg-blue-50 text-blue-700 border-blue-200"
          >
            <FileText className="h-3 w-3 mr-1" /> Read
          </Badge>
        );
      case "write":
        return (
          <Badge
            variant="outline"
            className="bg-green-50 text-green-700 border-green-200"
          >
            <FileText className="h-3 w-3 mr-1" /> Write
          </Badge>
        );
      case "analytics":
        return (
          <Badge
            variant="outline"
            className="bg-purple-50 text-purple-700 border-purple-200"
          >
            <BarChart className="h-3 w-3 mr-1" /> Analytics
          </Badge>
        );
      case "admin":
        return (
          <Badge
            variant="outline"
            className="bg-amber-50 text-amber-700 border-amber-200"
          >
            <Shield className="h-3 w-3 mr-1" /> Admin
          </Badge>
        );
      default:
        return (
          <Badge variant="outline">
            <Globe className="h-3 w-3 mr-1" /> {permission}
          </Badge>
        );
    }
  };

  return (
    <div className="flex h-screen w-full bg-gray-50">
      <Sidebar activePath="/settings" />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title="API Keys" />

        <div className="flex-1 overflow-y-auto p-6">
          <div className="max-w-6xl mx-auto space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold">API Keys</h1>
                <p className="text-muted-foreground">
                  Manage API keys for accessing the platform programmatically
                </p>
              </div>

              <Dialog
                open={newKeyDialogOpen}
                onOpenChange={setNewKeyDialogOpen}
              >
                <DialogTrigger asChild>
                  <Button className="gap-2">
                    <Plus className="h-4 w-4" />
                    Create New API Key
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Create New API Key</DialogTitle>
                    <DialogDescription>
                      {!generatedKey
                        ? "Create a new API key to access the platform programmatically."
                        : "Your API key has been generated. Make sure to copy it now as you won't be able to see it again."}
                    </DialogDescription>
                  </DialogHeader>

                  {!generatedKey ? (
                    <div className="space-y-4 py-4">
                      <div className="space-y-2">
                        <Label htmlFor="keyName">API Key Name</Label>
                        <Input
                          id="keyName"
                          placeholder="e.g. Production API Key"
                          value={newKeyName}
                          onChange={(e) => setNewKeyName(e.target.value)}
                        />
                        <p className="text-sm text-muted-foreground">
                          Give your API key a descriptive name to identify its
                          purpose
                        </p>
                      </div>

                      <div className="space-y-2">
                        <Label>Permissions</Label>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="flex items-center space-x-2">
                            <Switch
                              id="read-permission"
                              checked={newKeyPermissions.includes("read")}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  setNewKeyPermissions([
                                    ...newKeyPermissions,
                                    "read",
                                  ]);
                                } else {
                                  setNewKeyPermissions(
                                    newKeyPermissions.filter(
                                      (p) => p !== "read",
                                    ),
                                  );
                                }
                              }}
                            />
                            <Label htmlFor="read-permission">Read</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Switch
                              id="write-permission"
                              checked={newKeyPermissions.includes("write")}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  setNewKeyPermissions([
                                    ...newKeyPermissions,
                                    "write",
                                  ]);
                                } else {
                                  setNewKeyPermissions(
                                    newKeyPermissions.filter(
                                      (p) => p !== "write",
                                    ),
                                  );
                                }
                              }}
                            />
                            <Label htmlFor="write-permission">Write</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Switch
                              id="analytics-permission"
                              checked={newKeyPermissions.includes("analytics")}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  setNewKeyPermissions([
                                    ...newKeyPermissions,
                                    "analytics",
                                  ]);
                                } else {
                                  setNewKeyPermissions(
                                    newKeyPermissions.filter(
                                      (p) => p !== "analytics",
                                    ),
                                  );
                                }
                              }}
                            />
                            <Label htmlFor="analytics-permission">
                              Analytics
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Switch
                              id="admin-permission"
                              checked={newKeyPermissions.includes("admin")}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  setNewKeyPermissions([
                                    ...newKeyPermissions,
                                    "admin",
                                  ]);
                                } else {
                                  setNewKeyPermissions(
                                    newKeyPermissions.filter(
                                      (p) => p !== "admin",
                                    ),
                                  );
                                }
                              }}
                            />
                            <Label htmlFor="admin-permission">Admin</Label>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4 py-4">
                      <div className="space-y-2">
                        <Label htmlFor="generatedKey">Your New API Key</Label>
                        <div className="flex">
                          <Input
                            id="generatedKey"
                            value={generatedKey}
                            readOnly
                            className="font-mono text-sm"
                          />
                          <Button
                            variant="outline"
                            size="icon"
                            className="ml-2"
                            onClick={() => {
                              navigator.clipboard.writeText(generatedKey);
                            }}
                          >
                            <Copy className="h-4 w-4" />
                          </Button>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          This key will only be displayed once. Please copy it
                          and store it securely.
                        </p>
                      </div>

                      <div className="space-y-2">
                        <Label>Permissions</Label>
                        <div className="flex flex-wrap gap-2">
                          {newKeyPermissions.map((permission) => (
                            <div key={permission}>
                              {getPermissionBadge(permission)}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  <DialogFooter>
                    {!generatedKey ? (
                      <Button onClick={handleCreateKey} disabled={!newKeyName}>
                        Generate API Key
                      </Button>
                    ) : (
                      <Button onClick={handleSaveNewKey}>Done</Button>
                    )}
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Your API Keys</CardTitle>
                <CardDescription>
                  Manage your existing API keys and their permissions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>API Key</TableHead>
                      <TableHead>Permissions</TableHead>
                      <TableHead>Created</TableHead>
                      <TableHead>Last Used</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {apiKeys.map((apiKey) => (
                      <TableRow key={apiKey.id}>
                        <TableCell className="font-medium">
                          {apiKey.name}
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                              {showKeys[apiKey.id]
                                ? apiKey.key
                                : `${apiKey.key.substring(0, 8)}...${apiKey.key.substring(apiKey.key.length - 4)}`}
                            </code>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => toggleKeyVisibility(apiKey.id)}
                            >
                              {showKeys[apiKey.id] ? (
                                <EyeOff className="h-4 w-4" />
                              ) : (
                                <Eye className="h-4 w-4" />
                              )}
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => {
                                navigator.clipboard.writeText(apiKey.key);
                              }}
                            >
                              <Copy className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-wrap gap-1">
                            {apiKey.permissions.map((permission) => (
                              <div key={permission}>
                                {getPermissionBadge(permission)}
                              </div>
                            ))}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
                            {apiKey.created}
                          </div>
                        </TableCell>
                        <TableCell>{apiKey.lastUsed}</TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <Switch
                              checked={apiKey.status === "active"}
                              onCheckedChange={() =>
                                handleToggleKeyStatus(apiKey.id)
                              }
                            />
                            <span className="ml-2">
                              {apiKey.status === "active"
                                ? "Active"
                                : "Inactive"}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end space-x-1">
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => {
                                // Regenerate key logic would go here
                              }}
                            >
                              <RefreshCw className="h-4 w-4" />
                            </Button>
                            <AlertDialog>
                              <AlertDialogTrigger asChild>
                                <Button variant="ghost" size="icon">
                                  <Trash className="h-4 w-4 text-destructive" />
                                </Button>
                              </AlertDialogTrigger>
                              <AlertDialogContent>
                                <AlertDialogHeader>
                                  <AlertDialogTitle>
                                    Delete API Key
                                  </AlertDialogTitle>
                                  <AlertDialogDescription>
                                    Are you sure you want to delete this API
                                    key? This action cannot be undone and any
                                    applications using this key will no longer
                                    be able to access the API.
                                  </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                                  <AlertDialogAction
                                    onClick={() => handleDeleteKey(apiKey.id)}
                                    className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                                  >
                                    Delete
                                  </AlertDialogAction>
                                </AlertDialogFooter>
                              </AlertDialogContent>
                            </AlertDialog>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
              <CardFooter className="flex justify-between border-t pt-6">
                <div className="flex items-center space-x-2">
                  <Key className="h-5 w-5 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">
                    You have{" "}
                    {apiKeys.filter((k) => k.status === "active").length} active
                    API keys
                  </p>
                </div>
                <Button variant="outline" className="gap-2">
                  <Shield className="h-4 w-4" />
                  View API Usage Logs
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>API Documentation</CardTitle>
                <CardDescription>
                  Learn how to use our API to integrate with your applications
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card className="bg-primary/5">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Getting Started</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">Learn the basics of our API</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="ghost" className="w-full">
                        View Guide
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card className="bg-primary/5">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">API Reference</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">
                        Complete documentation of all endpoints
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="ghost" className="w-full">
                        View Reference
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card className="bg-primary/5">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Code Examples</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">
                        Sample code in various programming languages
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="ghost" className="w-full">
                        View Examples
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiKeys;
