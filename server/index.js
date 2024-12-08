import express from "express";
import cors from "cors";
import authRoutes from "./routes/authroutes.js"

import dotenv from 'dotenv';
import {connectDB} from './config/db.js';
const app = express();
app.use(express.json());
app.use(cors());




// import { signup } from '../controllers/authcontroller.js';

dotenv.config();
connectDB();

// app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// const MONGODB_URL = process.env.URL || 'your-default-mongodb-url';
// mongoose.connect(MONGODB_URL, { useUnifiedTopology: true });


// app.post('/signup', async (req, res) => {
//     try {
//         const user = await User.create(req.body);
//         res.json(user);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

app.use('/api/auth', authRoutes);




app.listen(4000, () => {
    console.log(`Server is running on port 4000`);
});

