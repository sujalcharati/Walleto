import user from "../models/user"
export default signup = async(req,res)=>{
    const {username,email,password} =req.body;

    if(!username | !email | !password){
        res.status(404).json({
            msg:"enter all the fields"
        })
    }
     await user.create({
        email,
        username,
        password
    });

    // await user.save();
    res.status(201).json({
        msg:"you are succesfully signed up"
    })
}

