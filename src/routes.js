import {BrowserRouter,Route, Switch} from 'react-router-dom'
import Home from './components/Pages/Home'
import Sobre from './components/Pages/Sobre'
import Contato from './components/Pages/Contatos'
import Erro from './components/Pages/Error'
import Product from './components/Pages/Products'

const Routes = ()=>{
    return(
        <BrowserRouter>
          <Switch>
            <Route exact path= "/" component={Home}/>
            <Route path= "/sobre" component={Sobre}/>
            <Route exact path= "/contato" component={Contato}/>
            <Route path="/produto/:id" component={Product}/>
            
            <Route path="*" component={Erro}/>
          </Switch>
        </BrowserRouter>
    )
}

export default Routes