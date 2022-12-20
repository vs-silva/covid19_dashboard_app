import type {ChartDTO} from "@/chart-manager/dtos/chartDTO";

export interface ChartManagerDriverPort {
    createChart(chartContainer: any, chartType?: ChartDTO): any;
    updateChart(chart: any, chartData: object): void;
}
