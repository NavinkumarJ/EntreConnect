import express from "express";
import { getideas, postideas } from "../controllers/postController.js";

const postRouter = express.Router();

postRouter.get("/get-idea", getideas);
postRouter.post("/post-idea", postideas);

export default postRouter;