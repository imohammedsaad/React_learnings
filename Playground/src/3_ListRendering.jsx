// function list() {

//     // const fruits = ["apple", "banana", "cherry"];
//     // fruits.sort();


//     const marks =[
//         {Id:141, name:"Saad", score:85},
//         {Id:142, name:"Faisal", score:92},
//         {Id:143, name:"Prajwal", score:78},
//     ]

//     // marks.sort((a,b)=> b.score - a.score);
//     marks.sort((a,b)=> a.marks.localeCompare(b.marks));
    
//     // const ListItems = fruits.map(fruit=><li>{fruit}</li>);
//     // return (<ol>{ListItems}</ol>);
    
//     const MarksList =marks.map(student=><li>{"R23EF"+ student.Id + " - " + student.name + " : " + student.score}</li> );
//     return(<ul>{MarksList}</ul>)
// }
// export default list

////////////////////////////////////////////////////
//using props

function List(props) {

    const subject =props.subject || [];
    const Students =props.Students || [];

    return(
        <div>
            <h1>LIST rendered using Props:</h1>
            <h3>Subjects List:</h3> 
            <ul>
                {subject.map((sub)=>
                    <li key={sub.Id}>{sub.name}</li>    
                )}
            </ul>

            <h3>Students List:</h3>
            <ul>
                {Students.map((stu)=>
                    <li key={stu.Id}>{stu.name}</li>    
                )}
            </ul>
        </div>
    )
}
export default List 
