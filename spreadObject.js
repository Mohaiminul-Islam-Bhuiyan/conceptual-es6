const person = {
    name: 'Hero Alom',
    age: 34,
    p: [1, 2, 4, 6]
}

const user = {
    phone: '444555',
    address: 'burir bari'
}

const {name: myName, age, p: num} = person

for (let i of num){
    console.log(i);
}

console.log(myName, age , num)