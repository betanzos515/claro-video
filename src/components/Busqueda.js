import { useSelector } from 'react-redux';
import { BusquedaStyle } from './Styles/BusquedaStyle';

export const Busqueda = ({ setValor }) => {
  const { peliculas }= useSelector( state=>  state.peliculas )
  
  const handleChange = e =>{
    const lista = peliculas.filter( pelicula => pelicula.titulo.includes(e.target.value))
    console.log(lista);
    setValor(lista);
  }

  return (
    <>
        <BusquedaStyle className='busqueda'>
            <label><i class="fas fa-search"></i></label><input type='text' onChange={ handleChange } placeholder='Buscar pelicula'/>
        </BusquedaStyle>
    </>
  );
};

