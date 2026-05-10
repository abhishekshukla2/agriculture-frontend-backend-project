const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let students = [];

/* HOME ROUTE */

app.get("/", (req, res) => {
  res.send("Backend Running");
});

/* GET STUDENTS */

app.get("/students", (req, res) => {
  res.json(students);
});

/* ADD STUDENT */

app.post("/students", (req, res) => {

  const newStudent = {
    id: students.length + 1,
    name: req.body.name,
    studentClass: req.body.studentClass,
    roll: req.body.roll,
    father: req.body.father,
    mobile: req.body.mobile,
    address: req.body.address,
    shift: req.body.shift,
    vanUncle: req.body.vanUncle,
    vanMobile: req.body.vanMobile
  };

  students.push(newStudent);

  res.json({
    message: "Student Added",
    student: newStudent
  });

});

/* DELETE STUDENT */

app.delete("/students/:id", (req, res) => {

  const id = parseInt(req.params.id);

  students = students.filter(
    (student) => student.id !== id
  );

  res.json({
    message: "Student Deleted"
  });

});

/* PORT */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Running On Port ${PORT}`);
});