import React from 'react';
import { BrowserRouter  as Router, Switch, Route, BrowserRouter } from 'react-router-dom';
import Nav from './components/Navigation/Navbar';
import Home from './pages/Home/Home';
function App() {

  return (
    <BrowserRouter>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </BrowserRouter>
  );
}

export default App;
