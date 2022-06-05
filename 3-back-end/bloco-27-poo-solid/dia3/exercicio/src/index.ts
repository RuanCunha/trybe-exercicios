abstract class Person {
  private _name: string;
  private _birthDate: Date;

  constructor(name: string, birthDate: Date) {
    this._name = name;
    this._birthDate = birthDate;
  }

  get name(): string {
    return this._name;
  }

  set name (value: string) {
    if (value.length < 3) {
      throw new Error('O nome deve ter pelo menos 3 caracteres')
    }
    this._name = value;
  }

  get birthDate(): Date {
    return this._birthDate;
  }

  set birthDate(value) {
    if (value.getTime() > new Date().getTime()) throw new Error('A data de nascimento não pdoe ser uma data no futuro');
    if (Person.getAge(value) > 120) throw new Error('A idade máxima é 120 anos');
    this._birthDate = value;
  }

  static getAge(value: Date): number {
    const diff = Math.abs(new Date().getTime() - value.getTime())
    const yearMs = 31_536_000_000;
    return Math.floor(diff / yearMs)
  }
}

interface Enrollable {
  enrollment: string;
  generateEnrollment(): string;
}

class Student extends Person implements Enrollable{
  private _enrollment = String();
  private _examsGrades: number[] = [];
  private _worksGrades: number[] = [];

  constructor (name: string, birthDate: Date) {
    super(name, birthDate);
    this.enrollment = this.generateEnrollment();
  }

  get enrollment(): string {
    return this.enrollment;
  }

  set enrollment(value: string) {
    if (value.length < 16) {
      throw new Error('A matrícula deve possuir no mínimo 16 caracteres')
    }
    this._enrollment = value;
  }

  get examsGrades(): number[] {
    return this._examsGrades;
  }

  set examsGrades(value: number[]) {
    if (value.length > 4) {
      throw new Error('Máximo de 4 notas de provas')
    }
    this._examsGrades = value;
  }

  get worksGrades(): number[] {
    return this._worksGrades;
  }

  set worksGrades(value: number[]) {
    if (value.length > 2) {
      throw new Error('Máximo de 2 notas de trabalhos')
    }
    this._worksGrades = value;
  }

  sumGrades() {
    const examsSum = this._examsGrades.reduce((acc, curr) => acc + curr, 0);
    const worksSum = this._worksGrades.reduce((acc, curr) => acc + curr, 0)
    return examsSum + worksSum;
  }

  sumAverageGrade() {
    const sum = this.sumGrades();
    const length = this._examsGrades.length + this._worksGrades.length;
    return sum / length || 0;
  }

  generateEnrollment(): string {
    const randomStr = String(Date.now() * (Math.random() + 1))
      .replace(/\W/g, '');

    return `STU${randomStr}`;
  }
}

// const est1 = new Student('Ruan', new Date('1992/06/24'))
// est1.examsGrades = [10, 9, 9, 7];
// est1.worksGrades = [9, 7]
// console.log(est1);
// console.log("Soma das notas das provas");
// console.log(est1.sumGrades());
// console.log("Média das provas");
// console.log(est1.sumAverageGrade());

class Employee extends Person implements Enrollable {
  private _enrollment: string;
  private _salary: number;
  private _admissionDate: Date;

  constructor (name: string, birthDate: Date, salary: number) {
    super(name, birthDate);
    this._enrollment = this.generateEnrollment();
    this._salary = salary;
    this._admissionDate = new Date();
  }

  get enrollment(): string {
    return this.enrollment;
  }

  set enrollment(value: string) {
    if (value.length < 16) {
      throw new Error('A matrícula deve possuir no mínimo 16 caracteres')
    }
    this._enrollment = value;
  }

  get salary(): number {
    return this._salary;
  }

  set salary(value: number) {
    if (value < 0) {
      throw new Error('O salário não pdoe ser negativo')
    }
    this._salary = value;
  }

  get admissionDate(): Date {
    return this._admissionDate;
  };

  set admissionDate(value: Date) {
    if (value.getTime() > new Date().getTime()) {
      throw new Error('A data de admissão não pdoe ser uma data no futuro')
    }
    this._admissionDate = value;
  }

  generateEnrollment(): string {
    const randomStr = String(Date.now() * (Math.random() + 1))
      .replace(/\W/g, '');

    return `FUNC${randomStr}`;
  }
}

class Subject {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    if (value.length < 3) {
      throw new Error('O nome tem que possuir no mínimo 3 caracteres');
    }
    this._name = value;
  }
}

const matematica = new Subject('Matemática')
const historia = new Subject('História')
const filosofia = new Subject('Filosofia')

class Teacher extends Employee {
  private _subject: Subject;

  constructor(name: string, birthDate: Date, salary: number, subject: Subject) {
    super(name, birthDate, salary)

    this._subject = subject;
    this.enrollment = this.generateEnrollment();
  }

  get subject(): Subject {
    return this._subject;
  }

  set subject(value: Subject) {
    this._subject = value;
  }

  generateRegistration(): string {
      const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
  
      return `PRF${randomStr}`;
  }
};

const teacher1 = new Teacher("Ruan", new Date('1992/06/24'), 5000, matematica)
const teacher2 = new Teacher("Carol", new Date('1990/11/28'), 6000, filosofia)

const student1 = new Student("Ruan", new Date('1992/06/24'))
const student2 = new Student("Carol", new Date('1990/11/28'))

console.log("Professores: ");

console.log(teacher1);
console.log(teacher2);

console.log("Estudantes: ");

console.log(student1);
console.log(student2);

