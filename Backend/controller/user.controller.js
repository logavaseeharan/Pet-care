
import jwt from "jsonwebtoken";
import User from "../Model/user.model.js";


export const deleteUser = async(req,res)=>{
    const user = await User.findById(req.params.id)

        if(res.userId !== user._id.toString()){
           return  res.status(403).send("You can delete only your Account")
        }
        await User.findByIdAndDelete(req.params.id);
        res.status(200).send("Deleted.")
    
};