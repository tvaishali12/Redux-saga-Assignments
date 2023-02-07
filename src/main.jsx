import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { reduxStore } from "./component/Redux saga calculator/store";
import Calcuator from "./component/Redux saga calculator/Calculator.layout";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Provider store={reduxStore}>
      <Calcuator />
    </Provider>
  </>
);
