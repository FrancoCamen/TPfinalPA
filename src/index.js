import React from "react";
import ReactDOM from "react-dom/client"; // Importa desde react-dom/client
import "./App.css";
import App from "./App";

// Selecciona el elemento raíz
const rootElement = document.getElementById("root");

// Usa createRoot para inicializar tu aplicación
const root = ReactDOM.createRoot(rootElement);

// Renderiza el componente App
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
