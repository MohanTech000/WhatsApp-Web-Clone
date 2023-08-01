import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    conversationId: {
        type: String
    },
    recieverId: {
        type: String
    },
    senderId: {
        type: String
    },
    type: {
        type: String
    },
    value: {
        type: String
    }
},

{
    timestamps: true
}

)

//creating collection
const message = mongoose.model("message", messageSchema);
export default message;