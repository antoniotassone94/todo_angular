import mongoose from 'mongoose';
import { app } from '../app';


async function dbConnect() {
  await mongoose.connect(<string>process.env.DB_CONN_STRING!)
    .then(() => {
      app.emit('Connection with the db is ok')
    })
    .catch(e => console.log(e))
} 

export default dbConnect