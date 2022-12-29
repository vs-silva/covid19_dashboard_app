import type {CoreDomainDrivenPort} from "@/core-domain/ports/driven/core-domain-driven.port";
import axios from "axios";
import {useLoading} from 'vue-loading-overlay';
import type {ActiveLoader} from 'vue-loading-overlay';

export function RestClientAdapter(): CoreDomainDrivenPort {

    const engine = axios.create({
        baseURL: 'https://api.covid19api.com/',
        timeout: ( 60 * 1000 ),
        timeoutErrorMessage: 'Something is wrong with the endpoint'
    });

    const loader = useLoading({
        loader: 'dots',
        opacity: 0.1,
        backgroundColor: '#fff',
        color: '#00BD7E'
    });

    let activeLoader: ActiveLoader;


    engine.interceptors.request.use(config => {

        if(activeLoader){
            activeLoader.hide();
        }

        activeLoader = loader.show();
        return config;
    }, handleError);


    engine.interceptors.response.use(response => {
        activeLoader.hide();
        return response;
    }, handleError);

    function handleError(error: object) {
        activeLoader.hide();
        //display notification error
        return Promise.reject(error);
    }

    async function get(resourceURL:string): Promise<object> {
        return await engine.get(resourceURL);
    }

    return {
        get
    };
}
