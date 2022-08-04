import React from "react";
import Comentarios from "./components/Comentarios";
import ComentarioSinProps from "./components/ComentarioSinProps";
import ComponentesProps from "./components/ComponentesProps";
import CrudFormulario from "./CrudFormulario";

import ComponenteComentariosYProps from "./components/ComponenteComentariosYProps";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import Contacto from "./components/Contacto";
import Nosotros from "./components/Nosotros";
import Inicio from "./components/Inicio";

function App() {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline"
    };
  };


  return (
    <Router>
      <div className="container mt-5">
        <h1>Proyecto componentes, props , router</h1>
        {/**
       <ComponenteComentariosYProps/>
        */ }
        <div className="container">
            <NavLink className="btn btn-dark" to="/" style={navLinkStyles} >
                Inicio
            </NavLink>
            <NavLink className="btn btn-dark" to="/contacto" style={navLinkStyles} >
                Contacto
            </NavLink>
            <NavLink className="btn btn-dark" to="/nosotros"  style={navLinkStyles} >
                Nosotros
            </NavLink>
        </div>
      <Routes>
       
        <Route path="/" element={<Inicio/>} />
         
       
        <Route path="/contacto" element={<Contacto/>} />

        <Route path="/nosotros" element={<Nosotros/>} />

      </Routes>
      </div>
    </Router>
  );
}

export default App;
