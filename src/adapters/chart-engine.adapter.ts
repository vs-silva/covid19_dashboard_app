import type {ChartManagerDrivenPort} from "@/chart-manager/ports/driven/chart-manager-driven.port";
import type {ChartDataDTO} from "@/chart-manager/dtos/chart-data.dto";
import Chart from 'chart.js/auto';
import type {ChartItem} from 'chart.js/auto';

export function ChartEngineAdapter(): ChartManagerDrivenPort {

    let chartPool: Chart[] = [];
    const limit = 4;

    function createChart(chartContainer: ChartItem, type: string, chartData: ChartDataDTO):void {

        clear();

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

    function clear() {

        if(chartPool.length >= limit) {
            for (const chart of chartPool) {
                chart.destroy();
            }

            chartPool = [];
        }
    }

    return {
        createChart
    };
}
