import { useState } from "react";

function StudentForm({ fetchStudents }) {

  const [formData, setFormData] = useState({

    name: "",
    studentClass: "",
    roll: "",
    father: "",
    mobile: "",
    address: "",
    shift: "",
    vanUncle: "",
    vanMobile: ""

  });

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value

    });

  };

  const addStudent = async () => {

    await fetch(
      "http://localhost:5000/students",
      {

        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify(formData)

      }
    );

    fetchStudents();

    setFormData({

      name: "",
      studentClass: "",
      roll: "",
      father: "",
      mobile: "",
      address: "",
      shift: "",
      vanUncle: "",
      vanMobile: ""

    });

  };

  return (

    <div className="form-container">

      <input
        type="text"
        name="name"
        placeholder="Student Name"
        value={formData.name}
        onChange={handleChange}
      />

      <select
        name="studentClass"
        value={formData.studentClass}
        onChange={handleChange}
      >

        <option value="">
          Select Class
        </option>

        <option>Nursery</option>
        <option>LKG</option>
        <option>UKG</option>

        <option>1st</option>
        <option>2nd</option>
        <option>3rd</option>
        <option>4th</option>
        <option>5th</option>
        <option>6th</option>
        <option>7th</option>
        <option>8th</option>
        <option>9th</option>
        <option>10th</option>

      </select>

      <input
        type="number"
        name="roll"
        placeholder="Roll Number"
        value={formData.roll}
        onChange={handleChange}
      />

      <input
        type="text"
        name="father"
        placeholder="Father Name"
        value={formData.father}
        onChange={handleChange}
      />

      <input
        type="text"
        name="mobile"
        placeholder="Parent Mobile"
        value={formData.mobile}
        onChange={handleChange}
      />

      <input
        type="text"
        name="address"
        placeholder="Address"
        value={formData.address}
        onChange={handleChange}
      />

      <select
        name="shift"
        value={formData.shift}
        onChange={handleChange}
      >

        <option value="">
          Select Shift
        </option>

        <option>Morning</option>
        <option>Day</option>

      </select>

      <input
        type="text"
        name="vanUncle"
        placeholder="Van Uncle Name"
        value={formData.vanUncle}
        onChange={handleChange}
      />

      <input
        type="text"
        name="vanMobile"
        placeholder="Van Uncle Mobile"
        value={formData.vanMobile}
        onChange={handleChange}
      />

      <button onClick={addStudent}>
        Add Student
      </button>

    </div>
  );
}

export default StudentForm;