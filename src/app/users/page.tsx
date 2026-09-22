interface UserPageProps{
    id:number;
    name:string;
    email:string;
}
const UserPage = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if(!response.ok){
        throw new Error("Failed to fetch users");
    }
    const users = await response.json();

    return (
        <div>
            <h1>Users</h1>
            {users.map((user: UserPageProps ) => (
                <div key={user.id}>
                    <p >{user.name}</p>
                    <p >Email: {user.email}</p>
                    <hr /><br />
                </div>
            ))}
        </div>
    );
};

export default UserPage;