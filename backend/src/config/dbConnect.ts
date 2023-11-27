import mongoose from "mongoose";
import {app} from "../app";
import dotenv from "dotenv";

async function dbConnect() {
  dotenv.config();
  await mongoose.connect(<string>process.env.DB_CONN_STRING)
  .then(() => {
    app.connect("Connection with the database is created correctly.");
  })
  .catch(error => console.error(error));
}

export default dbConnect