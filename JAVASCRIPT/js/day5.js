const numbers = [1, 2, 3, 4, 5];

for (let index = 0; index < numbers.length; index++) {
  let element = numbers[index];
  console.log(element + " in position " + index);
  numbers[index] = element * index;
}

console.log(numbers);
