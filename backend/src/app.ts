import express from 'express'
import { createContent, getContents } from './services/appService';


const app = express();
app.use(express.json());


app.post('/', async (req, res) => {
    const { text, completed } = req.body;
    const result = await createContent(text, completed);
    if (!result) {
        res.status(400).send({ msg: 'Cannot create article', check: false })
    }
    return res.status(200).send({ msg: result, check: true })
})


app.get('/', async (req, res, next) => {
    const result = await getContents({})
    if (!result || result.length === 0) {
        res.status(404).send({ msg: 'there are not content', check: false })
        return next()
    }
    return res.status(200).send({ contents: result, check: true })
})

export {app}