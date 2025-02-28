import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({
  recruiterId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  employeeType: { type: String, required: true }, // Full-time, Part-time
  location: { type: String, required: true },
  jobDescription: { type: String, required: true },
  requiredSkills: [{ type: String, required: true }],
  createdAt: { type: Date, default: Date.now }
});

const Job = mongoose.model('Job', jobSchema);
export default Job;
