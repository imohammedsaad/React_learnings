// function ClickEvents() {

//     const handleClick = () => {
//         console.log("Ouch")
//     }
//     const handleClickAgain = (name) => {
//         console.log("Ouch! " + name)
//     }

//     return(
//         <div>
//             {/* <button onClick={handleClick}>Click Me</button> */}
//             <button onClick={(e)=>handleClickAgain("Mohammed Saad")}>Click Me Again</button>
//         </div>
//     )

// }
// export default ClickEvents

function ClickEvents() {

    const imgURL="./src/assets/DP.jpg";
    const handleClick = (e) => {
        console.log("Image Clicked")
        e.target.style.display="none";
    }

    return(
        <div>
        {/* <img onClick={(e)=>handleClick(e)} src={imgURL}></img> */}
        <p>-----Uncomment the code to see working-----</p>
        </div>
    )
}
export default ClickEvents