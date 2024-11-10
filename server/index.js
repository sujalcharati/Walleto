import express from "express";
const app = express();
app.use(express.json());


app.post('/signup',(req,res)=>{
    const name =req.body.name;
    const password =req.body.password;
    console.log(res.json({
        msg: `the ${name} has password ${password} in server`
    }))
})
app.listen(4000, () => {
    console.log('the server is ready for the start');
});
