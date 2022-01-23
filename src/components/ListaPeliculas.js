import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Busqueda } from './Busqueda';
import { Pelicula } from './Pelicula';
import { ListaStyled } from './Styles/ListaStyles';

export const ListaPeliculas = () => {
  
  let { peliculas } = useSelector( state => state.peliculas);
  const [ peliculasState, setPeliculasState ] = useState([]);

  useEffect(()=>{
    setPeliculasState(peliculas);
  },[peliculas]);

  return(
    <>
      <Busqueda setValor={ setPeliculasState }/>
      <ListaStyled>
        {
          peliculasState.map( pelicula => <Pelicula key={ pelicula.id } pelicula={ pelicula }/> ) 
        }
      </ListaStyled>
    </>
  );
};
