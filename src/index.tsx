import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import AppRouter from "./router/AppRouter";
import { BrowserRouter } from "react-router-dom";

interface HTMLInputElement extends HTMLElement {
  value?: string;
}
const inputTag = document.getElementById("root") as HTMLInputElement;
const value = inputTag;
const root = createRoot(value);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
