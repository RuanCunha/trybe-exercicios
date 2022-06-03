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
