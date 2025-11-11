import React, { useState } from 'react';
import "./Card.css"

function UpdaterFunctions() {

    // const [car,setCar]=useState({year:2024,
    //                             make: "Ford",
    //                             model: "Mustang"})


    // const handleYearChange=(event)=>{
    //     setCar(c=>({...car, year: event.target.value}))
    // }
    // const handleMakeChange=(event)=>{
    //     setCar(c=>({...car, make: event.target.value}))
    // }
    // const handleModelChange=(event)=>{
    //     setCar(c=>({...car, model: event.target.value}))
    // }

    // return(
    //     <div  className="container">
    //         <div className="header">Updater Functions Example</div>
    //          <div className="info">My fav. Car is: {car.make} {car.model} {car.year}</div>
    //         <input type="text" value={car.make} onChange={handleMakeChange} />
    //         <input type="number" value={car.year} onChange={handleYearChange} />
    //         <input type="text" value={car.model} onChange={handleModelChange} />

    //     </div>
    // )
///////////////////////////////////////////
//     const Foods =['Apple', 'Banana', 'Mango'];
//     const [foodList, setFoodList] = useState(Foods);

//     function handleAddFood(){
//         const newFood = document.getElementById('Adder').value;
//         setFoodList(f=> [...f, newFood]);
//          document.getElementById('Adder').value = '';
    
//     }
//     function handleRemoveFood(index){
//         setFoodList(f=>f.filter((_, i) => i !== index));
//     }

//     return (
//         <div className="container">
//             <div className='header'> List Of Foods </div>
//             <ul className='info'>
// `               {foodList.map((food,index) =>(
//                         <li key={index} onClick={()=>handleRemoveFood(index)}>
//                             {food}
//                         </li>))}
//             </ul>
//             <input type="text" id='Adder' placeholder="Enter food item" />
//             <button onClick={handleAddFood}>Add Food</button>

//         </div>
//     )

////////////////////////////////////////////////////////////////////////

    const [cars, setCars] = useState([])
    const [carYear, setCarYear] = useState(new Date().getFullYear())
    const [carMake, setCarMake] = useState("")
    const [carModel, setCarModel] = useState("")

    function handleAddCar(){
        const newCar = {
            year : carYear,
            make : carMake,
            model : carModel
        }

        setCars((c) => [...c,newCar])
        setCarYear(new Date().getFullYear())
        setCarMake("")
        setCarModel("")
    }

    function handleCarYear(event){
        setCarYear(event.target.value)
    }   

    function handleCarMake(){
        setCarMake(event.target.value)

    }

    function handleCarModel(){
        setCarModel(event.target.value)
    }
    function handleRemoveCar(index){
        setCars( (c)=> c.filter((_,i)=> i !== index ))
    }


    return(
        <div>
            <h2>List of Car Objects</h2>
            <ul>
                {cars.map(   (car,index)  =>
               <li key={index} onClick={()=>handleRemoveCar(index)}>
                    {car.year} | {car.make} | {car.model}
               </li>
                )
               }

            </ul>
            <input type="number" value={carYear} onChange={handleCarYear} placeholder='Enter Year'></input>
            <input type="text" value={carMake} onChange={handleCarMake} placeholder='Enter Brand'></input>
            <input type="text" value={carModel} onChange={handleCarModel} placeholder='Enter Model'></input>
            <button onClick={handleAddCar}>Add Car</button>
        </div>
    )
}   


export  default UpdaterFunctions