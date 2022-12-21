import type {ChartDTO} from "@/chart-manager/dtos/chart.dto";
import type {ChartDataDTO} from "@/chart-manager/dtos/chart-data.dto";

export interface ChartManagerDriverPort {
    createChart(chartContainer: any, chartType: ChartDTO): any;
    updateChart(chart: any, chartData: ChartDataDTO): void;
}
