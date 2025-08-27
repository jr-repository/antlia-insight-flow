import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  Area,
  AreaChart
} from "recharts";
import { 
  Package, 
  Truck, 
  TrendingUp, 
  AlertTriangle, 
  Users, 
  DollarSign,
  ShoppingCart,
  Clock
} from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Inventory",
      value: "12,450",
      icon: Package,
      change: "+12.5%",
      color: "text-primary"
    },
    {
      title: "Active Orders",
      value: "842",
      icon: ShoppingCart,
      change: "+8.2%",
      color: "text-primary-light"
    },
    {
      title: "In Transit",
      value: "156",
      icon: Truck,
      change: "-2.4%",
      color: "text-primary-purple"
    },
    {
      title: "Revenue",
      value: "$284.5K",
      icon: DollarSign,
      change: "+15.3%",
      color: "text-green-600"
    }
  ];

  const inventoryData = [
    { name: "Jan", value: 4000 },
    { name: "Feb", value: 3000 },
    { name: "Mar", value: 5000 },
    { name: "Apr", value: 4500 },
    { name: "May", value: 6000 },
    { name: "Jun", value: 5500 }
  ];

  const salesData = [
    { name: "Mon", sales: 1200, orders: 65 },
    { name: "Tue", sales: 1900, orders: 85 },
    { name: "Wed", sales: 800, orders: 45 },
    { name: "Thu", sales: 1600, orders: 75 },
    { name: "Fri", sales: 2200, orders: 95 },
    { name: "Sat", sales: 1800, orders: 80 },
    { name: "Sun", sales: 1400, orders: 70 }
  ];

  const categoryData = [
    { name: "Electronics", value: 35, color: "#1e3a8a" },
    { name: "Clothing", value: 25, color: "#3b82f6" },
    { name: "Home & Garden", value: 20, color: "#7c3aed" },
    { name: "Sports", value: 15, color: "#8b5cf6" },
    { name: "Others", value: 5, color: "#a78bfa" }
  ];

  const recentOrders = [
    { id: "ORD-001", customer: "PT. Global Tech", product: "Laptop Dell", quantity: 25, status: "Processing", value: "$24,500" },
    { id: "ORD-002", customer: "CV. Maju Jaya", product: "Office Chair", quantity: 50, status: "Shipped", value: "$12,750" },
    { id: "ORD-003", customer: "UD. Sukses Mandiri", product: "Printer HP", quantity: 15, status: "Delivered", value: "$8,250" },
    { id: "ORD-004", customer: "PT. Inovasi Digital", product: "Monitor Samsung", quantity: 30, status: "Processing", value: "$18,600" },
    { id: "ORD-005", customer: "CV. Berkah Teknologi", product: "Keyboard Logitech", quantity: 100, status: "Pending", value: "$5,500" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Delivered": return "bg-green-100 text-green-800";
      case "Shipped": return "bg-blue-100 text-blue-800";
      case "Processing": return "bg-yellow-100 text-yellow-800";
      case "Pending": return "bg-gray-100 text-gray-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="p-6 space-y-6 bg-gradient-subtle min-h-screen">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="shadow-card border-primary/10">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">{stat.title}</p>
                  <p className="text-2xl font-bold text-primary">{stat.value}</p>
                  <p className={`text-sm ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                    {stat.change} from last month
                  </p>
                </div>
                <div className={`p-3 rounded-lg bg-gradient-primary`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Inventory Levels */}
        <Card className="shadow-card border-primary/10">
          <CardHeader>
            <CardTitle className="text-primary">Inventory Levels</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={inventoryData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="name" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip />
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#3b82f6" 
                  fill="url(#colorGradient)" 
                />
                <defs>
                  <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1}/>
                  </linearGradient>
                </defs>
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Sales Performance */}
        <Card className="shadow-card border-primary/10">
          <CardHeader>
            <CardTitle className="text-primary">Weekly Sales Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="name" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip />
                <Bar dataKey="sales" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Second Row Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Product Categories */}
        <Card className="shadow-card border-primary/10">
          <CardHeader>
            <CardTitle className="text-primary">Product Categories</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="space-y-2 mt-4">
              {categoryData.map((item, index) => (
                <div key={index} className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: item.color }}
                    />
                    <span>{item.name}</span>
                  </div>
                  <span className="font-medium">{item.value}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Stock Alerts */}
        <Card className="shadow-card border-primary/10">
          <CardHeader>
            <CardTitle className="text-primary flex items-center">
              <AlertTriangle className="mr-2 h-5 w-5" />
              Stock Alerts
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-sm">Laptop Dell Inspiron</p>
                  <p className="text-xs text-muted-foreground">Stock: 5 units</p>
                </div>
                <Badge variant="destructive">Low Stock</Badge>
              </div>
              <Progress value={15} className="h-2" />
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-sm">Office Chair Premium</p>
                  <p className="text-xs text-muted-foreground">Stock: 8 units</p>
                </div>
                <Badge variant="secondary">Medium</Badge>
              </div>
              <Progress value={35} className="h-2" />
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-sm">Printer Canon</p>
                  <p className="text-xs text-muted-foreground">Stock: 0 units</p>
                </div>
                <Badge variant="destructive">Out of Stock</Badge>
              </div>
              <Progress value={0} className="h-2" />
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="shadow-card border-primary/10">
          <CardHeader>
            <CardTitle className="text-primary">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <button className="w-full p-3 bg-gradient-primary text-white rounded-lg hover:bg-gradient-secondary transition-all">
              <Package className="mx-auto h-5 w-5 mb-1" />
              <span className="text-sm font-medium">Add Product</span>
            </button>
            <button className="w-full p-3 bg-gradient-secondary text-white rounded-lg hover:bg-gradient-primary transition-all">
              <ShoppingCart className="mx-auto h-5 w-5 mb-1" />
              <span className="text-sm font-medium">New Order</span>
            </button>
            <button className="w-full p-3 bg-primary-purple text-white rounded-lg hover:bg-primary-purple/90 transition-all">
              <Truck className="mx-auto h-5 w-5 mb-1" />
              <span className="text-sm font-medium">Ship Order</span>
            </button>
          </CardContent>
        </Card>
      </div>

      {/* Recent Orders Table */}
      <Card className="shadow-card border-primary/10">
        <CardHeader>
          <CardTitle className="text-primary">Recent Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="border-primary/20">
                <TableHead className="font-semibold text-primary">Order ID</TableHead>
                <TableHead className="font-semibold text-primary">Customer</TableHead>
                <TableHead className="font-semibold text-primary">Product</TableHead>
                <TableHead className="font-semibold text-primary">Quantity</TableHead>
                <TableHead className="font-semibold text-primary">Status</TableHead>
                <TableHead className="font-semibold text-primary">Value</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentOrders.map((order) => (
                <TableRow key={order.id} className="border-primary/10 hover:bg-primary/5">
                  <TableCell className="font-medium border-r border-primary/10">{order.id}</TableCell>
                  <TableCell className="border-r border-primary/10">{order.customer}</TableCell>
                  <TableCell className="border-r border-primary/10">{order.product}</TableCell>
                  <TableCell className="border-r border-primary/10">{order.quantity}</TableCell>
                  <TableCell className="border-r border-primary/10">
                    <Badge className={getStatusColor(order.status)}>
                      {order.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="font-semibold text-primary">{order.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;