import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Header';
import Home from './Home';

function App() {
  return (
    <Router>
      <div className='app'>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/login'>
            <div>this is the login page</div>
          </Route>
          <Route path='/checkout'>
            <div>this is the checkout page</div>
          </Route>
        </Switch>
      </div>
    </Router>
    
  )
}

export default App

