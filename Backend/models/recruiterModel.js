import mongoose from "mongoose";

const recruiterSchema = new mongoose.Schema({
    companyName: String,
    name: String,
    email: String,
    password: String,
});

export default mongoose.model("Recruiter", recruiterSchema);
