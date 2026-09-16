import React from 'react';
interface PageProps{
    params: Promise<{id:string}>;
}
const UserDetails =async ({params}:PageProps) => {
    const {id}= await params;
    return (
        <div>
            <h1>User Details</h1>
            <p>User Id: {id}</p>
            
        </div>
    );
};

export default UserDetails;