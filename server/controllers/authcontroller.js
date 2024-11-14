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
    
    const token = jwt.sign({
        id : User.id,
    })

    res.status(201).json({
        msg: "you are successfully signed up",
        token
    });
};


const login = async (req, res) => {
    // login logic here
};

export { signup, login };

