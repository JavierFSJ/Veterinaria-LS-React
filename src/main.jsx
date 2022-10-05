import React from "react";
import ReactDOM  from "react-dom/client";


/* Componente Principal */
import AppPacientes from "./AppPacientes";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppPacientes />
  </React.StrictMode>
)