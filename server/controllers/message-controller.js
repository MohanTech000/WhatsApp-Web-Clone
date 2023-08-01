import Message from "../model/Message.js";
import conversation from "../model/Conversation.js";

export const newMessage = async(req, res) => {
        try {

            const NewMessage = new Message(req.body);

           await NewMessage.save();
           await conversation.findByIdAndUpdate(req.body.conversationId, { message: req.body.value });

           return res.status(200).json("Message has been send successfully");
            
        } catch (error) {
            res.status(500).json(error.message)
        }
}

export const getMessages = async(req, res) => {
    try {

        const messages = await Message.find({ conversationId: req.params.id });
        return res.status(200).json(messages);
        
    } catch (error) {
        res.status(500).json(error.message)
        
    }
}