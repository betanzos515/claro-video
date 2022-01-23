import { types } from "../types/types"

const initialState = {
    peliculas:[]
}

export const reducerPeliculas = ( state = initialState, action )=>{
    switch( action.type ){
        case types.addPeliculas:
            return{
                ...state,
                peliculas: action.payload
            }
        case types.filtrarPeliculas:
            return{
                ...state,
                peliculas: [...state.peliculas.filter( pelicula => pelicula.titulo.includes(action.payload)) ]
            }
        default: 
            return state
    }
}