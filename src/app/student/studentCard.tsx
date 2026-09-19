// "use client";

import React from 'react';
interface StudentProps{
    name:string;
    semester:string;
}

const StudentCard = ({name,semester}:StudentProps) => {
    return (
        <div>
            <h2>Name: {name}</h2>
            <p>Semester: {semester}</p>
            
        </div>
    );
};

export default StudentCard;