import type {ReportDTO} from "@/core-domain/dtos/report.dto";

export interface ChartManagerDriverPort {
    createChart(chartContainers: string[], chartType: string, reportData: ReportDTO[]): void;
}
