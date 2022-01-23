import { types } from "../types/types";

const initialState = { };
export const reducerDescripcion = (state=initialState, action)=>{
    switch(action.type){
        case types.agregarDescripcion:
            return {
                ...state,
                descripcion : action.payload
            }
        case types.removerDescripcion:{
            return{
                ...state,
                descripcion:[]
            }
        }
        default:
            return state;
    }
}