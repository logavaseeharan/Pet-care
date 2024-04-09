
import Jwt from "jsonwebtoken";
import User from "../Model/user.model.js";
import bcrypt from "bcrypt";



export const register= async (req,res)=>{
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
    res.status(500).send("something went worng")
 }
};
export const login= async (req, res)=>{
   try{
const user = await User.findOne({username: req.body.username});
if(!user) return res.status(404).send("User not found!")

const isCorrect = bcrypt.compareSync(req.body.password, user.password)
if(!isCorrect) return res.status(404).send("Wrong password or Username!");

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
      res.status(500).send("something went worng!")
   }
    
}
export const logout= async (req,res)=>{
    
}