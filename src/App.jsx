import { useState } from "react";
import Sidebar from "./components/layout/Sidebar";
import Topbar from "./components/layout/Topbar";
import Dashboard from "./pages/Dashboard";

export default function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-surface lg:flex">
      <Sidebar
        activeKey="dashboard"
        isOpen={isSidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="flex-1 min-w-0">
        <Topbar title="Overview" onMenuClick={() => setSidebarOpen(true)} />
        <Dashboard />
      </div>
    </div>
  );
}
