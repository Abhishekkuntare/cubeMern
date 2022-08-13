import Conversation from "../model/Conversation.js";

export const newConversation = async (request, response) => {
  let senderId = request.body.senderId;
  let receiverId = request.body.receiverId;

  try {
    const exist = await Conversation.findOne({
      members: { $all: [receiverId, senderId] },
    });

    if (exist) {
      response.status(200).json("Conversation already exist   ");
      return;
    }
    const newConversation = new Conversation({
      members: [senderId, receiverId],
    });

    await newConversation.save();
    response.status(200).json("new conversation added successfully");
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getConversation = async (req, res) => {
  try {
    const conversation = await Conversation.findOne({
      members: { $all: [req.body.sender, req.body.receiver] },
    });
    res.status(200).json(conversation);
  } catch (error) {
    res.status(500).json(error);
  }
};
