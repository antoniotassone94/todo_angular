import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import {app} from "./app_routes";

dotenv.config();

const server = express();
server.use(cors());
server.use(express.json());

server.use("/app",app);

server.get("/",(req,res) => {
    res.send("Hello world!");
});

const PORT = 4000;

mongoose.set("strictQuery",true);
mongoose.connect(<string>process.env.DB_CONN_STRING)
.then(() => {
    server.listen(PORT,() => {
        console.log(`server is running on the port ${PORT} 🚀`)
    });
})
.catch(error => console.error(error))