import Name from "./components/Name";
import {useState} from "react";

function App(){
  const [aluno,setAluno,] = useState("Renan")

  function handleChangeName(name){
   setAluno(name)
  }
 return(
   <div>
     <h1>teste </h1>
     <h2>Olá: {aluno}</h2>

      {/*Função anonima para funçoes que recebem parametros */}
     <button onClick={ ()=> handleChangeName("Param") }> 
       Mudar nome
     </button>

     <Name 
     name = "renan"
     idade = {30}      
     />

   </div>
 )
}

export default App;
