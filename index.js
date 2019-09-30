import React from "react";
import ReactDOM from "react-dom";
import App from './App'

if (module.hot) {
  module.hot.accept()
}
var mountNode = document.getElementById("app");
ReactDOM.render(<App/>, mountNode);
