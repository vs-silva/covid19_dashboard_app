import type {ChartDataDTO} from "@/chart-manager/dtos/chart-data.dto";
import type {ReportDTO} from "@/core-domain/dtos/report.dto";

export interface TransformerInterface {
    transformToChartData(reportData: ReportDTO[]): ChartDataDTO;
}
