import user from "../models/user"

const signup = async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(404).json({
            msg: "enter all the fields"
        });
    }

    await user.create({
        email,
        username,
        password
    });

    res.status(201).json({
        msg: "you are successfully signed up"
    });
};

export default signup;

