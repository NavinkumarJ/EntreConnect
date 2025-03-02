import express from "express";
import { register, login, logout, sendVerifyOtp, verifyEmail, isAuthenicated, sendResetOtp, resetPassword } from "../controllers/authController.js";
import userAuth from "../middleware/userAuth.js";


const authRouter = express.Router();

authRouter.post('/register',register);
authRouter.post('/login',login);
authRouter.post('/logout',logout);
authRouter.post('/send-verify-otp',userAuth,sendVerifyOtp);
authRouter.post('/verify-account',userAuth,verifyEmail);
<<<<<<< HEAD
authRouter.post('/is-auth',userAuth,isAuthenicated);
=======
authRouter.get('/is-auth',userAuth,isAuthenicated);
>>>>>>> a1f9d79 (Updated Code)
authRouter.post('/send-reset-otp',sendResetOtp);
authRouter.post('/reset-password',resetPassword);

export default authRouter;