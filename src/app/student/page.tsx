import React from 'react';
import StudentCard from './studentCard';

const StudentPage = () => {
    return (
        <div>
            <h1>Student Details</h1>
            <StudentCard
            name="Rakib Hasan"
            semester="5th"/>
        </div>
    );
};

export default StudentPage;