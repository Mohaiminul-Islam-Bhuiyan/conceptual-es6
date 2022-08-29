const numbers = [12, 13, 45, 56, 34]

const names = ['hasan', 'mohi', 'kamal', 'jamal', 'damal']

for (let item of numbers){
    // console.log(item);
}

numbers.forEach(item => console.log(item))
numbers.map(item => console.log(item))

const a = numbers.map(item => item * 2) // returns array
const b = numbers.forEach(item => item * 2) // no return

console.log(a, b)

const marks = [12, 13, 45, 56, 34];

const result = marks.find(item => item > 20); // only first element 
const all = marks.filter(item => item > 20); // all the elements

// difference btween == and === 
//2 == '2' // only checks value
//2 === '2' // checks value and data type both

const multipleCondition = marks.filter(item => item > 20 && item % 2 === 0)
console.log(result, all)