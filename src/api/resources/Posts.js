import { APISettings } from '../config.js';

export default {
    
    index(page, per_page){
        return fetch( APISettings.baseURL + `/posts?page=${page}&per_page=${per_page}`, {
            method: 'GET',
            headers: APISettings.headers
        } )
        .then( function( response ){
            if( response.status != 200 ){
                throw response.status;
            }else{
                return response.json();
            }
        });
    }
}