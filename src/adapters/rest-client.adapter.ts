import type {CoreDomainDrivenPort} from "@/core-domain/ports/driven/core-domain-driven.port";
import axios from "axios";

export function RestClientAdapter(): CoreDomainDrivenPort {

    const engine = axios.create({
        baseURL: 'https://api.covid19api.com/',
        timeout: 1000,
        timeoutErrorMessage: 'Something is wrong with the endpoint'
    });

    async function get(resourceURL:string): Promise<object> {
        return await engine.get(resourceURL);
    }

    return {
        get
    };
}
