import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { DescripcionStyle } from './Styles/DescripcionStyle';

export const Descripcion = () => {
  const state = useSelector( state => state.descripcion);
  
  const navegador = useNavigate();
  const [ stateDescripcion, setDescripcion ] = useState({  });
  let componente;
  const { descripcion } = state;
  
  //eslint-disable-next-line
  useEffect(()=>{
      setDescripcion(descripcion);
  });
  
  if(stateDescripcion){
    componente = (
      <>
        <div className='imagen-descripcion'>
          <img src={ stateDescripcion.imagen } alt={ stateDescripcion.titulo }/>
        </div>
        <div className='info'>
          <h2>{ stateDescripcion.titulo}</h2>
          <div>
            <p className='titulo-original'>
              {`${stateDescripcion.titulo_original ? stateDescripcion.titulo_original : '' } (${stateDescripcion.año_publicacion}) ${stateDescripcion.clasificacion}`}
            </p>
            <p className='descripcion'>{stateDescripcion.descripcion}</p>
            <div className='generos'>
              <p>Géneros :</p>
              <div className='lista-generos'>{ stateDescripcion.generos ? stateDescripcion.generos.map(genero=> <p key={ genero }>{genero}</p>) : [] } </div></div>
          </div>
        </div>
      </>
    )
  }else {
    // componente = <p>No existen consultas, regresa a la página principal</p>
    navegador('/',{ replace:true })
  }
  
  return (
    <DescripcionStyle>
      {componente}
    </DescripcionStyle>
  )
};
