import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import reducers from "./reducers";
import LandingPage from "./components/landingPage";

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={LandingPage} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
