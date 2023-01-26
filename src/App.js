import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home/Home";
import GlobalStyle from "./base";

const App = () => {
  return (
    <div className="site-container">
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={Home} />
        this is a test
      </Switch>
    </div>
  );
};

export default App;
