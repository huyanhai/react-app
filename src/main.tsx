import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import "tailwindcss/tailwind.css";

import { store } from "./store";
import App from "./App";

render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
