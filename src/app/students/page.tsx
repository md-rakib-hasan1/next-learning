import React from 'react';

const StudentsListpage = () => {

    const students = ["Rakib", "Hasan", "Rahim", "Karim"];
    return (
        <div>
            {students.map((student)=>(
                <p key={student}>{student}</p>
            ))}
        </div>
    );
};

export default StudentsListpage;