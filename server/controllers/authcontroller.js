import User from "../models/user.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const saltRounds = 10; 

  const signup = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({
                msg: "enter all the fields"
            });
        }

        // using bcryptjs sync api to avoid native bindings issues
        const hashedPassword = bcrypt.hashSync(password, saltRounds);

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
         
      
        res.status(201).json({
            msg: "you are successfully signed up",
            token
        });
    } catch (error) {
        // Handle duplicate email error (MongoDB error code 11000)
        if (error.code === 11000) {
            return res.status(409).json({
                msg: "Email already registered. Please use a different email or login."
            });
        }
        
        // Handle other errors
        console.error("Signup error:", error);
        return res.status(500).json({
            msg: "Server error during signup. Please try again."
        });
    }
};


const login = async (req, res) => {
    try {
        const {email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                msg: "Please provide email and password"
            });
        }

        function verifyPassword(password, hashedPassword) {
            try {
                const matching = bcrypt.compareSync(password, hashedPassword);
                return matching;
            } catch (error) {
                throw new Error("Error verifying password");
            }
        }

        const user = await User.findOne({
            email
        });

        if (!user) {
            return res.status(403).json({
                msg: "user not found"
            });
        }

        const isPasswordValid = await verifyPassword(password, user.password);

        if (!isPasswordValid) {
            return res.status(403).json({
                msg: "invalid password"
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
    } catch (error) {
        console.error("Login error:", error);
        return res.status(500).json({
            msg: "Server error during login. Please try again."
        });
    }
};

export { signup, login };

