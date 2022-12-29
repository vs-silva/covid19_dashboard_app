import type {TransformerInterface} from "@/chart-manager/services/transformer/transformer.interface";
import type {ReportDTO} from "@/core-domain/dtos/report.dto";
import type {ChartDataDTO} from "@/chart-manager/dtos/chart-data.dto";
import {ChartColorConstants} from "@/chart-manager/constants/chart-color.constants";
import {ChartLabelsConstants} from "@/chart-manager/constants/chart-labels.constants";

function transformToChartData(reportData: ReportDTO[]): ChartDataDTO {
    const result: ChartDataDTO = {
        labels:[],
        dataSets: []
    };

    const tempResult = {
        active: {
            label: ChartLabelsConstants.Active,
            data:[],
            backgroundColor:[ChartColorConstants.Blue]
        },
        confirmed: {
            label: ChartLabelsConstants.Confirmed,
            data:[],
            backgroundColor:[ChartColorConstants.Yellow]
        },
        recovered: {
            label: ChartLabelsConstants.Recovered,
            data:[],
            backgroundColor:[ChartColorConstants.Green]
        },
        deaths: {
            label: ChartLabelsConstants.Deaths,
            data:[],
            backgroundColor:[ChartColorConstants.Red]
        }
    };

    for (const report of reportData) {
        for (const key of Object.keys(report)) {

            if(key === 'date') {
                result.labels.push(report[key]);
            }

            if(key !== 'date') {
                // @ts-ignore
                tempResult[key].data.push(report[key]);
            }
        }
    }

    // @ts-ignore
    for (const key of Object.keys(tempResult)) {
        // @ts-ignore
        result.dataSets.push(tempResult[key]);
    }

    return result;
}

export const TransformerService: TransformerInterface = {
    transformToChartData
};
