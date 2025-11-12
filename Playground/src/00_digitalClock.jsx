import React, { useState, useEffect } from 'react';

const DigitalClock = () => {
    const[time, setTime] = useState(new Date());

    useEffect(()=>{
        const intervalId = setInterval(()=>{setTime(new Date())}, 1000);
    
        return ()=> {clearInterval(intervalId); } 
    },[])


function formatTimeUnit(unit) {
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    const meridiem = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; 
    return` ${padZero(hours)} : ${padZero(minutes)} : ${padZero(seconds)} ${meridiem}`
}

function padZero(unit) {
    return unit < 10 ? `0${unit}` : unit;
}
    return (
        <div className="clock-container">
            <div className="clock">
                <span>
                    {formatTimeUnit()} </span>
            </div>
        </div>    
    )
};
    export default DigitalClock;