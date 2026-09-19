"use client";

import { useState } from "react";

const CounterPage=()=>{
    const[count, setCount]=useState<number>(0);

    return (
        <div>
            <button onClick={()=>setCount(count+1)}>
                conut:{count}
            </button>
        </div>
    )
}
export default CounterPage;