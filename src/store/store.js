import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducerDescripcion } from "../reducers/reducerDescripcion";
import { reducerPeliculas } from "../reducers/reducerPeliculas";

const reducers = combineReducers({
    peliculas: reducerPeliculas,
    descripcion : reducerDescripcion
})

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)

export default store;