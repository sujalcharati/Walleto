import User from "../models/user";
import jwt from "jsonwebtoken";

const signup = async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(404).json({
            msg: "enter all the fields"
        });
    }

    const Userdata = await User.create({
        email,
        username,
        password,
        id
    });
    console.log(Userdata);
    
    const token = jwt.sign({
        id : Userdata.id,
    })

    res.status(201).json({
        msg: "you are successfully signed up",
        token
    });
};


const login = async (req, res) => {
 const {email, password } = req.body;
 const user = await User.findOne({
    where: {
        email,
        password
    }
 }) 
 if(!user){
    return res.status(403).json({
        msg :" user not found"
    });
 }
 const token = jwt.sign({
    id: user.id,
 })

 res.status(200).json({
    msg : " user succesfully logined ",
    token,
 })
};

export { signup, login };

