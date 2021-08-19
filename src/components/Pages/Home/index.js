import { Link } from 'react-router-dom'
export default function Home(){
    return (
        <div>
            <h1>Home da page</h1>
            <h2> Linkando paginas </h2>
            <Link to="/sobre"> Sobre</Link> <br/>
            <Link to="/contato"> Contato</Link>     
        </div>
    )
}
