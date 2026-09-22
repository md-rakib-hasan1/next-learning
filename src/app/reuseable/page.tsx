import StudentCard from "./StudentCard";


const ReuseablePage = () => {
    return (
        <div>
            <h1>Students List</h1>
            <hr />
            <StudentCard name="Rakib" semester={5} department="CSE"/>
            <StudentCard name="Hasan" semester={4} department="EEE"/>
            <StudentCard name="Rahim" semester={6} department="BBA"/>
            
        </div>
    );
};

export default ReuseablePage;