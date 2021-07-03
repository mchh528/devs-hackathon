import express from 'express';
// import { getStudent, createStudent, deleteStudent } from '../controllers/student.js';
import { getProblemInfo } from '../controllers/gameControllers.js'

const gameRouter = express.Router();


/*
router.get('/', getStudent);
router.post('/', createStudent);
router.delete('/:id', deleteStudent);
*/

gameRouter.get('/', getProblemInfo);

export default gameRouter;