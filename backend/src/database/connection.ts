import mongoose from "mongoose";
import dotenv from "dotenv";

async function dbConnect() {
  dotenv.config();
  try{
    mongoose.set("strictQuery",true);
    await mongoose.connect(<string>process.env.DB_CONN_STRING)
  }catch(error){
    console.error(error);
  }
}

export default dbConnect