
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import {
  Briefcase,
  Clock,
  Award,
  ChevronRight,
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Dashboard = () => {
  // Placeholder data
  const stats = [
    { icon: Briefcase, label: "Total Applications", value: "12" },
    { icon: Clock, label: "Pending Review", value: "5" },
    { icon: Award, label: "Interviews", value: "3" },
  ];

  const recentJobs = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Corp",
      status: "Applied",
      date: "2024-02-20",
    },
    {
      title: "React Developer",
      company: "Innovation Labs",
      status: "In Review",
      date: "2024-02-19",
    },
    {
      title: "Full Stack Engineer",
      company: "Digital Solutions",
      status: "Interview Scheduled",
      date: "2024-02-18",
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
          <h1 className="text-3xl font-bold">Welcome back, John!</h1>
          <p className="text-muted-foreground">
            Here's what's happening with your job applications
          </p>
        </div>
        <div className="flex gap-4">
          <Input
            placeholder="Search jobs..."
            className="max-w-[300px]"
            type="search"
          />
          <Button>
            <Search className="mr-2 h-4 w-4" />
            Find Jobs
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
          {recentJobs.map((job) => (
            <div
              key={`${job.title}-${job.company}`}
              className="flex items-center justify-between p-6"
            >
              <div>
                <h3 className="font-medium">{job.title}</h3>
                <p className="text-sm text-muted-foreground">{job.company}</p>
              </div>
              <div className="text-right">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
                  {job.status}
                </span>
                <p className="mt-1 text-sm text-muted-foreground">{job.date}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </motion.div>
  );
};

export default Dashboard;
