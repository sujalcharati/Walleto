import user from "../models/user"

const signup = async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(404).json({
            msg: "enter all the fields"
        });
    }

    const User = await user.create({
        email,
        username,
        password
    });
    console.log(User);
    
    res.status(201).json({
        msg: "you are successfully signed up"
    });
};

export default signup;

