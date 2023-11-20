import express, { Router } from 'express';
import { createContent, deleteContent, getContents, updateContent } from './services/appService';


const app: Router = express.Router();
app.use(express.json());


app.post('/', async (req, res) => {
    const { text, completed } = req.body;
    const result = await createContent(text, completed);
    if (!result) {
        res.status(400).send({ msg: 'Bad request, cannot create content', check: false });
    }
    return res.status(200).send({ result: result, msg: 'Content created correctly', check: true });
})


app.get('/', async (req, res, next) => {
    const result = await getContents({});
    if (!result || result.length === 0) {
        res.status(404).send({ msg: 'there are not content', check: false });
        return next();
    }
    return res.status(200).send({ result: result, msg: 'Content list found', check: true });
})


app.put('/:id', async (req, res) => {
    const { text, completed } = req.body;
    const { id } = req.params;
    const result = await updateContent(id, text, completed);
    if (!result) {
        res.status(400).send({ msg: 'Bad request, cannot change content', check: false });
    }
    return res.status(200).send({ result: result, msg: 'Content changed correctly', check: true });
})


app.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const result = await deleteContent(id);
    if (!result) {
        res.status(400).send({ msg: 'Bad request, cannot delete content', check: false });
    }
    return res.status(200).send({ result: result, msg: 'Content deleted correctly', check: true });
})

export { app }