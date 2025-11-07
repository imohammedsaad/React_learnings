function list() {

    // const fruits = ["apple", "banana", "cherry"];
    // fruits.sort();


    const marks =[
        {Id:141, name:"Saad", score:85},
        {Id:142, name:"Faisal", score:92},
        {Id:143, name:"Prajwal", score:78},
    ]

    // marks.sort((a,b)=> b.score - a.score);
    marks.sort((a,b)=> a.marks.localeCompare(b.marks));
    
    // const ListItems = fruits.map(fruit=><li>{fruit}</li>);
    // return (<ol>{ListItems}</ol>);
    
    const MarksList =marks.map(student=><li>{"R23EF"+ student.Id + " - " + student.name + " : " + student.score}</li> );
    return(<ul>{MarksList}</ul>)
}
export default list