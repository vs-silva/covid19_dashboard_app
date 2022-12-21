import {describe, it, expect, vi} from "vitest";
import ChartManager from "@/chart-manager";
import type {ChartDTO} from "../dtos/chart.dto";
import Chart from "chart.js/auto";
import {faker} from "@faker-js/faker";

describe('Chart Manager Tests', () => {

    describe('Chart Manager Driver Port Tests', () => {

        it('createChart should return an instance of ChartJS', () => {

            const canvasElement = document.createElement('canvas');
            canvasElement.setAttribute('id', 'chartContainer');

            const spy = vi.spyOn(ChartManager.driverPort, 'createChart');
            const type = <ChartDTO>{
                type: ChartManager.chartType.Bar
            };
            const chart = ChartManager.driverPort.createChart(canvasElement, type);

            expect(spy).toHaveBeenCalled();
            expect(spy).toHaveBeenCalledOnce();
            expect(spy).toHaveBeenCalledWith(canvasElement, type);

            expect(chart).toBeDefined();
            expect(chart).toBeInstanceOf(Chart);
        });

        it('updateChart should update an existent instance of ChartJS', () => {

            const canvasElement = document.createElement('canvas');
            canvasElement.setAttribute('id', 'chartContainer');
            canvasElement.setAttribute('width', '100px');
            canvasElement.setAttribute('height', '100px');

            const type = <ChartDTO>{
                type: ChartManager.chartType.Bar
            };

            const chart = ChartManager.driverPort.createChart(canvasElement, type);

            const chartData = {
                labels: [faker.random.word()],
                dataSets: [{
                    label: faker.random.word(),
                    data: [parseInt(faker.random.numeric(1))],
                    backgroundColor:[faker.color.hsl().toString()]
                }]
            };

            const spy = vi.spyOn(ChartManager.driverPort, 'updateChart');
            ChartManager.driverPort.updateChart(chart, chartData);

            expect(chart).toBeDefined();
            expect(spy).toHaveBeenCalled();
            expect(spy).toHaveBeenCalledOnce();
            expect(spy).toHaveBeenCalledWith(chart, chartData);
        });

    });
});
