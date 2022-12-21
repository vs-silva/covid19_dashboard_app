import type {ChartManagerDrivenPort} from "@/chart-manager/ports/driven/chart-manager-driven.port";
import type {ChartDTO} from "@/chart-manager/dtos/chart.dto";
import type {ChartDataDTO} from "@/chart-manager/dtos/chart-data.dto";
import Chart from 'chart.js/auto';

export function ChartEngineAdapter(): ChartManagerDrivenPort {

    function createChart(chartContainer: any, chartType: ChartDTO): any {
        return new Chart(chartContainer, {
            // @ts-ignore
            type: chartType.type,
            data: {
                labels:[],
                datasets: [{
                    label: '',
                    data: [],
                    backgroundColor: []
                }]
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
        });
    }

    function updateChart(chart: any, chartData: ChartDataDTO) {
        clearChart(chart);

        for (const label of chartData.labels) {
            chart.data.labels.push(label);
        }

        for (const dataset of chartData.dataSets) {
            chart.data.datasets.push(dataset);
        }

        chart.update();
    }

    function clearChart(chart: any): any {
        chart.data.labels = [];
        chart.data.datasets = [];
        chart.update();
    }

    return {
        createChart,
        updateChart,
        clearChart
    };
}
