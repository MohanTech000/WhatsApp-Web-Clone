import express from "express";

const route = express.Router();

//compoenents
import { addUser } from "../controllers/user-controller.js";
import { getUser } from "../controllers/user-controller.js";

import { newConversation } from "../controllers/conversation-controller.js";
import { getConversation } from "../controllers/conversation-controller.js";

import { newMessage, getMessages } from "../controllers/message-controller.js";

import { uploadFile, getImage } from "../controllers/image-controllers.js";

import  upload  from "../utils/upload.js";

route.post("/add", addUser);
route.get("/users", getUser); 

route.post("/conversation/add", newConversation);
route.post("/conversation/get", getConversation );

route.post("/message/add", newMessage);
route.get("/message/get/:id", getMessages);

route.post("/file/upload", upload.single("file"),  uploadFile);
route.get("/file/:filename", getImage);

export default route;