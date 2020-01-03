import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import Routes from "../routes";
import { Provider } from "react-redux";
import createStore from "./createStore";

import "./assets/css/main.scss";
import "./assets/css/templates/templates.scss";

const initialState = {};

const store = createStore(initialState);
const state = store.getState();

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
