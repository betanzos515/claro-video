import { useSelector } from 'react-redux';
import { DescripcionStyle } from './Styles/DescripcionStyle';

export const Descripcion = () => {
  
  const state = useSelector( state => state.descripcion);
  const { descripcion } = state;
  let componente;
  if(Object.keys(descripcion).length > 0){
    componente = (
      <>
        <img src={ descripcion.imagen } alt={ descripcion.titulo }/>
        <div className='info'>
          <h2>{ descripcion.titulo}</h2>
          <div>
            <p className='titulo-original'>
              {`${descripcion.titulo_original} (${descripcion.año_publicacion}) ${descripcion.clasificacion}`}
            </p>
            <p className='descripcion'>{descripcion.descripcion}</p>
            <p className='generos'> Géneros : <div className='lista-generos'>{descripcion.generos.map(genero=> <p>{genero}</p>)} </div></p>
          </div>
        </div>
      </>
    )
  }else{
    componente = <p></p>
  }
  return (
    <DescripcionStyle>
      {componente}
    </DescripcionStyle>
  )
};
