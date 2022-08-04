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
  return (
    <Router>
      <div className="container mt-5">
        <h1>Proyecto componentes, props , router</h1>
        {/**
       <ComponenteComentariosYProps/>
        */ }
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
