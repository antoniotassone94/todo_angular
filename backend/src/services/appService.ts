import dbConnect from "../config/dbConnect";
import { App, AppSchema } from "../models/model";



export async function createContent(text: string, completed: boolean): Promise<AppSchema | null> {
    await dbConnect()
    const content = new App({
        text: text,
        completed: completed
    })
    return await content.save()
}

export async function getContents(list: {}): Promise<any | null> {
    await dbConnect()
    const contents = await App.find(list)
    return contents
}
