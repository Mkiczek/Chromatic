import {
    Card,
    CardContent,
    CardHeader,
    CardTitle
  } from "@/components/ui/card";
  import { Button } from "@/components/ui/button";
  import { Input } from "@/components/ui/input";
  import { Badge } from "@/components/ui/badge";
  import { ScrollArea } from "@/components/ui/scroll-area";
  import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
  import { Bell, Phone, AlertCircle, Menu, X } from "lucide-react";
  import { useState } from "react";
  
  export default function UnderwriterDashboard() {
    const [tabs, setTabs] = useState([
      { id: "dashboard", label: "Dashboard" },
      { id: "claims", label: "Claims" },
      { id: "policies", label: "Policies" },
      { id: "actions", label: "Actions" }
    ]);
    const [activeTab, setActiveTab] = useState("dashboard");
  
    const closeTab = (id: string) => {
      const updated = tabs.filter((tab) => tab.id !== id);
      setTabs(updated);
      if (activeTab === id && updated.length) {
        setActiveTab(updated[0].id);
      }
    };
  
    const renderTabContent = () => {
      switch (activeTab) {
        case "dashboard":
          return <p className="text-sm">Welcome to the Dashboard tab.</p>;
        case "claims":
          return <p className="text-sm">Claims related data and workflows.</p>;
        case "policies":
          return <p className="text-sm">All policy-related information shown here.</p>;
        case "actions":
          return <p className="text-sm">Available user actions and recommendations.</p>;
        default:
          return <p className="text-sm">Select a tab to view content.</p>;
      }
    };
  
    return (
      <div className="flex flex-col min-h-screen">
        {/* Top Navigation Bar */}
        <header className="bg-white shadow px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Menu className="h-6 w-6 text-gray-600" />
            <h1 className="text-xl font-semibold">Service Excellence</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-sm">Quotes</Button>
            <Button variant="ghost" className="text-sm">Integrations</Button>
            <Button variant="ghost" className="text-sm">Recent</Button>
            <Button variant="ghost" className="text-sm">Omniscripts</Button>
            <Button variant="ghost" className="text-sm">Decisions</Button>
            <Button variant="ghost" className="text-sm">More</Button>
            <Bell className="h-5 w-5 text-gray-600" />
            <Avatar>
              <AvatarImage src="/avatar.png" />
              <AvatarFallback>EN</AvatarFallback>
            </Avatar>
          </div>
        </header>
  
        {/* Full-Width App Tabs */}
        <div className="bg-gray-100 border-b px-4 py-2 overflow-x-auto whitespace-nowrap">
          <div className="inline-flex space-x-2">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className={`flex items-center bg-white rounded px-3 py-1 text-sm font-medium border shadow-sm cursor-pointer ${activeTab === tab.id ? "border-blue-500 text-blue-600" : "border-gray-300 text-gray-600"}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span>{tab.label}</span>
                {tab.id !== "dashboard" && (
                  <X
                    className="ml-2 h-4 w-4 hover:text-red-500"
                    onClick={(e) => {
                      e.stopPropagation();
                      closeTab(tab.id);
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
  
        {/* Tab Content Area */}
        <div className="p-4">
          <Card>
            <CardContent>{renderTabContent()}</CardContent>
          </Card>
        </div>
  
        {/* Footer (Phone) */}
        <footer className="col-span-4 mt-auto">
          <Card>
            <CardContent className="flex justify-end items-center py-2 px-4 text-sm text-muted-foreground">
              <Phone className="mr-2 h-4 w-4" /> Phone
            </CardContent>
          </Card>
        </footer>
      </div>
    );
  }
  