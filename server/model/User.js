import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
    iss:{
        type:String,
    },

    nbf:{
        type:String,

    },

    aud:{
        type:String,

    },
    
    sub:{
        type:String,
        // required: true

    },
    email:{
        type:String,
    },
    email_verified:{
        type:Boolean

    },
    azp:{
        type:String,

    },
    name:{
        type:String,
        // required: true
        

    },
    picture:{
        type:String,
        // required: true
        

    },
    given_name:{
        type:String,
        

    },
    family_name:{
        type:String,

    },
    iat:{
        type:Number,


    },
    exp:{
        type:Number,


    },
    jti:{
        type:String,


    },

});

//Create a mongodb Collection

const UserCollec = mongoose.model("UserCollec", UserSchema);

export default UserCollec;