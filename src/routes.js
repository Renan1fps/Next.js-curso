import {BrowserRouter,Route, Switch} from 'react-router-dom'
import Home from './components/Pages/Home'
import Sobre from './components/Pages/Sobre'

const Routes = ()=>{
    return(
        <BrowserRouter>
          <Switch>
            <Route  path= "/" component={Home}/>
            <Route path= "/sobre" component={Sobre}/>
          </Switch>
        </BrowserRouter>
    )
}

export default Routes