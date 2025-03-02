import mongoose from "mongoose";

const ideaSchema = new mongoose.Schema({
    title: String,
    description: String,
    owner: String,
    phone: String,
    category: String,
    image: String,
  });

const Idea = mongoose.model("Idea", ideaSchema);

export default Idea;