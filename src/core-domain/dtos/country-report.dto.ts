import type {ReportDTO} from "./report.dto";

export interface CountryReportDTO {
    country: string;
    countryCode: string;
    reports: ReportDTO[];
}
