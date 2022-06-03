class Superclass {
  isSuper = true;

  construct() {
    this.isSuper = true;
  };

  sayHello(): void {
    console.log("Olá mundo!");
  }
}

class Subclass extends Superclass {
  constructor() {
    super()
    this.isSuper = false
  }
}

const myFunc = (obj: Superclass) => {
  obj.sayHello();
  console.log(obj.isSuper ? "Super!" : "Sub!");
}

const obj1 = new Superclass();
const obj2 = new Subclass();

myFunc(obj1)
myFunc(obj2)

// --------------------

interface MyInterface {
  myNumber: number;

  myFunc(myParam: number): string;
}

class MyClass implements MyInterface {
  constructor(public myNumber: number) {}

  myFunc(myParam: number): string {
    return `Resultado: ${myParam + this.myNumber}`
  }
}

const myObj = new MyClass(10)
console.log(myObj.myFunc(20));

// --------------------

interface Logger {
  log(param: string): void
}

class ConsoleLogger implements Logger {
  log(param: string): void {
    console.log(`Imprimindo ConsoleLogger1: ${param}`);
  }
}

class ConsoleLogger2 implements Logger {
  log(param: string): void {
    console.log(`Imprimindo ConsoleLogger2: O Retorno: ${param}`);
  }
}

interface Database {
  logger: Logger;
  save(key: string, value: string): void;
}

class ExampleDatabase implements Database {
  constructor(public logger: Logger = new ConsoleLogger()) {}

  save(key: string, value: string): void {
    this.logger.log(`Salvando o valor ${value} para a chave ${key}`)
  }
}

const log1 = new ConsoleLogger()
const log2 = new ConsoleLogger2()

const db1 = new ExampleDatabase(log1)
const db2 = new ExampleDatabase(log2)
const db3 = new ExampleDatabase()

db1.save("idade", "27")
db2.save("nome", "Ruan")
db3.save("profissao", "Dev")