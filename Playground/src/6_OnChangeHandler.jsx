import React, {useState} from "react";

function OnChangeHandler() {

    const [inputValue, setInputValue] = useState("");
    const [paymentMode,setpaymentMode] = useState("UPI");
    const [shipMode, setShipMode] = useState();

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const handlePaymentMode = (event) => {
        setpaymentMode(event.target.value)
    }
    const handleShipMode = (event) => {
        setShipMode(event.target.value)
    }
    return(

        <div className="container">
            <h3 className="title"> Text Prediction</ h3>
            <input type="text" value={inputValue} onChange={handleInputChange}/>
            <p className="info">Your are typing: {inputValue}</p>

            <select value={paymentMode} className="counter-container " onChange={handlePaymentMode}>
                <option value="UPI">UPI</option>
                <option value="Visa"> Visa </option>
                <option value="Master Card"> Master Card </option>
                <option value="Gift Card"> Gift Card </option>
            </select>
            <p className="info">Selected payment mode:  {paymentMode}</p>

            <br/>
            <label>  
                <input type="radio" value={"Delivery"} 
                                checked={shipMode==="Delivery"}
                                onChange={handleShipMode}/>
                Delivery  
            </label>
            <br/>
            <label>  
                <input type="radio" value={"Pick-Up"} 
                                checked={shipMode==="Pick-Up"}
                                onChange={handleShipMode}/>
                Pick-Up  
            </label>
        <p className="info">Selected:  {shipMode}</p>


        </div>


    )
}
export default OnChangeHandler