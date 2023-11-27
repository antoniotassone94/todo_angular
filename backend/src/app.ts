import express,{Router} from "express";
import {createContent,deleteContent,getContents,updateContent} from "./services/appService";
import {AppSchema} from "./models/model";

const app: Router = express.Router();

app.post("/", async (req, res) => {
    const {text,completed} = req.body;
    const result:AppSchema|null = await createContent(text,completed);
    if(!result){
        return res.status(500).send({message:"Internal server error while creating the content.",check:false});
    }
    return res.status(200).send({result:result,message:"Content created correctly.",check:true});
})

app.get("/", async (req,res,next) => {
    const result:AppSchema|any = await getContents({});
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
        return res.status(500).send({message:"Internal server error while updating the content.",check:false});
    }
    return res.status(200).send({message:"Content changed correctly.",check:true});
})

app.delete("/:id",async (req,res) => {
    const {id} = req.params;
    const result:AppSchema|null = await deleteContent(id);
    if(!result){
        return res.status(500).send({message:"Internal server error while deleting the content.",check:false});
    }
    return res.status(200).send({message:"Content deleted correctly.",check:true});
})

export {app}