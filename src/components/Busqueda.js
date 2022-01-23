import React, { useEffect, useState } from 'react';
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
            <label>Buscar :</label><input type='text' onChange={ handleChange }/>
        </BusquedaStyle>
    </>
  );
};

