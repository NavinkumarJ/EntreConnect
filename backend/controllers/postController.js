import Idea from "../models/postModel.js";

export const getideas = async (req, res) => {
    try{
        const ideas = await Idea.find();
        return res.json({success:true,message:"Fetched success",data:ideas});
    }catch(error){
        return res.json({success:false,message:error.message});
    }
}

export const postideas = async (req, res) => {
    try{
        const newIdea = new Idea(req.body);
        await newIdea.save();
        return res.json({success:true,message:"Idea Added!",data: newIdea});
    }catch(error){
        return res.json({success:false,message:error.message});
    }
  }