import express from 'express'
import { app } from './app';

const server = express();
server.use(app)


const PORT = 4000;
server.listen(PORT, ()=> {
    console.log(`server is running on http://localhost:${PORT} 🚀`)
})