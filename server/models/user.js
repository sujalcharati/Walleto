import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true // Removes whitespace from both ends of a string
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+\@.+\..+/, 'Please fill a valid email address'] // Basic email validation
    },
    password: {
        type: String,
        required: true,
        minlength: 6 // Ensures password is at least 6 characters long
    }
});

const User = mongoose.model('User', userSchema);


const transactionSchema = new mongoose.Schema({
    
        userId: {
             type: String, 
             required: true
             },

        type: { 
            type: String, 
            enum: ['income', 'expense'], required: true 
        },
        amount: 
             { type: Number, 
                required: true 
            },

        description: {
             type: String 
             },
        date: { 
             type: Date,
         default: Date.now
         },
     
      
      
})
const Transaction = mongoose.model('Transaction', transactionSchema);
export { Transaction, User };
