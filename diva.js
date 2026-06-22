const express = require('express');
const app = express();

app.use(express.json());

let students = [
  { id: 1,
     name: 'Divakar kumar', age: 22, course: 'B.Tech' }
];

app.post('/students', (req, res) => {
  const newStudent = {
    id: students.length + 1,
    name: req.body.name,
    age: req.body.age,
    course: req.body.course
  };
  students.push(newStudent);
  res.status(201).json(newStudent);
});

app.get('/students', (req, res) => {
  res.json(students);
});

app.get('/students/:id', (req, res) => {
  const student = students.find(s => s.id == req.params.id);
  res.json(student);
});

app.put('/students/:id', (req, res) => {
  const id = Number(req.params.id);
  const student = students.find(s => s.id == id);
  
  student.name = req.body.name;
  student.age = req.body.age;
  student.course = req.body.course;
  
  res.json(student);
});

app.delete("/students/:id", (req, res) => {
  const id = Number(req.params.id);
  students = students.filter(s => s.id != id);
  res.json({ message: "Student deleted successfully" });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
