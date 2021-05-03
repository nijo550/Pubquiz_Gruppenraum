console.log('start at');
const fs = require('fs');

fs.readFileSync('student.json', (err, data) => {
    console.log(err);
    if (err) throw err;
    let student = JSON.parse(data);
    console.log(student);
    
});



let data = JSON.stringify(student, null, 2);
/*
fs.writeFile('student-3.json', data, (err) => {
    console.log(err);
    if (err) throw err;
    console.log('Data written to file');
});*/