// Exercício 1

class Person {
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

const person1 = new Person("Ruan", new Date('1992/06/24'))
const person2 = new Person("Carol", new Date('1990/11/28'))

console.log(person1);
console.log(person2);

// Exercicio 2
// Implementação do exercício anterior

class estudante extends Person{
  private _enrollment: number;
  private _examsGrades: number[] = [];
  private _worksGrades: number[] = [];

  constructor (name: string, birthDate: Date) {
    super(name, birthDate);
    this._enrollment = this.generateEnrollment();
  }

  get enrollment(): number {
    return this.enrollment;
  }

  set enrollment(value: number) {
    if (value > 999999) {
      throw new Error('Matrícula precisa ter 6 dígitos ou menos')
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

  generateEnrollment(): number {
    return Math.floor(Math.random() * 999999) + 1;
  }
}

const est1 = new estudante('Ruan', new Date('1992/06/24'))
est1.examsGrades = [10, 9, 9, 7];
est1.worksGrades = [9, 7]
console.log(est1);
console.log("Soma das notas das provas");
console.log(est1.sumGrades());
console.log("Média das provas");
console.log(est1.sumAverageGrade());

// Exercicio 3

interface IEmployee {
  registration: string;
  salary: number;
  admissionDate: Date;
  generateRegistration(): string
}

// Exercicio 4

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

console.log(matematica.name);
console.log(historia.name);
console.log(filosofia.name);


// Exercicio 5

class Teacher extends Person implements IEmployee {
  private _registration: string;
  private _salary: number;
  private _admissionDate: Date;
  private _subject: Subject;

  constructor(name: string, birthDate: Date, salary: number, subject: Subject) {
    super(name, birthDate)
  
    this._salary = salary;
    this._subject = subject;
    this._admissionDate = new Date();
    this._registration = this.generateRegistration();
  }

  get subject(): Subject {
    return this._subject;
  }

  set subject(value: Subject) {
    this._subject = value;
  }

  get registration(): string {
    return this._registration;
  };

  set registration(value: string) {
    if (value.length < 16) {
      throw new Error('O registro deve possuir no mínimo 16 caracteres')
    }
    this._registration = value;
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

  generateRegistration(): string {
      const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
  
      return `PRF${randomStr}`;
  }
};

const teacher1 = new Teacher("Ruan", new Date('1992/06/24'), 5000, matematica)
console.log(teacher1);
