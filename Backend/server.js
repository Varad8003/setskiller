import express from "express"
import cors from 'cors'
import 'dotenv/config'
import bodyparser from 'body-parser'
import dotenv from 'dotenv';
import connectDB from "./config/db.js";
import userRoutes from './routes/userRoutes.js'
import recruiterRoutes from './routes/recruiterRoutes.js'

const app = express();
dotenv.config();

connectDB();
app.use(cors());
app.use(express.json());
app.use(bodyparser.json());

app.use('/api/user', userRoutes);
app.use('/api/recruiter', recruiterRoutes);

app.get('/', (req, res) => {
    res.send('Hello World');
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});