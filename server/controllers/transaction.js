import Transaction from "../models/transaction.js";
import User from "../models/user.js";
const transaction = async (req ,res)=>{
    try {
       
        const { amount, description ,type ,date }= req.body;
       
        const userId = req.user._id; // Assuming user ID is available in req.user


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
            // user: userId
        });
           

        user.transactions.push( transactionData);
        user.save();


        // console.log(transactionData);
        //  const token = jwt.sign(
        //     { id: user.id },
        //     process.env.secret_key
        //  )
        // const token = req.headers.authorization.split(' ')[1];
      //   res.status(201).json(transactionData , token);
      // } catch (error) {
      //   res.status(400).json(error);
      // }
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