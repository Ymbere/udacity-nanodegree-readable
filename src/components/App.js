import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//Components
import HomePage from './HomePage';
import HomePageCategory from './HomePageCategory';

class App extends Component {
    render() {
        return(
            <Router>
                <Switch>
                    <Route
                        exact path={'/'}
                        component={HomePage}
                    />
                    <Route
                        exact path={'/:category'}
                        component={HomePageCategory}
                    />
                </Switch>
            </Router>
        );
    }
}

export default App
