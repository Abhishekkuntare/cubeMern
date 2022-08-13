import Conversation from "../model/Conversation.js";
import Message from "../model/message.js";

export const newMessage = async (req, res) => {
  const newMessage = new Message(req.body);

  try {
    await newMessage.save();
    await Conversation.findByIdAndUpdate(request.body.conversationId, {
      message: request.body.text,
    });
    res.status(200).json("Message send successfully ~");
  } catch (error) {
    res.status(500).json(error);
  }
};
export const getMessage = async (request, response) => {
  try {
    const messages = await Message.find({ conversationId: request.params.id });
    response.status(200).json(messages);
  } catch (error) {
    response.status(500).json(error);
  }
};
