"use client";
import React, { useState } from 'react';

const CounterPage = () => {
    const[count, setCount]=useState<number>(0);

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={()=>setCount((prev)=> prev + 1)}>Increase</button><br />
            {/* <button onClick={()=>setCount(count + 1)}>Increase</button> both are correct. */}
            <button onClick={()=>setCount((prev)=>prev - 1)}>Decrease</button><br />
            <button onClick={()=>setCount(0)}>Reset</button>
            
        </div>
    );
};

export default CounterPage;