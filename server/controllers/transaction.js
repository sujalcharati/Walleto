import Transaction from "../models/transaction";

const transaction = async (req ,res)=>{
    try {
        // const transaction = new Transaction(req.body);
        const { amount, description ,type ,date }= req.body;
       
        const userId = req.user._id; // Assuming user ID is available in req.user
        const transactionData = await Transaction.create({
            amount,
            description,
            type,
            date,
            user: userId
        });

        console.log(transactionData);
         const token = jwt.sign(
            { id: user.id },
            process.env.secret_key
         )
        // const token = req.headers.authorization.split(' ')[1];
        res.status(201).send(transactionData , token);
      } catch (error) {
        res.status(400).send(error);
      }
}
