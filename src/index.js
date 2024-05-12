import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/test-point">
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
