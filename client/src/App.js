import React from 'react';
import { BrowserRouter  as Router, Switch, Route, BrowserRouter } from 'react-router-dom';
import Nav from './components/Navigation/Navbar';
import Home from './pages/Home/Home';
import Balance from './pages/Balance/balance';
import Withdraw from './pages/Withdraw/withdraw';
import './App.css'

function App() {
 
  return (
    <BrowserRouter>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/balance" component={Balance} />
          <Route exact path="/withdraw" component={Withdraw} />
        </Switch>
      </Router>
    </BrowserRouter>
  );
}

export default App;
