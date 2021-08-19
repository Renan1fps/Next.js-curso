import {useParams} from 'react-router-dom'

export default function Product(){
    const {id} = useParams()

    return (
        <div>
            <h1>Produtos</h1>
            <span><h2>Produto selecionado: {id} </h2> </span>
        </div>
    )
}