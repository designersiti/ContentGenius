import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LogOut } from "lucide-react";

const Logout = () => {
  const navigate = useNavigate();

  // In a real app, you would handle logout logic here
  useEffect(() => {
    // Simulate logout process
    const timer = setTimeout(() => {
      // Navigate to login after a short delay
      navigate("/login");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  const handleCancel = () => {
    navigate(-1); // Go back to previous page
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md">
        <Card>
          <CardHeader className="text-center">
            <LogOut className="h-12 w-12 mx-auto text-primary mb-4" />
            <CardTitle>Signing Out</CardTitle>
            <CardDescription>
              You are being signed out of your account
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <div className="flex justify-center items-center space-x-2">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
              <p>Logging you out...</p>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full" onClick={handleCancel}>
              Cancel
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Logout;
