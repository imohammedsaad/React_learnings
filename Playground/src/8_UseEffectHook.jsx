import React,{useState, useEffect, use} from "react";

function UseEffectHook(){
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("black");

    useEffect(()=>{
        document.title = `${count} ${color}`;
    },[color]);

    function handleCountIncrement(){
        setCount(c=>c+1);
    }
    function handleCountDecrement(){
        setCount(c=>c-1);
    }
    function handleColorChange(event){
        setColor(event.target.value);
    }

    return(
        <div>
            <h3 style={{color: color}}> Count: {count} </h3>
            <button onClick={handleCountIncrement}> Increment </button>
            <button onClick={handleCountDecrement}> Decrement </button>
            <br/>
            <input type="color" value={color} onChange={handleColorChange}/>
        </div>
    )
}
export default UseEffectHook;