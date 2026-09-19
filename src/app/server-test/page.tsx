import React from 'react';

interface PageProps {
    id: number;
    name: string;
    email:string
}

const ServerTest = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    return (
        <div>
            <h1>Users</h1>
            {users.map((user: PageProps) => (
                <p key={user.id}>{user.name}</p>
            ))}

        </div>
    );
};

export default ServerTest;