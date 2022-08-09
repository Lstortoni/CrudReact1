import React,{useEffect} from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink
} from "react-router-dom";

const Nosotros = () => {

  //const datos=[{id:1, nombre:'leo'  },{id:2, nombre:'santi'  }, {id:3, nombre:'salva'  }] 

  const [equipo,setEquipo] = React.useState([])
  //llamamos a una funcion de flecha para usar useEffect
 useEffect  (()=>{
    //  console.log('Use Efect : se pinta')     
    //  setEquipo(datos)
    obtenerDatos()
 },[]);

 const obtenerDatos= async()=>{
    const data = await fetch ('https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations')
    //El fech es una promesa y con el await lo va a guardar todo en data
    const users=await data.json()
    //console.log(users)
    setEquipo(users.civilizations)
 }

  return (
    <div>
        <h1> Nosotros </h1>
        <ul  className='list-group'>
           {
             
             
             equipo.map( (item,index)=> (

                 
              <li key={item.id}> 
               <Link to={`/nosotros/${item.id}`}>
                     {item.name} - {item.expansion}
               
               </Link>
                </li>
               )
             
            )
                   
          }
        </ul>

         
    </div>
  )
}

export default Nosotros