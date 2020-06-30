let myName: string = "Max";
console.log(myName);

myName = "Manu";
console.log(myName);

console.log("----------------");

const printMyName = (name: string, age: number): void => {
  console.log(name, age);
};
printMyName("Max", 28);

const multiply = (number) => number * 2;
console.log(multiply(2));

console.log("----------------");

class Human {
  gender: string;
  constructor() {
    this.gender = "male";
  }

  printGender() {
    console.log(this.gender);
  }
}

class Person extends Human {
  name: string;
  constructor() {
    super();
    this.name = "Max";
    this.gender = "female";
  }

  printMyName(): void {
    console.log(this.name);
  }
}

const person = new Person();
person.printMyName(); // Max
person.printGender(); // Female

console.log("----------------");

class Zmogus {
  gender: string = "vaikinas";

  printGender = (): void => {
    console.log(this.gender);
  };
}

class Asmenybe extends Zmogus {
  name: string = "Maksas";
  gender: string = "mergina";

  printMyName = (): void => {
    console.log(this.name);
  };
}

const asmenybe = new Asmenybe();
asmenybe.printMyName(); // Maksas
asmenybe.printGender(); // mergina

console.log("----------------");

const numbers: number[] = [1, 2, 3];
const newNumbers = [...numbers, 4];
console.log(newNumbers);

const personn = {
  name: "Max",
};
const newPersonn = {
  ...personn,
  age: 28,
};
console.log(newPersonn);

const filter = (...args: number[]): number[] => {
  return args.filter((el) => el === 1);
};
console.log(filter(1, 2, 3));

console.log("----------------");

const numberss: number[] = [1, 2, 3];
const [num1, , num3]: number[] = numberss;
console.log(num1, num3);

console.log("----------------");

const personnn = {
  name: "Max",
};

const secondPerson = {
  ...personnn,
};

person.name = "Manu";

console.log(secondPerson);

console.log("----------------");

const numbersss: number[] = [1, 2, 3];

const doubleNumArray = numbersss.map((num): number => {
  return num * 2;
});

console.log(numbersss);
console.log(doubleNumArray);
