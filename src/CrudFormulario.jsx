import React from 'react'
import { nanoid } from 'nanoid'




 
const CrudFormulario = () => {
  
    
const [tarea,setTarea] = React.useState('');
const [tareas,setDatos]=React.useState([]);
const [modeoEdicion,setModoEdicion]= React.useState(false);  // POR DEFECTO ESTA EL FORMULARIO DE AGREGAR

const agregarTarea=(e)=>{  //PERMITE AGRREGAR NUEVAS TAREAS 
    e.preventDefault()
    
    if(!tarea.trim()){

      console.log('Elemento vacio')

      return 
    }
          
    console.log(tarea)

    setDatos([...tareas,{id:nanoid(10),nombretarea:tarea}]) 
    // GENERO UN OBJETO PARA PODER TENER EL ID Y EL NOMBRE DE LA TAREA
    //EN ESTE CASO PARA PROBAR ESTA BIEN PERO CREO Y TIENE SENTIDO QUE EN REALIDAD
    //LOS ID TIENEN QUE VENIR DE LA BASE DE DATOS.

    setTarea('')
    }

  const Eliminar= (id)=>{
   // console.log(id)

   let arrayFiltrado = [];
   arrayFiltrado= tareas.filter(item=> item.id!==id)

   setDatos(arrayFiltrado) 
  }

  const Editar= (id,tareaEditada)=>{


    setModoEdicion(true) 
  // let arrayFiltrado = [];
  // arrayFiltrado= tareas.filter(item=> item.id!==id)

  // setDatos(arrayFiltrado) 
    setTarea(tareaEditada)
 

   }

    return (
    <div className="container mt-5">
        <h1 className="text-center">CRUD simple</h1>
        <hr/>
        <div className="row">
            <div className="col-8">
                <h4 className="text-center">Lista de tareas</h4>
                <ul className="list-group">
                {
                tareas.map( (item, index) => (

                   <li className="list-group-item" key={item.id}>

                                
                                <span  className="lead">{item.nombretarea}</span>
                                <button className="btn btn-danger  btn-sm float-right mx-2" onClick={()=>Eliminar(item.id)}>Eliminar</button>
                                <button className="btn btn-warning  btn-sm float-right" onClick={()=>Editar(item.id,item.nombretarea)}>Editar</button>
                        

                    </li>

                   ))
                 }
                </ul>
            </div>
            <div className="col-4">
                <h4 className="text-center">
                    {

                        modeoEdicion ? 'Editar Tarea' : 'Agregar Tarea' 
                    }
                    
                    
                
                
                </h4>
                <form onSubmit={(e)=>agregarTarea(e)}>
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