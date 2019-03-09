import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//Components
import HomePage from './HomePage';
import HomePageCategory from './HomePageCategory';
import PostDetail from './PostDetail';
import NotFound from './NotFound';

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
                    <Route
                        exact path="/error"
                        component={NotFound}
                    />
                </Switch>
            </Router>
        );
    }
}

export default App
