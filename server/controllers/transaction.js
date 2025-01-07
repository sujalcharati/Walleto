import Transaction from "../models/transaction.js";
import jwt from "jsonwebtoken";

const transaction = async (req ,res)=>{
    try {
       
        const { amount, description ,type ,date }= req.body;
       
        const userId = req.user._id; // Assuming user ID is available in req.user
        const transactionData = await Transaction.create({
          userId,
            amount,
            description,
            type,
            date,
            // user: userId
        });

        console.log(transactionData);
         const token = jwt.sign(
            { id: user.id },
            process.env.secret_key
         )
        // const token = req.headers.authorization.split(' ')[1];
        res.status(201).json(transactionData , token);
      } catch (error) {
        res.status(400).json(error);
      }
}

export default transaction