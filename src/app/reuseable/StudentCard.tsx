interface StudentCardProps{
    name:string;
    semester:number;
    department:string;
}

const StudentCard = ({name,semester,department}: StudentCardProps) => {
    return (
        <div>
            <h1>{name}</h1>
            <p>Semester: {semester}</p>
            <p>Department: {department}</p>
        </div>
    );
};

export default StudentCard;