// import the providers and the store configuration variable

import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-dom";
import { store } from "./store";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
