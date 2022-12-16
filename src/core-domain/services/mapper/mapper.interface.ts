import type {CountryDTO} from "@/core-domain/dtos/country.dto";
import type {CountryReportDTO} from "@/core-domain/dtos/country-report.dto";

export interface MapperInterface {
    mapToCountryEntities(data:object[]): Promise<CountryDTO[]>;
    mapToCountryReportEntity(data:object[]): Promise<CountryReportDTO>;
}
