import mongoose from 'mongoose';
const { Schema } = mongoose;

const GigSchema = new Schema({
Productimg:{
    type:[String],
    required:true,
},
Productname:{
    type:String,
    required:true,
},
Productprice:{
    type:Number,
    required:true,
},
Productqnty:{
    type:Number,
    required:true,
},
  

},{
    timestamps:true
});

export default mongoose.model("Gig",GigSchema)