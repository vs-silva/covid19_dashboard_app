import type {ChartManagerDriverPort} from "@/chart-manager/ports/driver/chart-manager-driver.port";
import type {ChartDTO} from "@/chart-manager/dtos/chart.dto";
import type {ChartDataDTO} from "@/chart-manager/dtos/chart-data.dto";
import type {ChartManagerDrivenPort} from "@/chart-manager/ports/driven/chart-manager-driven.port";

export function ChartManagerFacade(chartEngine: ChartManagerDrivenPort):ChartManagerDriverPort {

    function createChart(chartContainer: any, chartType: ChartDTO): any {
        return chartEngine.createChart(chartContainer, {
            type: chartType.type
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
