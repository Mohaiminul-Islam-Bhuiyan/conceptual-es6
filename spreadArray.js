const number = [2, 4, 5, 7, 23, 8]

console.log(Math.min(parseInt(number)))

console.log(number)
console.log(...number)
console.log(Math.min(...number))


const numbers = [32, 45, 67];
const numberAdded = [99, ...number, ...numbers];
console.log(numberAdded);

// destructure array

const [a, b, ...rest] = number;
console.log(a, b, rest)

const a1 = [1, 2, 3, 4];
// const b1 = a1;
// const b1 = [];
const b1 = [...a1];

// for (let item of a1){
//     b1.push(item);
// }

a1.push(44)
b1.push(23)

console.log('a1 array:',a1)
console.log('b1 array:',b1)



