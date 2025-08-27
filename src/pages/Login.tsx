import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Lock, CheckCircle2 } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      navigate("/select-context");
    }
  };

  const discoverPoints = [
    "Real-time supply chain visibility",
    "Advanced analytics and reporting",
    "Automated inventory management",
    "Predictive demand forecasting",
    "Integrated supplier network"
  ];

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left Side - Login Form */}
      <div className="flex items-center justify-center p-8 bg-gradient-subtle">
        <Card className="w-full max-w-md shadow-card">
          <CardHeader className="text-center">
            <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-4">
              <span className="text-2xl font-bold text-white">A</span>
            </div>
            <CardTitle className="text-2xl font-bold text-primary">Welcome Back</CardTitle>
            <p className="text-muted-foreground">Sign in to your Antlia 4.0 account</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="pl-10 border-primary/20 focus:border-primary"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    className="pl-10 border-primary/20 focus:border-primary"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>
              <Button 
                type="submit" 
                className="w-full bg-gradient-primary hover:bg-gradient-secondary text-white font-semibold"
              >
                Sign In
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>

      {/* Right Side - Discover Information */}
      <div className="hidden lg:flex items-center justify-center p-8 bg-gradient-primary text-white">
        <Card className="w-full max-w-md shadow-card">
          <CardHeader>
            <CardTitle className="text-3xl font-bold">Discover Antlia 4.0</CardTitle>
            <p className="text-lg opacity-90">Transform your supply chain with our advanced platform</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {discoverPoints.map((point, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-primary-light flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground/90">{point}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;