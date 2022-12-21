import type {ChartDatasetDTO} from "@/chart-manager/dtos/chart-dataset.dto";

export interface ChartDataDTO {
    labels: string[];
    dataSets: ChartDatasetDTO[];
}
