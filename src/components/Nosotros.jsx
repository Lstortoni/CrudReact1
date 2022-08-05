import React,{useEffect} from 'react'

const Nosotros = () => {

  //const datos=[{id:1, nombre:'leo'  },{id:2, nombre:'santi'  }, {id:3, nombre:'salva'  }] 

  const [equipo,setEquipo] = React.useState(null)
  //llamamos a una funcion de flecha para usar useEffect
 useEffect  (()=>{
    //  console.log('Use Efect : se pinta')     
    //  setEquipo(datos)
    obtenerDatos()
 },[]);

 const obtenerDatos= async()=>{
    const data = await fetch ('https://jsonplaceholder.typicode.com/users')
    const users=await data.json()
    //console.log(users)
    setEquipo(users)
 }

  return (
    <div>
        <h1>
        Nosotros
        </h1>
        
         
    </div>
  )
}

export default Nosotros