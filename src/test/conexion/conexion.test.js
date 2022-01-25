import '@testing-library/jest-dom';
import { getPeliculas, getResumen } from '../../conexion/conexion';

describe('Prueba al archivo conexion', () => {
    test('probando funcion getPeliculas', async () => {
        const peliculas = await getPeliculas();
        const respuesta = peliculas.data.response.groups;
        //comprobamos que el arreglo retorne minimo una película
        expect(respuesta.length > 0).toBe(true);
    });

    test('probando funcion getResumen', () => {
        
        const ids = [543665, 543673, 543998 ];
        ids.forEach( async (id) =>{
            
            const descripcion = await getResumen(id);//obtenemos la descripcion

            /* Comprobamos que los valores se retornen correctamente */
            expect(typeof descripcion.titulo).toBe('string');
            expect(typeof descripcion.descripcion).toBe('string');
            expect(typeof descripcion.imagen).toBe('string');
            expect(descripcion.generos.length > 0).toBe(true);
            expect(typeof descripcion.generos).toBe('object');
            expect(typeof descripcion.titulo_original).toBe('string');
            expect(typeof descripcion.año_publicacion).toBe('string');
            expect(typeof descripcion.clasificacion).toBe('string');

        });
    });
    
});
