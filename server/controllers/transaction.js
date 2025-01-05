import Transaction from "../models/transaction";

const transaction = async (req ,res)=>{
    try {
        const transaction = new Transaction(req.body);
        await transaction.save();
        res.status(201).send(transaction);
      } catch (error) {
        res.status(400).send(error);
      }
}
