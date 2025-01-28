import Transaction from "../models/transaction.js";
import User from "../models/user.js";
const transaction = async (req ,res)=>{
    try {
       
        let { amount, description ,type ,date }= req.body;
     
        const userId = req.user._id;


        if (!amount || !description || !date || !type) {
          return res.status(400).json({
            success: false,
            message: "Please fill all fields",
          });
        }
       
        const user = await User.findById(userId);
        console.log(user)


        if (!user) {
          return res.status(400).json({
            success: false,
            message: "User not found",
          });
        }

        const transactionData = await Transaction.create({
          userId,
            amount,
            description,
            type,
            date,
        });
           

        // user.transactions.push( transactionData);
        // await user.save();


        console.log(transactionData);
      return res.status(200).json({
        success: true,
        message: "Transaction Added Successfully",
      });
    } catch (err) {
      return res.status(401).json({
        success: false,
        messages: err.message,
      });
    }
}


export const getTransactions = async (req, res) =>{
try {
 

  if (!req.user) {
    return res.status(401).json({ error: 'Unauthorized' });
  } 

  const userId = req.user._id;
  const transactions= await Transaction.find({userId});
  const user = await User.findById(userId);
  const response = {
    transactions,
    username: user.username,
    Income: transactions
      .filter(transaction => transaction.type === 'income')
      .reduce((acc, transaction) => acc + transaction.amount, 0),
    Expense: transactions
      .filter(transaction => transaction.type === 'expense')
      .reduce((acc, transaction) => acc + transaction.amount, 0),
    email: user.email
  };
  res.status(200).json(response);
}
catch( error){
  console.error('error in fetching transactions :', error)
  res.status(400).json({   error : error.message})
}
}


export default transaction