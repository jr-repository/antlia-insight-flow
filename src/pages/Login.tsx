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
    <div className="min-h-screen relative overflow-hidden bg-gradient-primary">
      {/* Animated Stars Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="star" />
        ))}
      </div>

      {/* Main Container with Glassmorphism */}
      <div className="min-h-screen flex items-center justify-center p-8 relative z-10">
        <Card className="w-full max-w-6xl glass-card border-white/20 shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2 min-h-[600px]">
            
            {/* Left Side - Login Form */}
            <div className="flex items-center justify-center p-8 lg:p-12">
              <div className="w-full max-w-md space-y-8">
                {/* Logo */}
                <div className="text-center">
                  <div className="mx-auto w-20 h-20 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 border border-white/20">
                    <span className="text-3xl font-bold text-white tracking-tight">A</span>
                  </div>
                  <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">Welcome Back</h1>
                  <p className="text-white/70 font-medium">Sign in to your Antlia 4.0 account</p>
                </div>

                {/* Login Form */}
                <form onSubmit={handleLogin} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white font-semibold">Email Address</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/60" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        className="pl-11 h-12 glass-morphism border-white/30 text-white placeholder:text-white/60 focus:border-white/60 font-medium"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-white font-semibold">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/60" />
                      <Input
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        className="pl-11 h-12 glass-morphism border-white/30 text-white placeholder:text-white/60 focus:border-white/60 font-medium"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full h-12 bg-white/20 hover:bg-white/30 text-white font-bold tracking-wide backdrop-blur-md border border-white/30 transition-all duration-300 hover:scale-[1.02]"
                  >
                    Sign In
                  </Button>
                </form>
              </div>
            </div>

            {/* Right Side - Discover Section with Glassmorphism */}
            <div className="flex items-center justify-center p-8 lg:p-12 bg-white/5 backdrop-blur-sm">
              <div className="w-full max-w-md">
                <div className="glass-card p-8 border-white/20">
                  <div className="mb-8">
                    <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">
                      Discover Antlia 4.0
                    </h2>
                    <p className="text-xl text-white/80 font-medium leading-relaxed">
                      Transform your supply chain with our advanced platform
                    </p>
                  </div>
                  
                  <div className="space-y-5">
                    {discoverPoints.map((point, index) => (
                      <div key={index} className="flex items-start space-x-4 glass-morphism p-4 rounded-xl border-white/10">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center mt-0.5">
                          <CheckCircle2 className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-white/90 font-medium leading-relaxed">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </Card>
      </div>
    </div>
  );
};

export default Login;