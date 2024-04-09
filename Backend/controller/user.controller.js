
import jwt from "jsonwebtoken";
import User from "../Model/user.model.js";
import createError from "../utils/createErrror.js";


export const deleteUser = async(req,res,next)=>{
    const user = await User.findById(req.params.id)

        if(res.userId !== user._id.toString()){
           return next(createError(401,"You can delete only your Account"))
        }
        await User.findByIdAndDelete(req.params.id);
        res.status(200).send("Deleted.")
    
};