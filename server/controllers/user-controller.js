//model
import UserCollec from "../model/User.js";
 

export const addUser = async(req, res) => {

    // console.log(req.body);
   
    try {

        // check if user already exsist or Not 
       let exist  = await UserCollec.findOne({ sub: req.body.sub });
        
    
       if(exist) {
        res.status(200).json({msg: "user already exsist"})
        return;
       }
       
       //add new user
       const newUser = new UserCollec(req.body);
       await newUser.save();
       res.status(201).json(newUser);
       console.log(newUser);

        
    } catch (error) {
        return res.status(500).json(error);
    }

};

export const getUser = async(req, res) => {
    try {

        const users = await UserCollec.find({});
        return res.status(200).json(users)
        
    } catch (error) {
        return res.status(500).json(error.message);


    }
}


