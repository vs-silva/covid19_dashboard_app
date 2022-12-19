import {CoreDomainFacade} from "@/core-domain/core-domain.facade";
import {RestClientAdapter} from "@/adapters/rest-client.adapter";

export default CoreDomainFacade(RestClientAdapter());
