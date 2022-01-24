import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { DescripcionStyle } from './Styles/DescripcionStyle';

export const Descripcion = () => {
  const state = useSelector( state => state.descripcion);
  let componente;
  const { descripcion } = state;
  const [ stateDescripcion, setDescripcion ] = useState( JSON.parse(localStorage.getItem('descripcion')));

  useEffect(()=>{
    if(descripcion){
      setDescripcion(descripcion);
    }
  });
  console.log(stateDescripcion);
  if(Object.keys(stateDescripcion).length > 0 ){
    componente = (
      <>
        <img src={ stateDescripcion.imagen } alt={ stateDescripcion.titulo }/>
        <div className='info'>
          <h2>{ stateDescripcion.titulo}</h2>
          <div>
            <p className='titulo-original'>
              {`${stateDescripcion.titulo_original} (${stateDescripcion.año_publicacion}) ${stateDescripcion.clasificacion}`}
            </p>
            <p className='descripcion'>{stateDescripcion.descripcion}</p>
            <div className='generos'> Géneros : <div className='lista-generos'>{stateDescripcion.generos.map(genero=> <p key={ genero }>{genero}</p>)} </div></div>
          </div>
        </div>
      </>
    )
  }else {
    componente = <p></p>
  }
  
  return (
    <DescripcionStyle>
      {componente}
    </DescripcionStyle>
  )
};
