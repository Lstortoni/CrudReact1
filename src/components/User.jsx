import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
  
  const {id} = useParams()   // es muy importante el nombre, aca entre llaves pongo id, ya que donde defini el route le puse ese nombre, pero si le ponia otro nombtre aca habia que ponerlo.

  const [pueblo,setPueblo] = React.useState([])
  //llamamos a una funcion de flecha para usar useEffect
 React.useEffect  (()=>{
    //  console.log('Use Efect : se pinta')     
    //  setEquipo(datos)
    obtenerDatos()
 },[]);

 const obtenerDatos= async()=>{
    const data = await fetch (`https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/${id}`)    //las llaves invertidas van porque se accede al ide con llaves
    const datopueblo=await data.json()
    //console.log(users)
    setPueblo(datopueblo)
 }
   console.log(useParams());
   
  
    return (
    <div>
        <h3>{pueblo.name}</h3>
        <p>{pueblo.team_bonus}</p>
    </div>
  )
}

export default User