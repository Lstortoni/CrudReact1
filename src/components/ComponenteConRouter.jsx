import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    NavLink
  } from "react-router-dom";
  import Contacto from "./Contacto";
  import Nosotros from "./Nosotros";
  import Inicio from "./Inicio";
import User from './User';
const ComponenteConRouter = () => {


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
    
      <div className="container">
          <NavLink className="btn btn-dark" to="/" style={navLinkStyles} >
              Inicio
          </NavLink>
          <NavLink className="btn btn-dark" to="/contacto" style={navLinkStyles} >
              Contacto
          </NavLink>
          <NavLink className="btn btn-dark" to="/nosotros"  >
              Nosotros
          </NavLink>
      </div>
    <Routes>
     
       <Route path="/" element={<Inicio/>} />
      
      <Route path="/nosotros/:id"  element={<User/>} />
     
      <Route path="/contacto" element={<Contacto/>} />

      <Route path="/nosotros" element={<Nosotros/>} />


    </Routes>
  </div>
</Router>

  )
}

export default ComponenteConRouter