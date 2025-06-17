"use client";
import { useState } from "react";
export const Counter = ()=>{
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>Count : {count}</p>
            <b onClick={()=>setCount(count+1)}>Increment</b>
        </div>
    )
}