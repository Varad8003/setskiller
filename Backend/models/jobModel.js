import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    companyName: String,
    position: String,
    requiredSkills: [String], // Array of required skills
    location: String,
    openings: Number,
});

export default mongoose.model("Job", jobSchema);
