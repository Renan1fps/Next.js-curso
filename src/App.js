import Name from "./components/Name";
import {useState} from "react";

function App(){
  const [Student,setStudent] = useState("Renan")

  function handleChangeName(name){
    setStudent(name)
  }
 return(
   <div>
     <h1>teste </h1>
     <h2>Olá: {Student}</h2>

      {/*Função anonima para funçoes que recebem parametros */}
     <button onClick={ ()=> handleChangeName("Param") }> 
       Change Name
     </button>

     <Name 
     name = "renan"
     age = {30}      
     />

   </div>
 )
}

export default App;
