import mongoose from "mongoose";
 const userSchema=new mongoose.Schema({
    name:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true,
        message:"password can be between 8-12 character"
    },
    email:{
        type:String,
        required:true
    },
    type:{ type: String, enum: ['customer', 'seller']}

})
const User=mongoose.model('User',userSchema);
export default User;