import React, {useState} from "react";
import "./Card.css"

function Counter(){

    const [count, SetCount] = useState(0)

    const increment =()=>{
        // SetCount(count+1)
        // OR using updater function
        SetCount((c) => c + 1);
    }

    const decrement =()=>{
        SetCount(count-1)
    }
    const reset =()=>{
        SetCount(0)
    }
    return(
        <div className="counter-container">
            <h1>Counter</h1>
            <h2>{count}</h2>
            <button className="btnn" onClick={increment}> +1 </button>
            <button className="btnn" onClick={decrement}> -1 </button>
            <button className="btnn reset" onClick={reset}> RESET </button>

        </div>
    )



}
export default Counter;