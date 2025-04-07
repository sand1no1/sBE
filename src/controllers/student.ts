import StudentService from '../db/student';

export default class StudentController {
  private service: StudentService;

  constructor(service: StudentService) {
    this.service = service;
  }

  async getAll() {
    return this.service.getStudents();
  }

  async getStudensData() {
    return this.service.getStudentsStatus();
  }

  async getStudentsMessage() {
    const students = await this.service.getStudents();

    return students.map(({ matricula, calificacion, adeudos }) => {
      let mensaje = '';

      if (calificacion > 90 && !adeudos) {
        mensaje = 'Te graduaste con honores';
      } else if (calificacion > 90 && adeudos) {
        mensaje = 'Tenías honores pero tienes un adeudo';
      } else if (calificacion >= 70 && calificacion <= 90) {
        mensaje = 'Pasaste muy apenas';
      } else if (calificacion < 70 && !adeudos) {
        mensaje = 'Como no tienes adeudo, tienes derecho a un examen de recuperación';
      } else if (calificacion < 70 && adeudos) {
        mensaje = 'Eres expulsado';
      }

      return { matricula, mensaje };
    });
  }
}