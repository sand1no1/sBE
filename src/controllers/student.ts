import StudentService from "../db/student";

export default class StudentController {
    private service: StudentService;

    constructor(service: StudentService){
        this.service = service;
    }

    async getAll(){
        return this.service.getStudents();
    }
}