import React, {useState} from "react";

function ToDoApp() {

    const [tasks, setTask] = useState(["Eat","Sleep","code"]);
    const [newTask, setNewTask] = useState();


function handleInputChange(event){
    setNewTask(event.target.value)
}

function addTask(){
    if(newTask.trim() === ''){
        return; // Prevent adding empty tasks
    }
    setTask(t=> [...t, newTask]);
    setNewTask('');
}

function deleteTask(index){
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTask(updatedTasks);
}

function moveTaskUp(index){
    if(index > 0) {
    const updatedTasks = [...tasks];
    [updatedTasks[index], updatedTasks[index - 1]] = 
    [updatedTasks[index - 1], updatedTasks[index]];
    setTask(updatedTasks);
    }
}

function moveTaskDown(index){
    if(index >0) {
    const updatedTasks = [...tasks];
    [updatedTasks[index], updatedTasks[index + 1]] = 
    [updatedTasks[index + 1], updatedTasks[index]];
    setTask(updatedTasks);
    }
}

return(
    <div className="counter-container"> TO-DO LIST
    <div>
        <input
            type="text"
            placeholder="Enter a task"
            value={newTask}
            onChange={handleInputChange}
        />

        <button 
        className="add-btn"
        onClick={addTask}>ADD TASK</button>
    
        <ol>
            {tasks.map((task,index)=>
                <li key={index}>
                    <span className="text"> {task}</span>
                    <button
                     className="del-btn"
                     onClick={()=>deleteTask(index)}
                     >Delete</button>
                    <button
                     className="up-btn"
                     onClick={()=>moveTaskUp(index)}
                     >Move Up</button>
                    <button
                     className="down-btn"
                     onClick={()=>moveTaskDown(index)}
                     >Move down</button>
                </li>
            )}
        </ol>
    </div>
    <ul>
    <li id="index" value={tasks} onChange={handleInputChange}>
    
    </li>
    </ul>
    
    </div>
)
}

export default ToDoApp