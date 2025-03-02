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


app.use(express.json());
app.use(cookieParser())


// const allowedOrigins = [
//   process.env.FRONTEND_URL || "http://localhost:5173"
// ];

app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true, // Allow cookies and authentication headers
  methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
  allowedHeaders: ["Content-Type", "Authorization"] // Allowed headers
}));

app.get("/test-cors", (req, res) => {
    res.json({ message: "CORS is working!" });
  });
  

// API Endpoints
app.get("/", (req, res) => {
res.json({ message: "API is working!" });
});
  
app.use('/api/auth',authRouter);
app.use('/api/user',userRouter);
app.use('/api/ideas',postRouter);

app.listen(port, () => console.log(`Server started on PORT:${port}`));