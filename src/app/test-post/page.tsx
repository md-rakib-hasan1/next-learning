"use client";

import React from "react";

const TestPostPage = () => {
  const addStudent = async () => {
    const response = await fetch("/api/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id:4,
        name: "Jamal",
        department: "CSE",
        semester: 5,
      }),
    });

    const data = await response.json();

    console.log(data);
  };

  return (
    <div>
      <button onClick={addStudent}>Add Student</button>
    </div>
  );
};

export default TestPostPage;