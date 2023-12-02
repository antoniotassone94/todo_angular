import express from "express";
import cors from "cors";
import {app} from "./app_routes";

const server = express();
server.use(cors());
server.use(express.json());

server.use("/app",app);

server.get("/",(req,res) => {
    res.send("Hello world!");
});

const PORT = 4000;

server.listen(PORT,() => {
    console.log(`server is running on the port ${PORT} 🚀`)
});