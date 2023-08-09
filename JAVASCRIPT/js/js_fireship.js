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

//remove duplicators in a list
const uniq = new Set(list);
console.log(uniq);

// is a dictonary, for memory reduction use WeakMap
const dict = new Map([
  ["foo", 1],
  ["bar", 2],
]);

//NON-BLOCKING EVENT LOOP
// synchornous -> line by line, till the previous finish
// asynchornous -> run in a separeted therad pool while the rest of the app continous is lika a multi tasking EG: settimeout

setTimeout(() => {
  console.log();
}, 5000);

/*

  callback function, beacuse will cameback later

 promise -> show a resolte of a asynchornous operation  -> resolve or reject ,  can use  methods like .then() and .catch() for possible outcomes

async function -> is a async function, we use use await, to "pause the function"
try and catch

to share files between files
export and import 
EG :
 


import hi from "../from_react/script.js";

hi();

 have the following code in a JS file:
need to have the same sintax
function hi() {
  console.log("sup dude");
}

export default hi;


------

can import just variavbles using export value ...;  and import {} fro ...

npm appers in mode_module
package files



document.querySelector for take some css elemente -> querySelectorAll for all elements


EG


const btn = document.querySelector(".button");

btn.addEventListener("click", () => {
  console.log("clicked");
  document.body.style.backgroundColor = "red";
});

in frameworks:
 UI = f (state) f as a function
 embed html and css in components

 Node.js runtime in server.

 ---------------------------------------

 concat -> joins strings
 */

let namee = "John";
let surname = "whickk";

let fullname = "";
fullname = fullname.concat(namee, surname);

console.log(fullname);

console.log(namee.startsWith("s"));
console.log(namee.startsWith("j"));

console.log(namee.endsWith("n"));
console.log(namee.endsWith("l"));

console.log(namee.includes("hello"));
console.log(namee.includes("jo"));

//return the first position of the subsstring. If doenst it returns -1
console.log(namee.indexOf("o"));
console.log(namee.indexOf("hello"));

console.log(namee.length);

console.log(namee.repeat(2));

console.log(namee.replace("John", "JOHNN"));

//search -> return the index of the first match
console.log(namee.search("h"));

//split a string in a specified place
console.log(namee.split(""));

//two arguments , the starting index and the number to slice
console.log(namee.substr(1, 4));

console.log(namee.toLowerCase());
console.log(namee.toUpperCase());

//typeof

console.log(typeof namee);

//String to int

let numb = "10";
let numInt = parseInt(numb);
//OR Number(numb)
//OR +num
// EVERYTIME WANNA CHANGE A VARAIBLE USE PARSE...

//NON-primitive data types like arrays, dict, list ... cannot be compared by values

let numberss = [1, 2, 3];
let num = [1, 2, 3];
console.log(num == numberss);

//instead:

let numbersss = [1, 2, 3];

let numm = numbersss;

console.log(numbersss == numm);
