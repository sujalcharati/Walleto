import express from "express";
import mongoose from "mongoose";
import cors from "cors"
import User from "./models/user.js"; // Ensure this path is correct and the file exists
import dotenv from 'dotenv';

const app = express();
app.use(express.json());
app.use(cors());



// import {connectDB} from './config/db.js';
// import { signup } from '../controllers/authcontroller.js';

// import authRoutes from "./routes/authroutes.js"
dotenv.config();

// connectDB();

// app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }));
const MONGODB_URL = process.env.URL || 'your-default-mongodb-url';
mongoose.connect(MONGODB_URL, { useUnifiedTopology: true });


app.post('/signup', async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});





app.listen(4000, () => {
    console.log(`Server is running on port 4000`);
});

