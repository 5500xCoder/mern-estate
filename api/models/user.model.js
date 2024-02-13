import mongoose from "mongoose";
 const userSchema =new mongoose.Schema({
    username:{
        type: String,
        require: true,
        unique: true,

    },
    email:{
        type: String,
        require: true,
        unique :  true,

        
    },
    password:{
        type:String,
        require : true,

    },
    avatar:{
        type: String,
        default: "https://www.flaticon.com/free-icon/user_9073143?term=avatar&page=1&position=3&origin=search&related_id=9073143"
    },
 },
 {
    timestamps: true

 }
 );
 const User = mongoose.model('User',userSchema);

 export default User;