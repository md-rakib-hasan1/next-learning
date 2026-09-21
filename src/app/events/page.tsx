"use client";

import React, { useState } from 'react';

const EventPage = () => {
    const[message, setMessage]=useState("");

    return (
        <div>
            <button onClick={()=>console.log("Button Clicked")}>Click Me</button><br />
            <button onClick={()=>setMessage("Hello, Rakib!")}>Show Message</button>
            <p>{message}</p>
            
        </div>
    );
};

export default EventPage;