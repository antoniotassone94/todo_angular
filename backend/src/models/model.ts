import {Schema, model} from 'mongoose'
import dotenv from 'dotenv'


dotenv.config()

export interface AppSchema{
    text: String
    completed: Boolean
}

const appModel = new Schema<AppSchema>({
    text: {type: String, required: true},
    completed: {type: Boolean, required: true, default: false}
})

export const App = model<AppSchema>('app', appModel)