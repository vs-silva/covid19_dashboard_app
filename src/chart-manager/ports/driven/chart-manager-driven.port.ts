import type {ChartDataDTO} from "@/chart-manager/dtos/chart-data.dto";

export interface ChartManagerDrivenPort {
    createChart(chartContainer: any, type: string, chartData: ChartDataDTO): void;
}
