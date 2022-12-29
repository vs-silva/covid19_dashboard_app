import {describe, it, expect, vi} from "vitest";
import ChartManager from "@/chart-manager";
import Chart from "chart.js/auto";
import {faker} from "@faker-js/faker";
import type {ReportDTO} from "../../core-domain/dtos/report.dto";

describe('Chart Manager Tests', () => {

    describe('Chart Manager Driver Port Tests', () => {

        it('createChart should create an instance of ChartJS', () => {

            const canvasElement = document.createElement('canvas');
            canvasElement.setAttribute('id', 'activeChartCanvas');


            const spy = vi.spyOn(ChartManager.service, 'createChart');
            const type = ChartManager.chartType.Bar;
            const reportData :ReportDTO[] = [
                {
                    date:'2019-01-01',
                    active: parseInt(faker.random.numeric(1)),
                    confirmed: parseInt(faker.random.numeric(1)),
                    recovered: parseInt(faker.random.numeric(1)),
                    deaths: parseInt(faker.random.numeric(1))
                },
                {
                    date:'2019-01-02',
                    active: parseInt(faker.random.numeric(2)),
                    confirmed: parseInt(faker.random.numeric(2)),
                    recovered: parseInt(faker.random.numeric(2)),
                    deaths: parseInt(faker.random.numeric(2))
                }
            ];

            ChartManager.service.createChart([canvasElement.id], type, reportData );

            expect(spy).toHaveBeenCalled();
            expect(spy).toHaveBeenCalledOnce();
            expect(spy).toHaveBeenCalledWith([canvasElement.id], type, reportData);

        });

        it.todo('createChart should clear existent chartPool before create new charts');


    });
});
