import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from './registerServiceWorker';
import 'bulma/css/bulma.css'

import App from "./areas/App";

const render = () => {
  ReactDOM.render(<App />, document.getElementById("root"));
};

registerServiceWorker();

render(App);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept("./areas/App", () => {
    render(App);
  });
}
