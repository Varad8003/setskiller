
import { motion } from "framer-motion";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Briefcase } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Jobs = () => {
  const { toast } = useToast();
  const [isPosting, setIsPosting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Success",
      description: "Job posted successfully!",
    });
    setIsPosting(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Job Postings</h1>
          <p className="text-muted-foreground">Manage and create job postings</p>
        </div>
        <Button onClick={() => setIsPosting(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Post New Job
        </Button>
      </div>

      {isPosting ? (
        <Card className="glass p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Job Title</Label>
              <Input
                id="title"
                placeholder="e.g., Senior Frontend Developer"
                required
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  placeholder="e.g., Remote, New York, NY"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="type">Employment Type</Label>
                <Input
                  id="type"
                  placeholder="e.g., Full-time, Contract"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Job Description</Label>
              <Textarea
                id="description"
                placeholder="Enter detailed job description..."
                className="min-h-[200px]"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="requirements">Requirements</Label>
              <Textarea
                id="requirements"
                placeholder="Enter job requirements..."
                className="min-h-[150px]"
                required
              />
            </div>

            <div className="flex justify-end gap-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsPosting(false)}
              >
                Cancel
              </Button>
              <Button type="submit">Post Job</Button>
            </div>
          </form>
        </Card>
      ) : (
        <Card className="glass p-6">
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <Briefcase className="h-12 w-12 text-muted-foreground" />
            <h2 className="mt-4 text-xl font-semibold">No Jobs Posted Yet</h2>
            <p className="mt-2 text-muted-foreground">
              Create your first job posting to start receiving applications
            </p>
            <Button onClick={() => setIsPosting(true)} className="mt-6">
              <Plus className="mr-2 h-4 w-4" />
              Post New Job
            </Button>
          </div>
        </Card>
      )}
    </motion.div>
  );
};

export default Jobs;
