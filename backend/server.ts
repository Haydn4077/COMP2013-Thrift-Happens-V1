//Backend server for ThriftHappens online shop
//import
import express, { type Express } from "express";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";
import ClothesItem from "./models/clothesItem";
import { request } from "node:http";

//Constants Variable
const server: Express = express();
const port: Number = 3000;
const { MONGO_URI } = process.env;

//Middleware
server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(cors());

//Connect to DB and Start server
if (!MONGO_URI) {
  throw new Error("Mongo URI is not found in .env file");
}
mongoose
  .connect(MONGO_URI)
  .then(() =>
    server.listen(port, () => {
      console.log(`Connected to DB\nServer is listening on port ${port}`);
    }),
  )
  .catch((error) => console.log(error));

//Routes
//Route Route
server.get("/", (request, response) => {
  response.send("Server is live");
});

//Get data api route
server.get("/data", async (request, response) => {
  try {
    const data = await ClothesItem.find();
    response.status(200).send(data);
  } catch (error) {
    console.log(error);
    response.status(500).send(error);
  }
});
