// import React from 'react';

// const StudentsListpage = () => {

//     const students = ["Rakib", "Hasan", "Rahim", "Karim"];
//     return (
//         <div>
//             {students.map((student)=>(
//                 <p key={student}>{student}</p>
//             ))}
//         </div>
//     );
// };

// export default StudentsListpage;


"use client";

import React, { useEffect, useState } from "react";

type Student = {
  id: number;
  name: string;
  department: string;
  semester: number;
};

const StudentsPage = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);

  const getStudents = async () => {
    try {
      const response = await fetch("/api/students");

      const data: Student[] = await response.json();

      setStudents(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getStudents();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Students</h1>
      <hr />
      <br />

      {students.map((student) => (
        <div key={student.id}>
          <h2>{student.name}</h2>
          <p>{student.department}</p>
          <p>Semester: {student.semester}</p>
          <br />
        </div>
      ))}
    </div>
  );
};

export default StudentsPage;