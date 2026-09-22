"use client";

import React from "react";

const StudentsPage = () => {
  const addStudent = async () => {
    const response = await fetch("/api/persons", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Karim",
        department: "CSE",
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.log("Error:", data.message);
      return;
    }

    console.log("Success:", data);
  };

  return (
    <div>
      <button onClick={addStudent}>
        Add Student
      </button>
    </div>
  );
};

export default StudentsPage;