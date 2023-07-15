import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'

document.addEventListener("turbo:load", () => {
  const root = createRoot(
    document.body.appendChild(document.createElement("div"))
  );
  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  );
});