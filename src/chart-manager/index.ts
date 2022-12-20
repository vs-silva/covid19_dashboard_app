import {ChartManagerConstants} from "@/chart-manager/constants/chart-manager.constants";
import {ChartManagerFacade} from "@/chart-manager/chart-manager.facade";
import {ChartEngineAdapter} from "@/adapters/chart-engine.adapter";

export default {
    chartType: ChartManagerConstants,
    driverPort: ChartManagerFacade(ChartEngineAdapter()),
};
