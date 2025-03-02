import express from "express";
import cors from "cors";
import 'dotenv/config'
import cookieParser from "cookie-parser";
import connectDB from "./config/mongodb.js";
import authRouter from "./routes/authRoutes.js";
import userRouter from "./routes/userRoutes.js";
import postRouter from "./routes/postRouter.js";

const app = express();
const port = process.env.PORT || 4000;
connectDB();

const allowedOrigins = ['http://localhost:5173/']

app.use(express.json());
app.use(cookieParser())
app.use(cors({origin: process.env.FRONTEND_URL, credentials: true}));

// API Endpoints
app.get("/", (req, res)=>{
    res.send("Api Working");
})
app.use('/api/auth',authRouter);
app.use('/api/user',userRouter);
app.use('/api/ideas',postRouter);

app.listen(port, () => console.log(`Server started on PORT:${port}`));