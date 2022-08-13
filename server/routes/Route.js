import express from "express";
import {
  newConversation,
  getConversation,
} from "../controller/conversations.js";
import { getMessage, newMessage } from "../controller/message.js";
import { addUser, getUsers } from "../controller/userController.js";

const route = express.Router();

route.post("/add", addUser);
route.get("/users", getUsers);
route.post("/conversation/add", newConversation);
route.post("/conversation/get", getConversation);
route.post("/message/add", newMessage);
route.get("/message/get/:id", getMessage);

export default route;
