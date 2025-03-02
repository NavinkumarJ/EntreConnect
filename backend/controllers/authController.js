import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";
import transporter from "../config/nodemailer.js";
<<<<<<< HEAD
=======
import { EMAIL_VERIFY_TEMPLATE,PASSWORD_RESET_TEMPLATE,WELCOME_TEMPLATE } from "../config/emailTemplates.js";
>>>>>>> a1f9d79 (Updated Code)

export const register = async (req,res) => {

    const {name,email,password}=req.body;
    // console.log("",name,email,password);
    if(!name || !email || !password) {
        return res.json({success:false, message:"Missing Details"});
    }

    try{
        const exisitingUser = await userModel.findOne({email});
        // console.log("",exisitingUser);
        if(exisitingUser) {      
            return res.json({success:false, message:"User already exists"});    
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new userModel({name,email,password:hashedPassword});
        await user.save();

        const token = jwt.sign({id: user._id},process.env.JWT_SECRET,{expiresIn:'7d'});

        res.cookie("token",token,{
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production'? 'none' : 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });

        // Email Config
        const mailOptions = {
            from: process.env.SENDER_EMAIL,
            to: email,
            subject: 'Welcome to EntreConnect',
<<<<<<< HEAD
            text: `Welcome to EntreConnect website. Your account has
            been created with email id: ${email}`
=======
            // text: `Welcome to EntreConnect website. Your account has been created with email id: ${email}`
            html: WELCOME_TEMPLATE.replace("{{name}}",name),
>>>>>>> a1f9d79 (Updated Code)
        }

        const ans= await transporter.sendMail(mailOptions);
        // console.log(ans);
        return res.json({success:true,message:"User Created successfully"});

    }catch(err){
        return res.json({success:false, message:err.message});
    }
   
}

export const login = async (req, res) => {
    const {email,password} = req.body;

    if(!email || !password) {
        return res.json({success:false, message: 'Email and password are required'})
    }
    try{
        const user = await userModel.findOne({email});
        if(!user) {
            return res.json({success:false,message: "Invalid email"});
        }
        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch){
            return res.json({success:false,message:'Invalid password'});
        }
        const token = jwt.sign({id: user._id},process.env.JWT_SECRET,{expiresIn:'7d'});

        res.cookie("token",token,{
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production'? 'none' : 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });

        return res.json({success:true,message:"User logged in successfully"});
    }catch(err){
        return res.json({success:false, message:err.message});
    }
}

export const logout = async (req,res)=>{
    try{
        res.clearCookie('token',{
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production'? 'none' : 'strict',
        })
        return res.json({success:true,message:"User logged out successfully"});
    }catch(err){
        return res.json({success:false, message:err.message});
    }
}

export const sendVerifyOtp = async (req,res)=>{
    try{   
<<<<<<< HEAD
        const {userId,email} = req.body;
        // console.log(userId);
        const user = await userModel.findById(userId);
        // console.log(req.body,user.verifyOtp);
        console.log("",user);
=======
        const {userId} = req.body;

        const user = await userModel.findById(userId);
        const email = user.email;

>>>>>>> a1f9d79 (Updated Code)
        if(user.isAccountVerified){
            return res.json({success:false,message:"Account Already verified"});
        }

        const otp = String(Math.floor(100000+ Math.random() * 900000));

        user.verifyOtp = otp;
        user.verifyOtpExpireAt = Date.now() + 24 * 60 * 1000;

        await user.save();
<<<<<<< HEAD

=======
        
>>>>>>> a1f9d79 (Updated Code)
        const mailOptions = {
            from: process.env.SENDER_EMAIL,
            to: email,
            subject: 'Account Verification OTP',
<<<<<<< HEAD
            from: process.env.SENDER_EMAIL,
            to: email,
            subject: 'Welcome to EntreConnect',
            text: `Your OTP is ${otp}. Verify your account using this OTP.`
        }
        await transporter.sendMail(mailOptions); 

=======
            // text: `Your OTP is ${otp}. Verify your account using this OTP.`,
            html: EMAIL_VERIFY_TEMPLATE.replace("{{otp}}",otp)
        }
        const ans=await transporter.sendMail(mailOptions); 
        console.log(ans);
>>>>>>> a1f9d79 (Updated Code)
        return res.json({success:true, message:"Verification OTP sent on Email"});
    }catch(err){
        return res.json({success:false, message:err.message});
    }
}

export const verifyEmail = async (req,res)=>{
    const {userId, otp} = req.body;
    // const otp = verifyOtp;
    
    if(!userId || !otp){
        return res.json({success:false,message:'Missing Details'});
    }
    try{
        const user = await userModel.findById(userId);
        console.log(req.body,user.verifyOtp);
        if(!user){
            return res.json({success:false,message:'User not found'});
        }

        if(user.verifyOtp==='' || user.verifyOtp!==otp){
            return res.json({success:false,message:'Invalid OTP'});
        }

        if(user.verifyOtpExpireAt < Date.now()){
            return res.json({success:false,message:'OTP Expired'});
        }
        user.isAccountVerified = true;
        user.verifyOtp='';
        user.verifyOtpExpireAt = 0;

        await user.save();
        return res.json({success:true,message:'Email verified successfully'});

    }catch(err){
        return res.json({success:false, message:err.message});
    }
}

export const isAuthenicated = async (req,res)=>{
    try{
        return res.json({success:true,message:"Is authenticated"})
    }catch(err){
        return res.json({success:false, message:err.message});
    }
}


export const sendResetOtp = async (req,res)=>{
    const {email} = req.body;

    if(!email){
        return res.json({success:false,message:"Email is required"})
    }
    try{

        const user = await userModel.findOne({email});
        if(!user){
            return res.json({success:false,message:"User not found"})
        }

        const otp = String(Math.floor(100000+ Math.random() * 900000));

        user.resetOtp = otp;
        user.resetOtpExpireAt = Date.now() + 15 * 60 * 1000;

        await user.save();

        const mailOptions = {
            from: process.env.SENDER_EMAIL,
            to: email,
<<<<<<< HEAD
            subject: 'Account Verification OTP',
            from: process.env.SENDER_EMAIL,
            to: email,
            subject: 'Password Reset OTP', 
            text: `Your OTP for resetting your password is ${otp}.Use this OTP to proceed with resetting your password.`
=======
            subject: 'Password Reset OTP', 
            // text: `Your OTP for resetting your password is ${otp}.Use this OTP to proceed with resetting your password.`
            html: PASSWORD_RESET_TEMPLATE.replace("{{otp}}", otp)
>>>>>>> a1f9d79 (Updated Code)
        }
        await transporter.sendMail(mailOptions); 

        return res.json({success:true, message:'OTP sent to your email'})
    }catch(err){
        return res.json({success:false, message:err.message});
    }
}

export const resetPassword = async (req,res)=>{
    const {email,otp,newPassword} = req.body;
    if(!email || !otp || !newPassword){
        return res.json({ success: false, message: 'Email, OTP, and new password are required' });
    }  
    try{
        const user = await userModel.findOne({email});
        if(!user){
            return res.json({ success: false, message: 'User not found' });
        }
        if(user.resetOtp ==="" || user.resetOtp !== otp){
            return res.json({ success: false, message: 'Invalid OTP' });
        }
        if(user.resetOtpExpireAt < Date.now()){
            return res.json({ success: false, message:'OTP Expired'});
        }
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        user.password = hashedPassword;
        user.resetOtp = '';
        user.resetOtpExpireAt = 0;
        
        await user.save();

<<<<<<< HEAD
        return res.json({ success: false, message:'Password has been reset successfully'});
=======
        return res.json({ success: true, message:'Password has been reset successfully'});
>>>>>>> a1f9d79 (Updated Code)

    }catch(err){
        return res.json({success:false, message:err.message});
    }

}