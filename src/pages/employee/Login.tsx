
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Axis3DIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;


import { useNavigate } from "react-router-dom";

const EmployeeLogin = () => {

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit  = async (event:React.FormEvent)=>{
    event.preventDefault();
    try {
      const response = await axios.post(`${VITE_BACKEND_URL}/api/user/login`,{email,password});
       if(response.status === 200){
        navigate('/employee/dashboard');
      }else{
        alert('Invalid credentials');
    }
    } catch (error) {
      alert("error occured");
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
            Employee Login
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="Enter your email"
                type="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                placeholder="Enter your password"
                type="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full">Sign In</Button>
          </form>
          <div className="mt-4 text-center text-sm">
            {/* <a href="#" className="text-primary hover:underline" onClick={} >
              Don't have an account? Sign up
            </a> */}
            <Link to="/employee/signup" className="text-primary hover:underline">
              Don't have an account? Sign up
            </Link>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

export default EmployeeLogin;
