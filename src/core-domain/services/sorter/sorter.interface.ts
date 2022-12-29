import type {CountryDTO} from "@/core-domain/dtos/country.dto";

export interface SorterInterface {
    sortByCountryName(data:CountryDTO[]): Promise<CountryDTO[]>;
}
