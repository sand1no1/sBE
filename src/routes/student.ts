import express from 'express';
import StudenttHttpHandler from '../handlers/student';

const router = express.Router();

const studenttHttpHandler = new StudenttHttpHandler;

router.get('/status', studenttHttpHandler.getStudents);


export default router;