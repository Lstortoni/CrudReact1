import React from 'react'
import Imagen from './Imagen'

const Comentarios = (props) => {
  return (
    <div className='media'>
        
        <Imagen urlImagen={props.urlImagen}/>
        <div className="media-body">
            <h5 className='mt-0'>{props.nombre}</h5>
            {props.texto}
        </div>
        
    </div>
  )
}



export default Comentarios