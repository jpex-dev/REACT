/* CONDITIONALS

used to make decisions based on different conditions

IF
IF ELSE
IF ELSE IF ELSE
SWITCH
TERNARY OPERATORS (check day 3)

IF

if(condition){

}
*/

let num = 3;
if (num > 0) {
  console.log(num + " is a positive number");
}
// the condition was true and the block of code was executed

let IsRain = true;

if (IsRain) {
  console.log("IS RAINING MOTHERFUCKER");
}

/*

IF ELSE

if(condition){
    //true
} else {
    //false
}


for multiple we have:
IF ELSE IF ELSE

if (condition) {
    // code
} else if (condition) {
    // code
} else {
    // code
}

OR EVER: SWITCH
switch(caseValue){
  case 1:
    // code
    break
  case 2:
   // code
   break
  case 3:
   // code
   break
  default:
   // code
}


nice example of use condition in the case
*/

let numm = prompt("Enter number");
switch (true) {
  case numm > 0:
    console.log("Number is positive");
    break;
  case numm == 0:
    console.log("Numbers is zero");
    break;
  case numm < 0:
    console.log("Number is negative");
    break;
  default:
    console.log("Entered value was not a number");
}
