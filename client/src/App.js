import React from "react";
import { Switch, Route } from "react-router-dom";
import Addmovie from "./components/AddMovie";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/movie/add" component={Addmovie} />

      </Switch>
    </div>
  );
}

export default App;
