"use client";

import React, { useState } from 'react';

const ConditionalRenderingPage = () => {
    const [isLoggedIn, setIsLoggedIn]=useState<boolean>(false);

   
    return (
        <div>
            <button onClick={()=>setIsLoggedIn(true)}>Login</button>
            {isLoggedIn ? <h1> Welcome Rakib!</h1>: <h1>Please Login.</h1> }  
        </div>
    );
};

export default ConditionalRenderingPage;