import axios from 'axios';

const getPeliculas = async ()=> {
    const API_MOVIES = 'https://mfwkweb-api.clarovideo.net/services/content/list?device_id=web&device_category=web&device_model=web&device_type=web&device_so=Edge&format=json&device_manufacturer=generic&authpn=webclient&authpt=tfg1h3j4k6fd7&api_version=v5.93&region=mexico&HKS=p4ecvsvgnajobk9aklkivmo4g7&quantity=50&from=0&level_id=GPS&order_way=ASC&order_id=50&filter_id=34270';
    return await axios.get(API_MOVIES);
}

export const getResumen = async (id) =>{
    const API_RESUMEN = `https://mfwkweb-api.clarovideo.net/services/content/data?device_id=web&device_category=web&device_model=web&device_type=web&device_so=Edge&format=json&device_manufacturer=generic&authpn=webclient&authpt=tfg1h3j4k6fd7&api_version=v5.93&region=mexico&HKS=p4ecvsvgnajobk9aklkivmo4g7&group_id=${id}`;   
    //966926
    
    let data = await axios.get(API_RESUMEN);
    let  info = data.data.response.group.common;
    return {
        titulo : info.title,
        descripcion: info.large_description,
        imagen: info.image_large,
        generos: info.extendedcommon.genres.genre.map(item => item.name),
        titulo_original: info.extendedcommon.media.originaltitle,
        año_publicacion: info.extendedcommon.media.publishyear,
        clasificacion: info.extendedcommon.media.rating.code
    }
};

export const getDataPeliculas = async () =>{
    let response = await getPeliculas();
    let data = response.data.response.groups;
    return data.map( pelicula => ({id: pelicula.id, imagen: pelicula.image_small, titulo: pelicula.title}) )
}
