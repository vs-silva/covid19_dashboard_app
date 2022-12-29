import type {SorterInterface} from "@/core-domain/services/sorter/sorter.interface";
import type {CountryDTO} from "@/core-domain/dtos/country.dto";

async function sortByCountryName(data: CountryDTO[]): Promise<CountryDTO[]> {
    return data.sort((currentCountry, nextCountry) => {
        if(currentCountry.slug < nextCountry.slug) {
            return -1;
        }

        /*if(currentCountry.slug > nextCountry.slug) {
            return 1;
        } */

        return 1;
    });
}


export const SorterService: SorterInterface = {
    sortByCountryName
};
