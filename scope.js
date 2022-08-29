// 1. global scope (can be accessed from anywhere of the program)
// 2. local scope or functional scope (can be accessed inside a function)
// 3. block scope (can be accessed from that block)

let x = 5;

{
    x = 30;
    console.log('inside block:', x)
}

console.log('outside block:',x);

function add(){
    const total = 3 + 5;
    console.log('inside function:', total)
}

console.log(total);
add();