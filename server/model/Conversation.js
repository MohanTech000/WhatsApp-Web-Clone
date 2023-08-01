import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema({
    members:{
        type: Array
    },
    message: {
        type: String
    }
},

    {timestamps: true}

);

//creating conversation collection
const conversation = mongoose.model("conversation", conversationSchema);
export default conversation; 