import "./index.css";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";

const el = document.getElementById("root") as HTMLElement;
const root = createRoot(el);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
