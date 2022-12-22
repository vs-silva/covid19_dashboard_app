import type {ChartManagerDriverPort} from "@/chart-manager/ports/driver/chart-manager-driver.port";
import type {ChartManagerDrivenPort} from "@/chart-manager/ports/driven/chart-manager-driven.port";
import type {ReportDTO} from "@/core-domain/dtos/report.dto";
import {TransformerService} from "@/chart-manager/services/transformer/transformer.service";


export function ChartManagerFacade(chartEngine: ChartManagerDrivenPort):ChartManagerDriverPort {

    function createChart(chartContainers: string[], chartType: string, reportData: ReportDTO[]) {

        const chartData = TransformerService.transformToChartData(reportData);

        chartContainers.forEach((container, index) => {

            chartEngine.createChart(container, chartType, {
                labels: chartData.labels,
                dataSets: [chartData.dataSets[index]]
            });

        });
    }

    return {
        createChart
    };
}
