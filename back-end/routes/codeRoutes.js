import express from "express";
import { code_output, code_opponent } from '../controllers/gameControllers.js'


const codeRouter = express.Router();

codeRouter.post('/:id', code_output);
codeRouter.get('/:id', code_opponent);


export default codeRouter;