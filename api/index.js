import express from "express";
import { MongoDBURL, PORT } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./modals/bookmodal.js";
import bookRoutes from "./routes/bookRoutes.js";
import cors from 'cors'

mongoose
  .connect(MongoDBURL)
  .then(() => {
    console.log("DB connected successfully");
    app.listen(PORT, () => {
      console.log(`App is listening to port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
const app = express();

// MIddleware for parsing JSON
app.use(express.json());
app.use(cors())

app.get("/", (req, res) => {
  console.log("Welcome to backend");
  return res.status(200).send("Welcome to backend of the app");
});

app.use('/books', bookRoutes)


