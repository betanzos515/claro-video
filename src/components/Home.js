import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { agregarPeliculas, removerDescripcion } from '../actions/peliculas';
import { getDataPeliculas } from '../conexion/conexion';
import { ListaPeliculas } from './ListaPeliculas';
import { Main } from './Styles/HomeStyle';

export const Home = () => {

  const dispatch = useDispatch();

  const obtenerData = async ()=>{
    const data = await getDataPeliculas();
    dispatch(agregarPeliculas(data));
    dispatch(removerDescripcion())
  }
  
  useEffect(()=>{ 
      obtenerData();
  // eslint-disable-next-line
  },[]);
  
  return (
    <>
      <Main>
        <ListaPeliculas />
      </Main>
    </>
  )
};
