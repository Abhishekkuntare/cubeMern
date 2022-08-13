import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

// components
import connection from "./Database/db.js";
import Routes from "./routes/Route.js";

dotenv.config();
const app = express();

// cors
app.use(cors());

// bodyParser
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

// routes
app.use("/", Routes);

const PORT = 8000;
// dotenv
const username = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;

connection(username, password);
app.listen(PORT, () => console.log(`server listening on localhost ${PORT}`));
