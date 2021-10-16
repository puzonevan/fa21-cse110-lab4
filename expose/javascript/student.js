let student = {
    name: 'Sarah', 
    major: 'Computer Science', 
    'Grad Year': '2022', 
    greeting: function() {
        console.log('Hello World');
    },
    'Favorite Teacher': {
        name: 'Thomas Powell', 
        course: 'CSE 110'
    },
    courseLoad: ['CSE 110', 'CSE 132']
}

console.log(student.courseLoad[0]);