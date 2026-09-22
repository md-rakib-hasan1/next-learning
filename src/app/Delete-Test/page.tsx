"use client";
import React from 'react';

const DeletePage = () => {
    const deleteStudent = async () => {
        const response = await fetch("/api/students", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: 3,
            }),
        });
        const data = await response.json();
        console.log(data);

    };

    return (
        <div>
            <h1>Students</h1>
            <button onClick={deleteStudent}>Delete Student</button>
        </div>
    );
};

export default DeletePage;