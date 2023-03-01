import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
// STYLES
import "./css/style.css";
// ROOT
import App from "./App";

const container = document.querySelector("#root");
const root = ReactDOM.createRoot(container);

root.render(<StrictMode>
    <App />
</StrictMode>);