import type {MapperInterface} from "@/core-domain/services/mapper/mapper.interface";
import type {CountryDTO} from "@/core-domain/dtos/country.dto";
import type {CountryReportDTO} from "@/core-domain/dtos/country-report.dto";
import type {ReportDTO} from "@/core-domain/dtos/report.dto";
import {IncomingReaderDataRequiredFields} from "@/core-domain/constants/incoming-reader-data-required-fields";

async function  mapToCountryEntities(data: object[]): Promise<CountryDTO[]> {

    const result: CountryDTO[] = [];

    for (const country of data) {

        result.push(<CountryDTO>{
            // @ts-ignore
            country: country[IncomingReaderDataRequiredFields.Country],
            // @ts-ignore
            slug: country[IncomingReaderDataRequiredFields.Slug],
        });
    }

    return result;
}

async function  mapToCountryReportEntity(data: object[]): Promise<CountryReportDTO> {

    const result: CountryReportDTO = <CountryReportDTO>{
        // @ts-ignore
        country: data[0][IncomingReaderDataRequiredFields.Country],
        // @ts-ignore
        countryCode: data[0][IncomingReaderDataRequiredFields.CountryCode],
        reports:[]
    };

    for (const record of data) {
        result.reports.push(<ReportDTO>{
            // @ts-ignore
            date: record[IncomingReaderDataRequiredFields.Date].split('T')[0],
            // @ts-ignore
            active: record[IncomingReaderDataRequiredFields.Active],
            // @ts-ignore
            confirmed: record[IncomingReaderDataRequiredFields.Confirmed],
            // @ts-ignore
            recovered: record[IncomingReaderDataRequiredFields.Recovered],
            // @ts-ignore
            deaths: record[IncomingReaderDataRequiredFields.Deaths],
        });
    }

    return result;
}

export const MapperService: MapperInterface = {
    mapToCountryEntities,
    mapToCountryReportEntity
};
