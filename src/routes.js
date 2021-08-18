import {BrowserRouter,Route, Switch} from 'react-router-dom'
import Home from './components/Pages/Home'
import Sobre from './components/Pages/Sobre'
import Contato from './components/Pages/Contatos'

const Routes = ()=>{
    return(
        <BrowserRouter>
          <Switch>
            <Route exact path= "/" component={Home}/>
            <Route path= "/sobre" component={Sobre}/>
            <Route path= "/contato" component={Contato}/>
          </Switch>
        </BrowserRouter>
    )
}

export default Routes