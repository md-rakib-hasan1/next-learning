// Normal Form Handling:

// "use client";
// import React from 'react';

// const LoginPage = () => {
//     const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//          event.preventDefault();

//         const formData = new FormData(event.currentTarget);

//         const name = formData.get("name");
//         const email = formData.get("email");
//         const password = formData.get("password");

//         console.log("Name:", name);
//         console.log("Email:", email);
//         console.log("Password:", password);
//     }
//     return (
//         <div>
//             <h1>Login</h1>
//             <br />
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label >Name:</label>
//                     <input type="text" name='name' />
//                 </div>
//                 <div>
//                     <label>Email:</label>
//                     <input type="email" name="email" />
//                 </div>
//                 <div>
//                     <label>Password:</label>
//                     <input type="password" name="password" />
//                 </div>
//                 <button type='submit'>Login</button>
//             </form>

//         </div>
//     );
// };

// export default LoginPage;


//Controlled Input:

"use client";

import React, { useState } from 'react';

const LoginPage = () => {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError]=useState<string>("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event?.preventDefault();

        setError("");

        if(name === ""){
            setError("Name is required");
            return;
        }

        if(email === ""){
            setError("Email is required");
            return;
        }
        if(password === ""){
            setError("Password is required");
            return;
        }
        if(password.length<6){
            setError("Password must be at least 6 characters");
            return;
        }

        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Password:", password);
    }
    return (
        <div>
            <h1>Login Form</h1>
            <br />

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                {error && <p>{error}</p> }

                <button type='submit'>Login</button>
            </form>

        </div>
    );
};

export default LoginPage;