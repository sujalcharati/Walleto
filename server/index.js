import express from "express";
import cors from "cors";
import authRoutes from "./routes/authroutes.js"
import dotenv from 'dotenv';
import {connectDB} from './config/db.js';
import transactionRoutes from "./routes/transaction.js";
const app = express();
app.use(express.json());
// app.use(cors());
   app.use(cors({ origin: ["https://walleto.vercel.app","http://localhost:3000","http://localhost:5173","http://127.0.0.1:5173"],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true ,
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
}));


dotenv.config();
connectDB();

app.use('/api/auth', authRoutes);
app.use('/api/transaction', transactionRoutes);

app.get('/',(req,res)=>{
    const dar ='hi there '
    res.status(200).send(dar);
    console.log(' the server is running btw..')
})


app.listen(4000, () => {
    console.log(`Server is running on port 4000`);
});

