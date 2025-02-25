import jwt from "jsonwebtoken";

const userAuth = async (req,res,next) => {
    const {token} = req.cookies;
    // console.log(token);
    if(!token){
        return res.json({success: false,message:"Not Authorized, Login Again"});
    }
    try{
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);
        // console.log(tokenDecode);
        if(tokenDecode.id){
            req.body.userId = tokenDecode.id;
            // console.log(req.body)
        }
        else{
            return res.json({success: false,message:"Not Authorized, Login Again"});
        }
        // res.send("working");
        next();
    }catch(err){
        return res.json({success:false,message:err.message});
    }
}

export default userAuth;