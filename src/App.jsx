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
import ComponenteConRouter from "./components/ComponenteConRouter";

function App() {


  return (

     
     <ComponenteConRouter/>
  );
}

export default App;
