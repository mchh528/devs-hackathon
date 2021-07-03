import express from 'express';
import { getStudent, createStudent, deleteStudent } from '../controllers/student.js';


/* Template for functions to be run when URL is called



const router = express.Router();

router.get('/', getStudent);
router.post('/', createStudent);
router.delete('/:id', deleteStudent);


export default router;


*/


const router = express.Router();

router.get('/', getStudent);
router.post('/', createStudent);
router.delete('/:id', deleteStudent);


export default router;
