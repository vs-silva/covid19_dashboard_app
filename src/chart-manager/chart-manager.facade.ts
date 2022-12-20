import type {ChartManagerDriverPort} from "@/chart-manager/ports/driver/chart-manager-driver.port";
import type {ChartDTO} from "@/chart-manager/dtos/chartDTO";
import type {ChartDataDTO} from "@/chart-manager/dtos/chart-data.dto";
import type {ChartManagerDrivenPort} from "@/chart-manager/ports/driven/chart-manager-driven.port";
import {ChartManagerConstants} from "@/chart-manager/constants/chart-manager.constants";

export function ChartManagerFacade(chartEngine: ChartManagerDrivenPort):ChartManagerDriverPort {

    function createChart(chartContainer: any, chartType?: ChartDTO): any {
        return chartEngine.createChart(chartContainer, {
            // @ts-ignore
            type: chartType.type || ChartManagerConstants.Bar
        });
    }

    function updateChart(chart: any, chartData: ChartDataDTO): void {
        chartEngine.clearChart(chart);
        chartEngine.updateChart(chart, chartData);
    }

    return {
      createChart,
      updateChart,
    };
}
