import type {ChartManagerDrivenPort} from "@/chart-manager/ports/driven/chart-manager-driven.port";
import type {ChartDataDTO} from "@/chart-manager/dtos/chart-data.dto";
import Chart from 'chart.js/auto';
import type {ChartItem} from 'chart.js/auto';

export function ChartEngineAdapter(): ChartManagerDrivenPort {

    let chartPool: Chart[] = [];

    function createChart(chartContainer: ChartItem, type: string, chartData: ChartDataDTO):void {

        if(chartPool.length === 4) {
            for (const chart of chartPool) {
                chart.destroy();
            }

            chartPool = [];
        }

        chartPool.push( new Chart(chartContainer, {
            // @ts-ignore
            type: type,
            data: {
                labels: chartData.labels,
                datasets: chartData.dataSets
            },
            options: {
                responsive: true,
                scales: {
                    x: {
                        beginAtZero: true
                    },
                    y: {
                        beginAtZero: true
                    }
                }
            }
        })
        );
    }

    return {
        createChart
    };
}
