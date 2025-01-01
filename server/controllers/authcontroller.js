import User from "../models/user.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const saltRounds = 10; 

  const signup = async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(404).json({
            msg: "enter all the fields"
        });
    }

    async function hashPassword(password) {
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        return hashedPassword;
    }

    const hashedPassword = await hashPassword(password);

    const Userdata = await User.create({
        email,
        username,
        password: hashedPassword
    });
    console.log(Userdata);
    
    const token = jwt.sign(
        { id: Userdata.id },
        process.env.secret_key
    )
     
    // if (token){
    //     alert(' You are succesfully signed up !')
    // }

    res.status(201).json({
        msg: "you are successfully signed up",
        token
    });
};


const login = async (req, res) => {
 const {email, password } = req.body;
const user = await User.findOne({
    email,
    password
});

 if(!user){
    return res.status(403).json({
        msg :" user not found"
    });
 }
 const token = jwt.sign(
    { id: user.id },
    process.env.secret_key
 )

 res.status(200).json({
    msg : " user succesfully logined ",
    token,
 })
};

export { signup, login };

