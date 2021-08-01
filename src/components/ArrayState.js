import { useState } from "react";

function ArrayState(){
    const [input, setInput]= useState('');
    const [tasks, setTasks]= useState([
        "learn rect",
        "studding java"
    ])


    function handleCreateTask(e){
        e.preventDefault()
        setTasks([...tasks, input])
        setInput('')

    }

    return(
        <div>
            <h1>Tasks list</h1>
            <form onSubmit={handleCreateTask}>
              <label>Create task</label><br/>
               <input
               placeholder = "Write a task"
               value = {input}
               onChange = {(e)=> setInput(e.target.value)}
               />
               <button type="submit">create</button>
             </form>
             <br/>
             <ul>
                {tasks.map(task => (
                   <li key = {task}>
                       <h2>{task}</h2>
                   </li> 
                ))}
             </ul>

        </div>
    )
}
export default ArrayState;