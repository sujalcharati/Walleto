import express from "express";
import {connectDB} from './config/db.js';
import dotenv from 'dotenv';
import cors from "cors"
dotenv.config();
connectDB();
const app = express();
app.use(express.json());
app.use(cors());


app.post('/signup',(req,res)=>{
    const name =req.body.name;
    const password =req.body.password;
    res.json({
        msg: `the ${name} has password ${password} in server`
    });
})
app.listen(4000, () => {
    console.log('the server is ready for the start');
});
