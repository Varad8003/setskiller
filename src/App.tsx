
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import EmployeeLogin from "./pages/employee/Login";
import EmployeeSignup from "./pages/employee/Signup";
import RecruiterLogin from "./pages/recruiter/Login";
import RecruiterSignup from "./pages/recruiter/Signup";
import EmployeeLayout from "./components/layouts/EmployeeLayout";
import EmployeeDashboard from "./pages/employee/Dashboard";
import EmployeeProfile from "./pages/employee/Profile";
import RecruiterLayout from "./components/layouts/RecruiterLayout";
import RecruiterDashboard from "./pages/recruiter/Dashboard";
import RecruiterJobs from "./pages/recruiter/Jobs";

const queryClient = new QueryClient();

const App = () => (
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/employee/login" element={<EmployeeLogin />} />
            <Route path="/employee/signup" element={<EmployeeSignup />} />
            <Route path="/recruiter/login" element={<RecruiterLogin />} />
            <Route path="/recruiter/signup" element={<RecruiterSignup />} />
            <Route path="/employee" element={<EmployeeLayout />}>
              <Route path="dashboard" element={<EmployeeDashboard />} />
              <Route path="profile" element={<EmployeeProfile />} />
            </Route>
            <Route path="/recruiter" element={<RecruiterLayout />}>
              <Route path="dashboard" element={<RecruiterDashboard />} />
              <Route path="jobs" element={<RecruiterJobs />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </TooltipProvider>
    </QueryClientProvider>
  </BrowserRouter>
);

export default App;
