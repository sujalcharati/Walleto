import express from "express";
import transaction from "../controllers/transaction.js";
import { getTransactions } from "../controllers/transaction.js";

import { authenticateUser } from "../middleware/authMiddleware.js"; 

const router = express.Router();
router.post('/transaction',authenticateUser ,transaction);
router.get('/getTransactions',authenticateUser ,getTransactions)

export default router;
