import type {ChartDTO} from "@/chart-manager/dtos/chartDTO";
import type {ChartDataDTO} from "@/chart-manager/dtos/chart-data.dto";

export interface ChartManagerDrivenPort {
    createChart(chartContainer: any, chartType: ChartDTO): any;
    updateChart(chart: any, chartData: ChartDataDTO): void;
    clearChart(chart: any): void;
}
