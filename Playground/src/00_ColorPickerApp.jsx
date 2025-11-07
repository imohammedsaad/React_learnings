import React, {useState} from "react"
import "./Card.css"

function ColorPickerApp() {
    const [color, setColor] = useState("#FFFFFF");

    const handleColorChange = (event) => {
        setColor(event.target.value);
    }

    return (
        <div className="container">
            <h3 className="title">Color Picker App</h3>
            Choose Color: 
            <br/>
            <input type="color" value={color} onChange={handleColorChange}/>
            <br/>
            <p className="info"> The selected color is {color} </p>
        </div>
    )
}
export default ColorPickerApp