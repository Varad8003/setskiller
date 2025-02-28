
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft } from "lucide-react";
import { Link,useNavigate } from "react-router-dom";
import { set } from "date-fns";
import { useState } from "react";
import axios from "axios";
const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;


const EmployeeSignup = () => {
  const navigate  = useNavigate();

  const [formData , setFormData] = useState({
    name:"",
    email:"",
    password:""
  })
  
  const [error,setError] = useState(null);

  const handleChange = (e) => {
    setFormData({...formData,[e.target.id]:e.target.value})
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    setError(null);
    try {
      const response = await axios.post(`${VITE_BACKEND_URL}/api/user/register`,formData);
      if(response.status === 200 || response.status === 201){
        navigate('/employee/dashboard');
      }else{
        setError('Invalid credentials');
      }
    } catch(err){
      setError(err.response?.data?.message || "An error occured");
    }
  }

 
 
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-background to-secondary/20 p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="w-full max-w-md"
      >
        <Link
          to="/"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to home
        </Link>

        <Card className="glass p-6">
          <h2 className="text-2xl font-semibold text-center mb-6">
            Create Employee Account
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                placeholder="Enter your full name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="Enter your email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                placeholder="Create a password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <Button className="w-full" type="submit">Sign Up</Button>
          </form>
          <div className="mt-4 text-center text-sm">
            <Link to="/employee/login" className="text-primary hover:underline">
              Already have an account? Sign in
            </Link>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

export default EmployeeSignup;
