import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Portfolio from "./pages/Portfolio"
import Header from './components/Header';
import About from './components/About';


function App() {
  return (
      <Router>
      <Header />
      <Switch>
        <Route exact path={"/"}>
        <About />
        </Route>
        <Route exact path={"/portfolio"}>
          <Portfolio />
        </Route>

      </Switch>

  </Router >
   
   
  );
}

export default App;
