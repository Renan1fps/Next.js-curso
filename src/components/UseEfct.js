import { useState, useEffect } from "react"

function UseEfct(){
const [input, setInput] = useState('');
const [tasks, setTasks] = useState([]);

function handleRegister(e){
 e.preventDefault()
 setTasks([...tasks, input])
 setInput('')
}

//atenção na ordem das funções pois influencia 
useEffect(()=>{
    const getTasksLocalStorage = localStorage.getItem("@tasks")
    if(getTasksLocalStorage){
        console.log(getTasksLocalStorage)
        setTasks(JSON.parse(getTasksLocalStorage))
    }
   }, [])

useEffect(() => {
 localStorage.setItem("@tasks", JSON.stringify(tasks))
}, [tasks])



    return(
     <div>
         <form onSubmit={handleRegister}>
             <label>Task names</label><br/>
             <input
             placeholder = "write your name"
             value = {input}
             onChange = {(e)=> setInput(e.target.value)}
             />
             <br/>
             <button type="submit">Submit</button>
         </form> 
         <br/>
         <ul>
             {tasks.map(task => (
                 <li key= {task}>
                     {task}
                 </li>
             ))}
         </ul>
     </div>
    )
}

export default UseEfct