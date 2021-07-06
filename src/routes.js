import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom"
import Repositories from "./pages/Repositories"
import Home from "./pages/Home"

const Routes = () => {
    return ( 
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}></Route>            
                <Route path="/repositories" component={Repositories}></Route>            
            </Switch>
        </BrowserRouter>
     );
}
 
export default Routes;
