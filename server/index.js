import express from "express";
import {connectDB} from './config/db.js';
import dotenv from 'dotenv';
import cors from "cors"
import authRoutes from "./routes/authroutes.js"
dotenv.config();
connectDB();
const app = express();
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true 
}));
app.use('/api/auth', authRoutes);
app.get('/', (req, res) => {
    res.send('Welcome to walleto ');
});

app.listen(4000, () => {
    console.log('the server is ready for the start');
});
