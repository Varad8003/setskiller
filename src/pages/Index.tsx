
import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Briefcase, GraduationCap } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  const handleRoleSelect = (role: string) => {
    setSelectedRole(role);
    setTimeout(() => {
      navigate(`/${role.toLowerCase()}/login`);
    }, 500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-secondary/20">
      {/* Navigation Bar */}
      <nav className="p-4 flex justify-end">
        <div className="space-x-4">
          <Button variant="outline" asChild>
            <Link to="/employee/login">Login</Link>
          </Button>
          <Button asChild>
            <Link to="/employee/signup">Sign Up</Link>
          </Button>
        </div>
      </nav>

{/* 
      <nav className="p-4 flex justify-end">
  <div className="space-x-4">
    <Button variant="outline" asChild>
      <Link to="/employee/login">Employee Login</Link>
    </Button>
    <Button asChild>
      <Link to="/recruiter/login">Recruiter Login</Link>
    </Button>
    <Button asChild>
      <Link to="/employee/signup">Employee Signup</Link>
    </Button>
    <Button asChild>
      <Link to="/recruiter/signup">Recruiter Signup</Link>
    </Button>
  </div>
</nav> */}


      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Welcome to SkillMatcher
          </h1>
          <p className="text-lg text-muted-foreground">
            Connect with opportunities that match your skills
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 w-full max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card
              className={`glass p-6 hover-scale cursor-pointer ${
                selectedRole === "Employee" ? "ring-2 ring-primary" : ""
              }`}
              onClick={() => handleRoleSelect("Employee")}
            >
              <div className="flex flex-col items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-xl font-semibold">I'm an Employee</h2>
                <p className="text-muted-foreground text-center">
                  Find jobs that match your skills and experience
                </p>
                <Button variant="outline" className="mt-4">
                  Get Started
                </Button>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card
              className={`glass p-6 hover-scale cursor-pointer ${
                selectedRole === "Recruiter" ? "ring-2 ring-primary" : ""
              }`}
              onClick={() => handleRoleSelect("Recruiter")}
            >
              <div className="flex flex-col items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-xl font-semibold">I'm a Recruiter</h2>
                <p className="text-muted-foreground text-center">
                  Post jobs and find the perfect candidates
                </p>
                <Button variant="outline" className="mt-4">
                  Get Started
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-sm text-muted-foreground"
        >
          By continuing, you agree to our Terms of Service and Privacy Policy
        </motion.p>
      </div>
    </div>
  );
};

export default Index;
