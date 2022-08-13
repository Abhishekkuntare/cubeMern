import Conversation from "../model/Conversation.js";
import User from "../model/User.js";

export const addUser = async (request, response) => {
  try {
    let exist = await User.findOne({ googleId: request.body.googleId });
    if (exist) {
      response.status(200).json("user already exists");
      return;
    }
    const newUser = new User(request.body);
    await newUser.save();
    response.status(200).json("user saved successfully ");
  } catch (error) {
    response.status(500).json(error);
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
};
