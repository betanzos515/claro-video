import { types } from '../types/types';

export const agregarPeliculas = (peliculas)=>{
    return{
        type: types.addPeliculas,
        payload: peliculas
   }
}

export const agregarDetalles = detalles =>{
    return{
        type: types.agregarDescripcion,
        payload: detalles
    }
};

export const removerDescripcion = () =>{
    return{
        type: types.removerDescripcion
    }
}

export const filtrarPeliculas = pelicula =>{
    console.log(pelicula);
    return{
        type: types.filtrarPeliculas,
        payload: pelicula
    }
}