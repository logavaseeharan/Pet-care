
import Jwt from "jsonwebtoken";
import User from "../Model/user.model.js";
import bcrypt from "bcrypt";
import createError from "../utils/createErrror.js";



export const register= async (req,res,next)=>{
 try{
   const hash = bcrypt.hashSync(req.body.password, 5)
const newUser = new User({
   ...req.body,
   password: hash,
});

await newUser.save();
res.status(201).send("user has been created ")
 }catch(err){
   console.log(err);
   next(err);
 }
};
export const login= async (req, res,next)=>{
   try{
const user = await User.findOne({username: req.body.username});

if(!user) return next(createError(404,"user not found!"));

const isCorrect = bcrypt.compareSync(req.body.password, user.password)
if(!isCorrect) 
return  next(createError(404,"Wrong password or Username!"));

      const token= Jwt.sign({
         id:user._id,
         isSeller:user.isSeller,
      },
      process.env.JWT_KEY
      );
const{password, ...info}=user._doc;

res
.cookie("accessToken",token,{
   httpOnly:true,
})
.status(200)
.send(info)
   }catch(err){
      console.log(err)
    next(err);
   }
    
}
export const logout= async (req,res)=>{
    res.clearCookie("accessToken",{
    sameSite:"none",
    secure:true,
    })
    .status(200)
    .send("User has been logged out.")
};