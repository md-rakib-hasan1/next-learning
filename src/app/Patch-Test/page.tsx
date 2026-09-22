"use client";

import React from "react";

const StudentsPage = () => {
  const updateStudent = async () => {
    const response = await fetch("/api/students", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: 2,
        semester: 6,
      }),
    });

    const data = await response.json();

    console.log(data);
  };

  return (
    <div>
      <h1>Students</h1>

      <button onClick={updateStudent}>
        Update Student
      </button>
    </div>
  );
};

export default StudentsPage;