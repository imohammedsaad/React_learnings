
import React, {useState} from "react"
import "./Card.css"
function UseStateHook() {
    
    const [name, SetName] = useState("Guest");
    const [age, SetAge] = useState(0);
    const [Expertise, SetExpertise] = useState("NaN");

    const nameOf =()=>{
        SetName("Mohammed Saad")
    }
    const AgeOf = ()=>{
        SetAge(age+1)
    }
    const ExpertIn = ()=>{
        SetExpertise("MERN STACK")
    }
    const reset = ()=>{
        SetName("Guest");
        SetAge(0);
        SetExpertise("NaN");
    }
    return (
        <div className="container">
            <h3 className="title"> STUDENT-WISE EXPERTISE:</h3>
            <div className="info">
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Expertise: {Expertise}</p>
            </div>
            <div className="btn-group">
            <button onClick={nameOf}> Set Name </button>
            <button onClick={AgeOf}> Set Age </button>
            <button onClick={ExpertIn}> Set Expertise </button>
            <button onClick={reset} style={{backgroundColor:"red", color:"white"}}> RESET </button>
            </div>
        </div>
    )
}
export default UseStateHook