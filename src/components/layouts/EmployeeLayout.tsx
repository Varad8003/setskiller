
import { useState } from "react";
import { motion } from "framer-motion";
import { Link, Outlet } from "react-router-dom";
import {
  LayoutGrid,
  User,
  Briefcase,
  Settings,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const EmployeeLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const menuItems = [
    { icon: LayoutGrid, label: "Dashboard", path: "/employee/dashboard" },
    { icon: User, label: "Profile", path: "/employee/profile" },
    { icon: Briefcase, label: "My Applications", path: "/employee/applications" },
    { icon: Settings, label: "Settings", path: "/employee/settings" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* Mobile Sidebar Toggle */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 md:hidden"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? (
          <X className="h-5 w-5" />
        ) : (
          <Menu className="h-5 w-5" />
        )}
      </Button>

      {/* Sidebar */}
      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: isSidebarOpen ? 0 : -300 }}
        transition={{ duration: 0.3 }}
        className={cn(
          "fixed left-0 top-0 z-40 h-screen w-64 glass",
          !isSidebarOpen && "hidden md:block md:translate-x-0"
        )}
      >
        <div className="flex h-full flex-col gap-2">
          <div className="flex h-16 items-center border-b border-border/50 px-6">
            <h2 className="text-lg font-semibold">SkillMatcher</h2>
          </div>

          <nav className="flex-1 space-y-1 px-3 py-4">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="border-t border-border/50 p-4">
            <Button variant="ghost" className="w-full justify-start gap-2">
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </motion.aside>

      {/* Main Content */}
      <main
        className={cn(
          "min-h-screen transition-all duration-300",
          isSidebarOpen ? "md:pl-64" : ""
        )}
      >
        <div className="container py-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default EmployeeLayout;
