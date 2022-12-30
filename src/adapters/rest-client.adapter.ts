import type {CoreDomainDrivenPort} from "@/core-domain/ports/driven/core-domain-driven.port";
import axios from "axios";
import 'js-loading-overlay' ;

export function RestClientAdapter(): CoreDomainDrivenPort {

    const engine = axios.create({
        baseURL: 'https://api.covid19api.com/',
        timeout: ( 60 * 1000 ),
        timeoutErrorMessage: 'Something is wrong with the endpoint'
    });

    // @ts-ignore
    const loader = window['JsLoadingOverlay'];
    let isLoaderActive = false;
    const loaderPool: number[] = [];

    engine.interceptors.request.use(config => {
        loaderPool.push(1);
        handleLoader();
        return config;
    }, handleError);


    engine.interceptors.response.use(response => {
        loaderPool.pop();
        handleLoader();
        return response;
    }, handleError);

    function handleError(error: object) {
        loaderPool.pop();
        handleLoader();
        //display notification error
        return Promise.reject(error);
    }

    function handleLoader(): void{
        if(loaderPool.length) {
            if(!isLoaderActive) {
                loader.show({
                    "overlayBackgroundColor": "#000000",
                    "spinnerIcon": "square-loader",
                    "overlayOpacity": "0.5",
                    "spinnerColor": "#00BD7E"
                });
                isLoaderActive = true;
            }

            if(isLoaderActive) {
               return;
            }
        }

        if(!loaderPool.length) {
            loader.hide();
            isLoaderActive = false;
        }
    }

    async function get(resourceURL:string): Promise<object> {
        return await engine.get(resourceURL);
    }

    return {
        get
    };
}
