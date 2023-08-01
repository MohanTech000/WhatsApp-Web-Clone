import mongoose from "mongoose";

const Connection = () => {

     mongoose.connect("mongodb://localhost:27017/whatsapp-clone", {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }).then(() => {
        console.log("database connection successfull");
    }).catch((e) => {
        console.log("database error", e);
    });
}

export default Connection;