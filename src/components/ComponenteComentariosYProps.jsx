import React from 'react'
import ComponentesProps from './ComponentesProps'
import Comentarios from './Comentarios'
import ComentarioSinProps from './ComentarioSinProps'


const ComponenteComentariosYProps = () => {
  return (
    <div>

         <ComponentesProps apellido='Stortoni' edad={43} />
        <ComponentesProps apellido='Cerrato' edad={67}/> 
        <ComponentesProps apellido='Ornani' edad={39}/>
        <hr/>
        <h3>Cajita de comentarios</h3>
        <Comentarios
        urlImagen='https://picsum.photos/64'
        nombre='Leonardo'
        texto='Esta es la imagen de Stortoni'
        
        />
        <hr/>
        <Comentarios
                urlImagen='https://picsum.photos/64'
                nombre='Adriana'
                texto='Esta es la imagen de Cerrato'
        />
        <hr/>
        <Comentarios
              urlImagen='https://picsum.photos/64'
              nombre='Cintia'
              texto='Esta es la imagen de Ornani'
        />
       <hr/>
       <ComentarioSinProps
              urlImagen='https://picsum.photos/64'
              nombre='Santino'
              texto='Esta es la imagen de Santino'
        />
       <hr/>
       <ComentarioSinProps
              urlImagen='https://picsum.photos/64'
              nombre='Salvador'
              texto='Esta es la imagen de Salvador'
        />
        <hr/>



    </div>
  )
}

export default ComponenteComentariosYProps