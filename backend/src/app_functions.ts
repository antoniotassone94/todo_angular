import {App,AppSchema} from "./database/model";
import validateMongodb from "./database/utility";

export async function createContent(text:string,completed:boolean):Promise<AppSchema|null>{
    const content: AppSchema|null = new App({
        text: text,
        completed: completed
    })
    return await content.save();
}

export async function getContents(list:{}):Promise<any|null>{
    const contents: AppSchema|any = await App.find(list);
    return contents;
}

export async function updateContent(id:string,text:string,completed:boolean):Promise<AppSchema|null>{
    validateMongodb(id);
    const content: AppSchema|null  = await App.findByIdAndUpdate(id,{$set:{text:text,completed:completed}});
    return content;
}

export async function deleteContent(id:string):Promise<AppSchema|null>{
    validateMongodb(id);
    const content: AppSchema|null  = await App.findByIdAndDelete(id);
    return content;
}