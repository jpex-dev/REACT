/*booleans
 TRUE OR FALSE

 we can declare variables with in
 or:
 let truValue = 4 > 3


 TRUTHY VALUES:

 all numbers except zero
 all strings expect empty strings
 The boolean true

 FALSY 
-0
-null
-undifined
-the boolean false
-empty stings

Arithmetic Operators    +   -   *   /   %   **

Assignement
Operator        Example         Same as
=               x=y              x=y
+=              x+=y             x=x+y
-=              x-=y             x=x-y
...


COMPARATION
== (Equivalent)     === (Exactly equal)     !=  >   <   >=  <=

0 == '' -> true
0 === '' -> false

LOGICAL 
and &&
or || 
*/
let check = !(4 > 3); //fasle
console.log(check);
check = 4 > 3; //true
console.log(check);

let islightOn = true;
let islightOff = !islightOn; //false
console.log(islightOff);

let isMarried = !false; //true
console.log(isMarried);
/*

INCREMMENT == Desencremment
*/
let count = 0;
console.log(count++); //0
console.log(count); //1

// TERNARY
let IsRain = true;

IsRain ? console.log("You need coat") : console.log("No, u dont need it");
//condition 1 is true condition2 is false

//WINDOWS METHODS

// we have the alert and the next two:

const agree = confirm("Are you sure you like to delete? ");
console.log(agree); //if ok is true if cancel is false

let number = prompt("Enter number", "number goes here");
console.log(number); // show a input

// DATE OBJECT

const now = new Date();
console.log(now); // Thu Aug 10 2023 21:55:11 GMT+0100 (Hora de verão da Europa Ocidental)

console.log(now.getFullYear()); // 2023
console.log(now.getMonth()); // numbers from 0 to 11
console.log(now.getDate()); //1 to 31
console.log(now.getDay()); // sunday is 0 and saturday is 6
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());


// date now with a nice format
const year = now.getFullYear(); // return year
const month = now.getMonth() + 1; // return month(0 - 11)
const date = now.getDate(); // return date (1 - 31)
const hours = now.getHours(); // return number (0 - 23)
const minutes = now.getMinutes(); // return number (0 -59)

console.log(`${date}/${month}/${year} ${hours}:${minutes}`); // 10/8/2023 21:58
