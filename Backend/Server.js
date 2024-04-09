import express from "express";
import mongoose from "mongoose";
import dotenv from"dotenv";
import authRoute from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import router from "./routes/user.route.js";
import cors from "cors";


const app = express();
dotenv.config();
mongoose.set('strictQuery', true)
const connect = async () =>{
try {
    await mongoose.connect(process.env.MONGO);
    console.log("connected");
  } catch (error) {
    console.log(error);
    console.log("wrong");
  }
};
app.use(express.json());
app.use(cors({orgin:'http://localhost:3000',credential:true}));
app.use(cookieParser());
app.use("/Backend/auth",authRoute);
app.use("/Backend/users",router);

app.use((err,req,res,next)=>{
  const errorStatus =err.status ||500
  const errorMessage=err.message || "Something went Wrong";
  return res.status(errorStatus).send(errorMessage);
})
 app.listen(3001,()=>{
    connect();
    console.log("Backend server is run")
 })