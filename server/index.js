import express from "express";
import cors from "cors";
import authRoutes from "./routes/authroutes.js"

import dotenv from 'dotenv';
import {connectDB} from './config/db.js';
const app = express();
app.use(express.json());
app.use(cors());


dotenv.config();
connectDB();

app.use('/api/auth', authRoutes);

app.get('/',(req,res)=>{
    const dar ='hi there '
    res.status(200).send(dar);
    console.log(' the server is running btw..')
})


app.listen(4000, () => {
    console.log(`Server is running on port 4000`);
});

