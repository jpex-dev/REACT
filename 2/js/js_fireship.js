// const -> will have the same value
// let -> pretend to change

const letter = "a";
let number = 3;

// a variable can be undefined or null

let undef;
console.log(undef);
undef = null;
console.log(undef);

// e.g. if a function

function add(a, b) {
  return a + b;
}

// this. -> where you are

//OOP
//e.g. of a object

let human = {
  dna: "AAGT",
  name: "Jeff",
  born: Date.now(),
  walk() {
    console.log("walking");
  },
};

// Best way to get a prototype:

Object.getPrototypeOf(human);

// class template for creating objects. They encapsulate date with code to work on the date
// Class can define constructor
// Constructor is a special function that creates and initializas an object instance of a class

class Human {
  //construtor

  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  //getter for name
  // get is a function without arguments, used to access the properties of an obejct
  get name() {
    return this._name;
  }

  // setter for name
  // set is a function with one argument used to change the values of an object
  set name(newName) {
    if (typeof newName === "string") {
      this._name = newName;
    } else {
      throw new Error("NAme must be a string.");
    }
  }

  // getter for age

  get age() {
    return this._age;
  }
}

//instance of the human class
// is adding a new object

const person1 = new Human(25, "y");

// showing the object
console.log(person1.name);
console.log(person1.age);

// static ?

const list = ["foo", "bar", "bar"];
console.log(list);
console.log(list[0]);
