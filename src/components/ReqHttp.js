import { useEffect, useState } from "react"
import '../reqStyle.css'

function ReqHttp(){

const [nutri, setNutri] = useState([])

function handleLoadPost(){
const url = "https://sujeitoprogramador.com/rn-api/?api=posts"
fetch(url)
.then((posts)=> posts.json())
.then((postsJson)=> setNutri(postsJson))
}

useEffect(()=>{

handleLoadPost()

}, [])

    return(
       <div className="container">
            <header>
                <strong>React request</strong>
            </header>
            {nutri.map((item)=>{
                return(
                    <article key={item.id} className="post">
                          <strong className="title">{item.titulo}
                          </strong>
                          <img 
                          src={item.capa} 
                          alt={item.title}
                          className="image"
                          />
                          <p className="subtitulo">
                              {item.subtitulo}
                          </p>
                          <a className="botao">Acess</a>

                    </article>
                )
            })}
       </div>
    )
}

export default ReqHttp