import express from "express";
import cors from "cors";
import 'dotenv/config'
import cookieParser from "cookie-parser";
import connectDB from "./config/mongodb.js";
import authRouter from "./routes/authRoutes.js";
import userRouter from "./routes/userRoutes.js";
<<<<<<< HEAD
=======
import postRouter from "./routes/postRouter.js";
>>>>>>> a1f9d79 (Updated Code)

const app = express();
const port = process.env.PORT || 4000;
connectDB();

const allowedOrigins = ['http://localhost:5173/']

app.use(express.json());
app.use(cookieParser())
<<<<<<< HEAD
app.use(cors({origin: "http://localhost:5173", credentials: true}));
=======
app.use(cors({origin: process.env.FRONTEND_URL, credentials: true}));
>>>>>>> a1f9d79 (Updated Code)

// API Endpoints
app.get("/", (req, res)=>{
    res.send("Api Working");
})
app.use('/api/auth',authRouter);
app.use('/api/user',userRouter);
<<<<<<< HEAD
=======
app.use('/api/ideas',postRouter);
>>>>>>> a1f9d79 (Updated Code)

app.listen(port, () => console.log(`Server started on PORT:${port}`));