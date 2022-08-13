import mongoose from "mongoose";

const connection = async (username, password) => {
  const URL = `mongodb+srv://${username}:${password}@cube.yyvfr.mongodb.net/Cube?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Databse connected");
  } catch (error) {
    console.log(`Error while the connecting to the mongodb`, error);
  }
};

export default connection;
