const students = [
    {
        student1: {
            name: 'abul',
            age: '17',
            isMale: true,
            education: {
                class: 7,
                subjects: ['bangla', 'english', 'math'],
                school: 'durgapur high school',
                marks: {
                    bangla: 35,
                    english: 23,
                    math: 36
                }
            }
        },
        student2: {
            name: 'jarina',
            age: '19',
            isMale: false,
            education: {
                class: 6,
                subjects: ['bangla', 'english', 'math'],
                school: 'Rajshahi high school',
                marks: {
                    bangla: 95,
                    english: 73,
                    math: 36
                }
            }
        },
        student3: {
            name: 'habul',
            age: '15',
            isMale: true,
            education: {
                class: 9,
                subjects: ['bangla', 'english', 'math'],
                school: 'Dhaka high school',
                marks: {
                    bangla: 75,
                    english: 53,
                    math: 96
                },
            }
        }
    }
]

students.map(student => {
    for (let item in student){
        const {name, age, isMale, education} = student[item]
        const {subjects} = education;

        const info = `
        My name is: ${name}
        My age is: ${age}
        My gender is: ${isMale === true ? 'Male' : 'Female'}
        My subjects are: ${subjects.map(subject => subject)}
        `
        console.log(info)
    }
})