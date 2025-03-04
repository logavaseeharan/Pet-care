import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({

  username:{
    type:String,
    required: true,
    unique:true,
  },
  email:{
    type:String,
    required: true,
    unique:true,
  },
  password:{
    type:String,
    required: true,
    
  },
  img:{
    type:String,
    required: false,
  },
   isSeller:{
    type:Boolean,
    required:false,
   },
  phone:{
    type:String,
    required: false,
  },
  

},{
    timestamps:true
});

export default mongoose.model("User",userSchema)