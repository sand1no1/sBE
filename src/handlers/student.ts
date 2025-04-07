import { Request, Response, NextFunction } from "express";
import StudentService from "../db/student";
import StudentController from "../controllers/student";

const controller = new StudentController(new StudentService());

export default class StudentsHttpHandler{

    async getStudents(request: Request, response: Response, next: NextFunction) {  
        try{
            const students = await controller.getAll();
            response.json(students);

        } catch (error) {
            next(error);
        }
    }

    async getStudentsMessage(request: Request, response: Response, next: NextFunction){
        try{
            const students = await controller.getStudentsMessage();
            response.json(students);
        } catch (error){
            next(error);
        }
    }
}