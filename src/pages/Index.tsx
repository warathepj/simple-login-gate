
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";

const Index = () => {
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Validate password length
    if (password.length < 8) {
      setError("Password must be at least 8 characters long");
      setIsLoading(false);
      return;
    }

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // For demo purposes, password is "password123"
      if (password === "password123") {
        toast({
          title: "Success",
          description: "Login successful",
          duration: 2000,
        });
        // Here you would typically set auth state and redirect
      } else {
        setError("Invalid password");
        toast({
          title: "Error",
          description: "Invalid password",
          variant: "destructive",
        });
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
    }

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        <div className="bg-white p-8 rounded-2xl shadow-lg space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-semibold text-gray-900">Welcome Back</h1>
            <p className="text-gray-500">Please enter your password to continue</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <div className="relative">
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`w-full h-12 px-4 transition-all duration-200 ease-in-out ${
                    error ? "border-red-500 focus:ring-red-200" : "border-gray-200 focus:ring-blue-100"
                  }`}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                />
              </div>
              {error && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-red-500"
                >
                  {error}
                </motion.p>
              )}
            </div>

            <Button
              type="submit"
              className={`w-full h-12 transition-all duration-200 ease-in-out ${
                isLoading ? "opacity-75 cursor-not-allowed" : ""
              }`}
              disabled={isLoading}
            >
              {isLoading ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center justify-center"
                >
                  <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                </motion.div>
              ) : (
                "Login"
              )}
            </Button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Index;
