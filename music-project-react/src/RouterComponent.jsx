import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';

class RouterComponent extends Component{
    render(){
        return(
            <Router>
                    <>
                        <Switch>
                            <Route path="/" exact component={HomePage} />
                        </Switch>
                    </>
            </Router>
        )
    }
}

export default RouterComponent