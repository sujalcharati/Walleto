
export default signup = async(req,res)=>{
    const {username,email,password} =req.body;

    if(!username | !email | !password){
        res.status(404).json({
            msg:"enter all the fields"
        })
    }
    
}

