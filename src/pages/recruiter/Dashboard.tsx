
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import {
  Users,
  Briefcase,
  Eye,
  ChevronRight,
  Search,
  PlusCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Dashboard = () => {
  // Placeholder data
  const stats = [
    { icon: Briefcase, label: "Active Job Posts", value: "8" },
    { icon: Users, label: "Total Applications", value: "124" },
    { icon: Eye, label: "Profile Views", value: "45" },
  ];

  const recentApplications = [
    {
      position: "Senior Frontend Developer",
      applicant: "John Doe",
      status: "Shortlisted",
      date: "2024-02-20",
      matchScore: "95%",
    },
    {
      position: "React Developer",
      applicant: "Jane Smith",
      status: "Under Review",
      date: "2024-02-19",
      matchScore: "88%",
    },
    {
      position: "Full Stack Engineer",
      applicant: "Mike Johnson",
      status: "New",
      date: "2024-02-18",
      matchScore: "92%",
    },
  ];

 
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold">Welcome back, Recruiter!</h1>
          <p className="text-muted-foreground">
            Here's an overview of your recruitment activities
          </p>
        </div>
        <div className="flex gap-4">
          <Button  >
            
            <PlusCircle className="mr-2 h-4 w-4" />
            Post New Job
            
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-3">
        {stats.map((stat) => (
          <Card
            key={stat.label}
            className="glass p-6 hover-scale"
          >
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-primary/10 p-3">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <h3 className="text-2xl font-bold">{stat.value}</h3>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Recent Applications */}
      <Card className="glass">
        <div className="flex items-center justify-between border-b border-border/50 p-6">
          <h2 className="text-lg font-semibold">Recent Applications</h2>
          <Button variant="ghost" size="sm">
            View All
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <div className="divide-y divide-border/50">
          {recentApplications.map((application) => (
            <div
              key={`${application.position}-${application.applicant}`}
              className="flex items-center justify-between p-6"
            >
              <div>
                <h3 className="font-medium">{application.position}</h3>
                <p className="text-sm text-muted-foreground">
                  {application.applicant}
                </p>
              </div>
              <div className="text-right">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
                  {application.status}
                </span>
                <p className="mt-1 text-sm font-medium text-emerald-600">
                  Match: {application.matchScore}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </motion.div>
  );
};

export default Dashboard;
