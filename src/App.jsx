import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import VanReport from "./components/VanReport";

import "./App.css";

function App() {

  const [students, setStudents] = useState([]);

  const fetchStudents = () => {

    fetch("http://localhost:5000/students")

      .then((res) => res.json())

      .then((data) => {

        setStudents(data);

      });

  };

  useEffect(() => {

    fetchStudents();

  }, []);

  return (

    <div>

      <Navbar />

      <StudentForm
        fetchStudents={fetchStudents}
      />

      <VanReport
        students={students}
      />

      <StudentList
        students={students}
        fetchStudents={fetchStudents}
      />

    </div>
  );
}

export default App;