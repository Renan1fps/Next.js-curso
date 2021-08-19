import {Link} from 'react-router-dom'

export default function Erro(){
    return(
        <div>
            <h1>Hum, parece que você acessou uma pagina inexistente!</h1>
            <span> <h2>Talvez você quis acessar uma dessas:</h2> </span> <br/>
            <Link to="/contato"> Contato </Link><br/>
            <Link to="/sobre"> Sobre </Link><br/>
            <Link to="/"> Home </Link>
        </div>
    )
}