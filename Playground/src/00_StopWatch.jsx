import React, {useState, useEffect, useRef} from "react"


function StopWatch() {

    const[isRunning, setIsRunning] = useState(false);
    const[time, setTime] = useState(0);
    const intervalRef = useRef(null);
    const startTimeRef = useRef(null);

    useEffect(() => {

    if (isRunning)
        intervalRef.current = setInterval(
            () => {
                setTime(Date.now() - startTimeRef.current);
            }, 10);
    
            return () => { clearInterval (intervalRef.current);}
        }, [isRunning]);
    



function start(){
    setIsRunning(true);
    startTimeRef.current = Date.now() - time;

}

function stop(){
    setIsRunning(false);
}

function reset(){
    setIsRunning (false);
    setTime(0);
}

function formatTime(){
    let hours = Math.floor(time / 3600000);
    let minutes = Math.floor((time % 3600000) / 60000);
    let seconds = Math.floor((time % 60000) / 1000);
    let milliseconds = Math.floor((time % 1000) / 10);
    return `${padZero(hours)} : ${padZero(minutes)} : ${padZero(seconds)} . ${padZero(milliseconds)}`;

    function padZero(unit){
        return unit < 10 ? `0${unit}` : unit;
    }

}


    return (
        <div className="StopWatch">
            <div className="display"> {formatTime()}</div>
            <div className="controls">
                <button onClick={start} className="strt-btn"> Start </button>
                <button onClick={stop} className="stp-btn"> Stop </button>
                <button onClick={reset} className="reset-btn"> Reset </button>
            </div>

        </div>
    );
}
export default StopWatch;