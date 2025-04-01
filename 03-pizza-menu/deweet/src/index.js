import React from "react";
import ReactDOM from "react-dom/client";
import { pizzaData } from "./data";
import "index.css";

function Pizza() {
  return (
    <div>
      <img src="pizzas/spinaci.jpg" alt="Spinach pizza" />
      <h2>Pizza Spinaci</h2>
    </div>
  );
}

function App() {
  return (
    <div>
      <Pizza />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
