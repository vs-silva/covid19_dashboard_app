import type {CountryDTO} from "@/core-domain/dtos/country.dto";
import type {CountryReportDTO} from "@/core-domain/dtos/country-report.dto";

export interface CoreDomainDriverPort {
    getAllCountries(): Promise<CountryDTO[]>;
    getCountryReport(countryName: string): Promise<CountryReportDTO>;
}
