import dbConnect from "../config/dbConnect";
import {App,AppSchema} from "../models/model";
import validateMongodb from "../utils/validateMongodb";

export async function createContent(text:string,completed:boolean):Promise<AppSchema|null>{
    await dbConnect();
    const content: AppSchema|null = new App({
        text: text,
        completed: completed
    })
    return await content.save();
}

export async function getContents(list:{}):Promise<any|null>{
    await dbConnect();
    const contents: AppSchema|any = await App.find(list);
    return contents;
}

export async function updateContent(id:string,text:string,completed:boolean):Promise<AppSchema|null>{
    await dbConnect();
    validateMongodb(id);
    const content: AppSchema|null  = await App.findByIdAndUpdate(id,{$set:{text:text,completed:completed}});
    return content;
}

export async function deleteContent(id:string):Promise<AppSchema|null>{
    await dbConnect();
    validateMongodb(id);
    const content: AppSchema|null  = await App.findByIdAndDelete(id);
    return content;
}