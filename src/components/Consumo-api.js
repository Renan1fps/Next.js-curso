import { useEffect, useState } from "react";
import '../consumo.css'

function ConsumoApi(){
const [animes, setAnimes]= useState([])

function LoadAnimes(){
const url = 'http://localhost:8081/animes'
fetch(url)
.then(response => response.json())
.then(animesJson => setAnimes(animesJson))
}
useEffect(()=>{

   LoadAnimes()
}, [])
     return(

            <div className='card'>
                 {animes.map(animes =>{
                     return(
                         
                     <div key={animes.id} className='card2'>
                          <h1 className='text'>{animes.name}</h1>
                          <h2 className= 'text'>{animes.price}</h2>
                     </div>
                    
                     )
                 })}
            </div>

    )
    
}

export default ConsumoApi

