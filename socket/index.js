import { Server } from "socket.io";

const PORT = 9000;

const io = new Server(PORT, {
  cors: {
    origin: "http://localhost:3000",
  },
});

let users = [];

const addUser = (userId, socketId) => {
  !users.some((user) => user.userId === userId) &&
    users.push({ userId, socketId });
};

const getUser = (userId, socketId) => {
  return users.find((user) => user.userId === userId);
};

const removeUser = (socketId) => {
  users = users.filter((user) => user.socketId !== socketId);
};

io.on("connection", (socket) => {
  console.log("User Conntected!");

  //connect
  socket.on("addUser", (userId) => {
    addUser(userId, socket.id);
    io.emit("getUsers", users);
    // console.log(users);
  });

  //Send message
  socket.on("sendMessage", ({ senderId, receiverId, text }) => {
    const user = getUser(receiverId);
    console.log(text, senderId, user);
    io.to(user.socketId).emit("getMessage", {
      senderId,
      text,
    });
  });

  //disconnnect
  socket.on("disconnect", () => {
    console.log("User Disconnected!");
    removeUser(socket.id);
    io.emit("getUsers ", users);
  });
});
