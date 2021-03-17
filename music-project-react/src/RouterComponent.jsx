import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Editdb from './pages/Editdb';
import HomePage from './pages/HomePage';

class RouterComponent extends Component{
    render(){
        return(
            <Router>
                    <>
                        <Switch>
                            <Route path="/" exact component={HomePage} />
                            <Route path="/editDB" exact component={Editdb}/>
                        </Switch>
                    </>
            </Router>
        )
    }
}

export default RouterComponent