import React from 'react'
import Imagen from './Imagen'

const ComentarioSinProps = ({urlImagen,nombre,texto}) => {
  return (
    <div className='media'>
        
        <Imagen urlImagen={urlImagen}/>
        <div className="media-body">
            <h5 className='mt-0'>{nombre}</h5>
            {texto}
        </div>
        
    </div>
  )
}



export default ComentarioSinProps