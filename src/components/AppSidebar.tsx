import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { 
  LayoutDashboard, 
  Package, 
  Truck, 
  Users, 
  BarChart3, 
  Settings,
  ChevronDown,
  ChevronRight,
  Archive,
  ShoppingCart,
  TrendingUp,
  FileText,
  UserCheck,
  Cog
} from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const AppSidebar = () => {
  const { open } = useSidebar();
  const location = useLocation();
  const [openSections, setOpenSections] = useState<string[]>(["inventory", "analytics"]);

  const toggleSection = (section: string) => {
    setOpenSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const menuItems = [
    {
      title: "Dashboard",
      icon: LayoutDashboard,
      url: "/dashboard",
      type: "single"
    },
    {
      title: "Inventory",
      icon: Package,
      type: "group",
      key: "inventory",
      items: [
        { title: "Products", icon: Archive, url: "/inventory/products" },
        { title: "Stock Levels", icon: BarChart3, url: "/inventory/stock" },
        { title: "Orders", icon: ShoppingCart, url: "/inventory/orders" }
      ]
    },
    {
      title: "Logistics",
      icon: Truck,
      url: "/logistics",
      type: "single"
    },
    {
      title: "Suppliers",
      icon: Users,
      url: "/suppliers",
      type: "single"
    },
    {
      title: "Analytics",
      icon: BarChart3,
      type: "group",
      key: "analytics",
      items: [
        { title: "Performance", icon: TrendingUp, url: "/analytics/performance" },
        { title: "Reports", icon: FileText, url: "/analytics/reports" }
      ]
    },
    {
      title: "Settings",
      icon: Settings,
      type: "group",
      key: "settings",
      items: [
        { title: "Users", icon: UserCheck, url: "/settings/users" },
        { title: "System", icon: Cog, url: "/settings/system" }
      ]
    }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <Sidebar
      collapsible="icon"
      variant="sidebar"
      className="border-r border-white/10"
    >
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            {open && (
              <div className="text-white">
                <h2 className="font-bold text-lg">Antlia 4.0</h2>
              </div>
            )}
          </div>
        </div>
      </div>

      <SidebarContent className="px-2">
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              {item.type === "single" ? (
                <SidebarMenuButton asChild>
                  <NavLink
                    to={item.url!}
                    className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors ${
                      isActive(item.url!) ? "bg-white/20 text-white" : ""
                    }`}
                  >
                    <item.icon className="h-5 w-5" />
                    {open && <span>{item.title}</span>}
                  </NavLink>
                </SidebarMenuButton>
              ) : (
                <Collapsible
                  open={openSections.includes(item.key!)}
                  onOpenChange={() => toggleSection(item.key!)}
                >
                  <CollapsibleTrigger className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors">
                    <div className="flex items-center space-x-3">
                      <item.icon className="h-5 w-5" />
                      {open && <span>{item.title}</span>}
                    </div>
                    {open && (
                      openSections.includes(item.key!) ? (
                        <ChevronDown className="h-4 w-4" />
                      ) : (
                        <ChevronRight className="h-4 w-4" />
                      )
                    )}
                  </CollapsibleTrigger>
                  {open && (
                    <CollapsibleContent className="pl-8 space-y-1">
                      {item.items?.map((subItem) => (
                        <NavLink
                          key={subItem.title}
                          to={subItem.url}
                          className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-colors text-sm ${
                            isActive(subItem.url) ? "bg-white/20 text-white" : ""
                          }`}
                        >
                          <subItem.icon className="h-4 w-4" />
                          <span>{subItem.title}</span>
                        </NavLink>
                      ))}
                    </CollapsibleContent>
                  )}
                </Collapsible>
              )}
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;