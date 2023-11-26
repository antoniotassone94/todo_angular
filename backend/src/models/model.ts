import {Schema,model} from "mongoose";

const appModel = new Schema<AppSchema>({
    text: {type:String,required:true},
    completed: {type:Boolean,required:true,default:false}
})

export interface AppSchema{
    save(): AppSchema|PromiseLike<AppSchema|null> | null
    text: String
    completed: Boolean
}

export const App = model<AppSchema>("app",appModel)