// arrow function and default parameters

function run(x){
    // console.log('this is a function')
    return x * 2;
}

// const > name > equal sign > parmeter > arrow > function body 

const add = y =>  y * 2;
const add2 = (x, y) =>  y * 2;

const add3 = (x, y) => {
    return x+y;
}
const add4 = (x = 0, y = 1) => x+y;

// console.log(add4(3,2))
// console.log(add(4))
// console.log(run(2))

const square = x => x * x;
const squareShort = x => x**2;

const x = [2, 3, 4]

const squre = x => {
    const result = x.map(item => item ** 2)
    return result;
}

console.log(squre(x))
console.log(squareShort(9))
console.log(square(4))