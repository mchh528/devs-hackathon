import express from 'express';
// import { getStudent, createStudent, deleteStudent } from '../controllers/student.js';
import { getProblemInfo, createUser, take_request } from '../controllers/gameControllers.js'

const gameRouter = express.Router();


/*
router.get('/', getStudent);
router.post('/', createStudent);
router.delete('/:id', deleteStudent);
*/

gameRouter.post('/', createUser);
gameRouter.post('/Game/:id', take_request);
gameRouter.get('/Game/:id', getProblemInfo);

export default gameRouter;