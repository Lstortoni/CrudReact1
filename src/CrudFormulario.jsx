import React from 'react'
import { nanoid } from 'nanoid'




 
const CrudFormulario = () => {
  
    
const [tarea,setTarea] = React.useState('');
const [tareas,setDatos]=React.useState([]);
const [modeoEdicion,setModoEdicion]= React.useState(false);  // POR DEFECTO ESTA EL FORMULARIO DE AGREGAR
const[idTarea,setIdTarea]= React.useState('');
const [mensaje,SetMensaje]= React.useState(null);

//***************************************AGREGA UNA TAREA CON LA UNION DE ARREGLOS******************************** */
const agregarTarea=(e)=>{  //PERMITE AGRREGAR NUEVAS TAREAS 
    e.preventDefault()
    
    if(!tarea.trim()){

      console.log('Elemento vacio')
      SetMensaje('No se ha escrito niguna tarea...')
      return    
    }
          
    //console.log(tarea)

    setDatos([...tareas,{id:nanoid(10),nombretarea:tarea}]) 
    // GENERO UN OBJETO PARA PODER TENER EL ID Y EL NOMBRE DE LA TAREA
    //EN ESTE CASO PARA PROBAR ESTA BIEN PERO CREO Y TIENE SENTIDO QUE EN REALIDAD
    //LOS ID TIENEN QUE VENIR DE LA BASE DE DATOS.

    setTarea('')
    SetMensaje(null)
    }

//***************************************EDITA UNA TAREA************************************************************** */
const editarTarea=(e)=>{  //PERMITE AGRREGAR NUEVAS TAREAS 
  e.preventDefault()
  
  if(!tarea.trim()){

    console.log('Elemento vacio')

     SetMensaje('No se ha escrito niguna tarea...')
    return    
  }
        
    
  
   let id = idTarea

   const  arrayEditado = tareas.map(item=> item.id===id ? {id:id, nombretarea:tarea} : item)

   setDatos(arrayEditado)
   setTarea('')
   setIdTarea('')
   setModoEdicion(false)
   SetMensaje(null)
 

  }
//********************************************ELIMINAR TAREA************************************ */
  const Eliminar= (id)=>{
   // console.log(id)

   let arrayFiltrado = [];
   arrayFiltrado= tareas.filter(item=> item.id!==id)

   setDatos(arrayFiltrado) 
  }
 
  //***************************************PONE EL FORMULARIO EN MODO EDICION****************************** */
  const Editar= (id,tareaEditada)=>{


    setModoEdicion(true) 
 
    setTarea(tareaEditada)
 
    
    setIdTarea(id)

   }
//****************************************************************************************************************************** */
    return (
    <div className="container mt-5">
        <h1 className="text-center">CRUD simple</h1>
        <hr/>
        <div className="row">
            <div className="col-8">
                <h4 className="text-center">Lista de tareas</h4>
                <ul className="list-group">
                {
               
                tareas.length===0 ?(
                  <li className="list-group-item" >No hay tareas</li>

                ):(

                     
                tareas.map( (item, index) => (

                  <li className="list-group-item" key={item.id}>

                               
                               <span  className="lead">{item.nombretarea}</span>
                               <button className="btn btn-danger  btn-sm float-right mx-2" onClick={()=>Eliminar(item.id)}>Eliminar</button>
                               <button className="btn btn-warning  btn-sm float-right" onClick={()=>Editar(item.id,item.nombretarea)}>Editar</button>
                       

                   </li>

                  ))
                ) 

                 }
                </ul>
            </div>
            <div className="col-4">
                <h4 className="text-center">
                    {

                        modeoEdicion ? 'Editar Tarea' : 'Agregar Tarea' 
                    }
                    
                    
                
                
                </h4>
                
                <form onSubmit={(e)=> modeoEdicion? editarTarea(e):agregarTarea(e)}>
                 
                 {
                   mensaje!=null?(<span  className="text-danger">{mensaje}</span>):null

                 }
                   
                <input 
                type="text"
                    className="form-control mb-2"
                    placeholder="Ingrese Tarea"
                    onChange={ (e)=>setTarea(e.target.value)}
                    value={tarea}    
                    />
                    <div className="d-grid gap-2">
                        {
                            //EN ESTE CASO NO SE DEVUELVE STRING, ENTONCES VA CON PARENTESIS 

                            modeoEdicion? (<button className="btn btn-warning btn-block" type="submit">Editar Tarea</button> ) : (<button className="btn btn-dark btn-block" type="submit">Agregar Tarea</button>)
                        }   
                    
                    </div>  
                </form>
            </div>
        </div>
  </div>

  )

}

export default CrudFormulario