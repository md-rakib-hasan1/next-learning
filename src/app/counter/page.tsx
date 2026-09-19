"use client";
import React, { useState } from 'react';

const CounterPage = () => {
    const[count, setCount]=useState<number>(0);

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={()=>setCount(count+1)}>Increase</button>
            
        </div>
    );
};

export default CounterPage;