import express from "express";
import {connectDB} from './config/db.js';
import dotenv from 'dotenv';
// import authRoutes from "./routes/authroutes.js"
dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// app.use('/api/auth', authRoutes);
// app.get('/', (req, res) => {
//     res.send('Welcome to walleto ');
// });

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
