import {ChartTypeConstants} from "@/chart-manager/constants/chart-type.constants";
import {ChartManagerFacade} from "@/chart-manager/chart-manager.facade";
import {ChartEngineAdapter} from "@/adapters/chart-engine.adapter";

export default {
    chartType: ChartTypeConstants,
    service: ChartManagerFacade(ChartEngineAdapter()),
};
