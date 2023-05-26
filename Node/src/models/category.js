import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    name:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    image:{
        type: String,
        required: true,
    }
    
});
export default mongoose.model("User", userSchema)