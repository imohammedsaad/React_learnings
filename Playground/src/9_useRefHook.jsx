// useState= for state management, render on state change
// useEffect= for side effects, run after render
// useRef= for mutable values that do not trigger re-renders

import React, { useState, useEffect, useRef} from "react";

function MyComponent() {
   
   const inputRef = useRef(null);
   
    // const [number, setNumber] = useState(0);

    useEffect(() => {
        console.log("MyComponent rendered");
    })


//     function handleIncrement() {
//         inputRef.current = inputRef.current + 1;
//         console.log("Ref Value:", inputRef.current);
// ``    }


    function handleIncrement() {
        inputRef.current.focus();
        inputRef.current.style.backgroundColor = "white";
    }

    return (
        <div>
            {/* <h3 style={{color:"white"}}> Number: {inputRef.current[0]} </h3> */}
            <button onClick={handleIncrement}> Increment </button>
            <input ref={inputRef}/>
        </div>
    );
}
export default MyComponent;