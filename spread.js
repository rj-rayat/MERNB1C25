const numbers = [13, 55, 6,8,28, 10, 23];
console.log(...numbers);

const maxNumber = Math.max(...numbers);
console.log(maxNumber);


const number2 = [...numbers];
number2.push(99);

console.log(numbers)
console.log(number2)
