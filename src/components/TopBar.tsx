import { useState } from "react";
import { Bell, Globe, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { SidebarTrigger } from "@/components/ui/sidebar";

const TopBar = () => {
  const [notifications] = useState(3);
  const company = localStorage.getItem("selectedCompany") || "Antlia Corporation";
  const warehouse = localStorage.getItem("selectedWarehouse") || "Main Warehouse";

  return (
    <div className="h-16 bg-gradient-primary border-b border-white/10 flex items-center justify-between px-6">
      <div className="flex items-center space-x-4">
        <SidebarTrigger className="text-white hover:bg-white/10" />
        <div className="hidden md:block">
          <h1 className="text-white font-semibold text-lg">{company}</h1>
          <p className="text-white/70 text-sm">{warehouse}</p>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        {/* Language Selector */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
              <Globe className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">EN</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>English</DropdownMenuItem>
            <DropdownMenuItem>Bahasa Indonesia</DropdownMenuItem>
            <DropdownMenuItem>中文</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Notifications */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="text-white hover:bg-white/10 relative">
              <Bell className="h-4 w-4" />
              {notifications > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center bg-red-500 text-white text-xs">
                  {notifications}
                </Badge>
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80">
            <DropdownMenuLabel>Notifications</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium">Low stock alert</p>
                <p className="text-xs text-muted-foreground">Product ABC is running low</p>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium">New order received</p>
                <p className="text-xs text-muted-foreground">Order #12345 needs processing</p>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium">Delivery completed</p>
                <p className="text-xs text-muted-foreground">Shipment to Jakarta delivered</p>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Profile */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
              <User className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Admin</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default TopBar;