import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { PeliculaStyle } from './Styles/PeliculaStyle';
import { getResumen } from '../conexion/conexion';
import { agregarDetalles, removerDescripcion } from '../actions/peliculas';


export const Pelicula = ({ pelicula }) => {
  
  const { id, titulo, imagen } = pelicula;
  
  const navegar = useNavigate(); 
  const dispatch = useDispatch();
  
  const handleClick = async () =>{
    let data = await getResumen(id);
    dispatch(agregarDetalles(data));
    navegar('/descripcion',{ replace:true})
  }

  return(
    <PeliculaStyle>
      <img src={ imagen } alt={ titulo }/>
      <Link to={`/descripcion`} className='capa-play' onClick={ handleClick }><i className="far fa-play-circle"></i></Link>
    </PeliculaStyle>
  );
};
