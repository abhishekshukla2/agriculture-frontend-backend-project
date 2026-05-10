function StudentList({

  students,
  fetchStudents

}) {

  const deleteStudent = async (id) => {

    await fetch(

      `http://localhost:5000/students/${id}`,

      {
        method: "DELETE"
      }

    );

    fetchStudents();

  };

  const classes = [

    "Nursery",
    "LKG",
    "UKG",

    "1st",
    "2nd",
    "3rd",
    "4th",
    "5th",
    "6th",
    "7th",
    "8th",
    "9th",
    "10th"

  ];

  return (

    <div>

      {
        classes.map((classItem) => (

          <div key={classItem}>

            <h1 className="class-title">

              {classItem} Class Students

            </h1>

            <div className="student-container">

              {
                students

                  .filter(
                    (student) =>
                      student.studentClass
                      === classItem
                  )

                  .map((student) => (

                    <div
                      className="student-card"
                      key={student.id}
                    >

                      <h2>
                        {student.name}
                      </h2>

                      <p>
                        <strong>
                          Roll :
                        </strong>
                        {" "}
                        {student.roll}
                      </p>

                      <p>
                        <strong>
                          Father :
                        </strong>
                        {" "}
                        {student.father}
                      </p>

                      <p>
                        <strong>
                          Parent Mobile :
                        </strong>
                        {" "}
                        {student.mobile}
                      </p>

                      <p>
                        <strong>
                          Address :
                        </strong>
                        {" "}
                        {student.address}
                      </p>

                      <p>
                        <strong>
                          Shift :
                        </strong>
                        {" "}
                        {student.shift}
                      </p>

                      <p>
                        <strong>
                          Van Uncle :
                        </strong>
                        {" "}
                        {student.vanUncle}
                      </p>

                      <p>
                        <strong>
                          Van Mobile :
                        </strong>
                        {" "}
                        {student.vanMobile}
                      </p>

                      <button
                        className="delete-btn"
                        onClick={() =>
                          deleteStudent(student.id)
                        }
                      >

                        Delete Student

                      </button>

                    </div>
                  ))
              }

            </div>

          </div>
        ))
      }

    </div>
  );
}

export default StudentList;