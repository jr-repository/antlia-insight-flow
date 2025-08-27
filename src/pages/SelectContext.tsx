import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Building2, Warehouse, ArrowRight } from "lucide-react";

const SelectContext = () => {
  const [selectedCompany, setSelectedCompany] = useState("");
  const [selectedWarehouse, setSelectedWarehouse] = useState("");
  const navigate = useNavigate();

  const companies = [
    { id: "comp-1", name: "Antlia Corporation" },
    { id: "comp-2", name: "Global Supply Co." },
    { id: "comp-3", name: "Tech Logistics Ltd." }
  ];

  const warehouses = [
    { id: "wh-1", name: "Jakarta Main Warehouse" },
    { id: "wh-2", name: "Surabaya Distribution Center" },
    { id: "wh-3", name: "Bandung Storage Facility" }
  ];

  const handleContinue = () => {
    if (selectedCompany && selectedWarehouse) {
      localStorage.setItem("selectedCompany", selectedCompany);
      localStorage.setItem("selectedWarehouse", selectedWarehouse);
      navigate("/dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center p-8">
      <Card className="w-full max-w-md shadow-card">
        <CardHeader className="text-center">
          <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-4">
            <Building2 className="h-8 w-8 text-white" />
          </div>
          <CardTitle className="text-2xl font-bold text-primary">Select Context</CardTitle>
          <p className="text-muted-foreground">Choose your company and warehouse</p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-primary">Company</label>
            <Select value={selectedCompany} onValueChange={setSelectedCompany}>
              <SelectTrigger className="border-primary/20">
                <SelectValue placeholder="Select company" />
              </SelectTrigger>
              <SelectContent>
                {companies.map((company) => (
                  <SelectItem key={company.id} value={company.name}>
                    {company.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-primary">Warehouse</label>
            <Select value={selectedWarehouse} onValueChange={setSelectedWarehouse}>
              <SelectTrigger className="border-primary/20">
                <SelectValue placeholder="Select warehouse" />
              </SelectTrigger>
              <SelectContent>
                {warehouses.map((warehouse) => (
                  <SelectItem key={warehouse.id} value={warehouse.name}>
                    {warehouse.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button
            onClick={handleContinue}
            disabled={!selectedCompany || !selectedWarehouse}
            className="w-full bg-gradient-primary hover:bg-gradient-secondary text-white font-semibold"
          >
            Continue to Dashboard
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default SelectContext;