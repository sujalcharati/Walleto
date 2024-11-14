import express from "express";
const router =express.Router();
import { signup, login } from '../controllers/authcontroller.js';

router.post('/signup',signup);
router.post('/login',login);
export default router;