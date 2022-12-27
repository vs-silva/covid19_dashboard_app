import type {CoreDomainDriverPort} from "@/core-domain/ports/driver/core-domain-driver.port";
import type {CoreDomainDrivenPort} from "@/core-domain/ports/driven/core-domain-driven.port";
import type {CountryDTO} from "@/core-domain/dtos/country.dto";
import type {CountryReportDTO} from "@/core-domain/dtos/country-report.dto";
import {ReaderResources} from "@/core-domain/constants/reader-resources";
import {MapperService} from "@/core-domain/services/mapper/mapper.service";
import {SorterService} from "@/core-domain/services/sorter/sorter.service";

export function CoreDomainFacade(reader: CoreDomainDrivenPort): CoreDomainDriverPort {

    async function getAllCountries(): Promise<CountryDTO[]> {
        const response = await reader.get(`${ReaderResources.Countries}`);

        return SorterService.sortByCountryName(
            // @ts-ignore
            await MapperService.mapToCountryEntities(response['data'])
        );
    }

    async function getCountryReport(countryName: string): Promise<CountryReportDTO> {
        const response = await reader.get(`${ReaderResources.Country}/${countryName}`);

        // @ts-ignore
        return (response['data'].length) ? await MapperService.mapToCountryReportEntity(response['data']): [];
    }

    return{
       getAllCountries,
       getCountryReport
    };
};
