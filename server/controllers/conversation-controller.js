//components
import conversation from "../model/Conversation.js";

export const newConversation = async(req, res) => {
    try {

        const senderId = req.body.senderId;
        const recieverId = req.body.recieverId;

        //check if user already open chat or not
        const exist = await conversation.findOne({ members : { $all: [ recieverId, senderId ] } });

        if(exist){
            return res.status(200).json("Conversation already exist");
        }

        //create new conversation
        const newConversation = new conversation({
            members: [ senderId, recieverId ]
        })

        await newConversation.save();
        return res.status(200).json("Conversation saved successfully");

        
    } catch (error) {
        return res.status(500).json(error.message);
        
    }
}

export const getConversation = async(req, res) => {
    try {
        
        const senderId = req.body.senderId;
        const recieverId = req.body.recieverId;


        const Conversation = await conversation.findOne({ members : { $all: [ recieverId, senderId ] } });
        res.status(200).json(Conversation);
         


    } catch (error) {
        return res.status(500).json(error.message);
        
    }
}