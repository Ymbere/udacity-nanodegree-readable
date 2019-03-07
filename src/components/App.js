import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//Components
import HomePage from './HomePage';
import HomePageCategory from './HomePageCategory';
import PostDetail from './PostDetail';

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
                    <Route
                        exact path={'/:category/:id'}
                        component={PostDetail}
                    />
                </Switch>
            </Router>
        );
    }
}

export default App
