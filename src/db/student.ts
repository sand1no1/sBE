import { StudentDTO } from '../types/student';
import studentsData from './students.json';

export default class StudentService {
  private students: StudentDTO[];

  constructor() {
    this.students = studentsData;
  }

  getStudents() {
    return this.students;
  }

  getStudentsStatus() {
    return this.students.map(({ matricula, nombre, calificacion, adeudos }) => ({
      matricula,
      nombre,
      calificacion,
      adeudos
    }));
  }
}