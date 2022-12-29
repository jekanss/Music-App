import axios from 'axios';

const apiDeezerUrl = process.env.REACT_APP_API_DEEZER_URL as string

//Confguración de Axios para realizar peticiones a la api configurada en el backend
const deezerApi = axios.create({
    baseURL: apiDeezerUrl
});

//Configurar interceptores, todas las peticiones van a ir configuradas con esta cabecera
deezerApi.interceptors.request.use( config => {

    config.headers = {
        ...config.headers,       
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    }

    return config;
})

export default deezerApi;

