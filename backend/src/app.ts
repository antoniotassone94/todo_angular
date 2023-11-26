import express,{Router} from "express";
import {createContent,deleteContent,getContents,updateContent} from "./services/appService";
import {AppSchema} from "./models/model";
import dotenv from "dotenv";

dotenv.config();

const app: Router = express.Router();

app.post("/", async (req, res) => {
    const {text,completed} = req.body;
    const result: AppSchema | null = await createContent(text,completed);
    if(!result){
        res.status(400).send({message:"Bad request, cannot create content",check:false});
    }
    return res.status(200).send({result:result,message:"Content created correctly.",check:true});
})

app.get("/", async (req,res,next) => {
    const result: AppSchema |  any = await getContents({});
    if (!result || result.length === 0) {
        res.status(404).send({message:"There aren't any content.",check:false});
        return next();
    }
    return res.status(200).send({result:result,message:"Lists of the contents found",check:true});
})

app.put("/:id", async (req, res) => {
    const {text,completed} = req.body;
    const {id} = req.params;
    const result:AppSchema|null = await updateContent(id,text,completed);
    if(!result){
        res.status(400).send({message:"Bad request, cannot change content",check:false});
    }
    return res.status(200).send({result:result,message:"Content changed correctly.",check:true});
})

app.delete("/:id",async (req,res) => {
    const {id} = req.params;
    const result:AppSchema|null = await deleteContent(id);
    if(!result){
        res.status(400).send({message:"Bad request, cannot delete content",check:false});
    }
    return res.status(200).send({result:result,message:"Content deleted correctly.",check:true});
})

export {app}