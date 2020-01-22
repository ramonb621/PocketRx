import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Title from "./components/Title";
import Home from "./pages/Home";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Title />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;