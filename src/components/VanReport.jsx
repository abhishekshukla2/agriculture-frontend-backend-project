function VanReport({ students }) {

  const vanData = {};

  students.forEach((student) => {

    const vanName = student.vanUncle;

    if (!vanData[vanName]) {

      vanData[vanName] = {

        vanUncle: vanName,

        vanMobile: student.vanMobile,

        totalStudents: 0

      };
    }

    vanData[vanName].totalStudents++;
  });

  return (

    <div>

      <h1 className="class-title">
        Van Report
      </h1>

      <div className="student-container">

        {
          Object.values(vanData).map(
            (item, index) => (

              <div
                className="student-card"
                key={index}
              >

                <h2>
                  {item.vanUncle}
                </h2>

                <p>
                  <strong>
                    Mobile :
                  </strong>
                  {" "}
                  {item.vanMobile}
                </p>

                <p>
                  <strong>
                    Total Students :
                  </strong>
                  {" "}
                  {item.totalStudents}
                </p>

              </div>
            )
          )
        }

      </div>

    </div>
  );
}

export default VanReport;