import express from "express";
import mongoose from "mongoose";
import cors from "cors"
import User from "./models/user.js"; // Ensure this path is correct and the file exists
const app = express();
app.use(express.json());
app.use(cors());


mongoose.connect(URL);

// import {connectDB} from './config/db.js';
import dotenv from 'dotenv';
// import { signup } from '../controllers/authcontroller.js';

// import authRoutes from "./routes/authroutes.js"
dotenv.config();

// connectDB();

// app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }));


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

