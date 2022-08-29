const person = {
    name: 'hala',
    age: 23,
    contact: {
        phone: '242323232',
        email: 'hala@gmail.com'
    },
    education: {
        schoolName: 'anondomohon high school',
        subjects: [
            {name: 'bangla', mark: 67},
            {name: 'english', mark: 88},
            {name:'math', mark: 97}
        ]
    }
}

console.log(person.education.subjects[2].name)