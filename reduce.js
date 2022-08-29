const numbers = [1, 2, 3, 4, 5];

// let sum = 0;
// for (let item of numbers){
//     sum += item 
// }

const sum = numbers.reduce((previous, current) => {
    return previous + current;
},0)
const multiply = numbers.reduce((previous, current) => {
    return previous * current;
},1)

console.log(sum, multiply)