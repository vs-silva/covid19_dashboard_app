<template>
  <h1 id="reporterTitle">{{country.country}}</h1>

  <div id="chart-main-container">
    <div id="active-chart-canvas-container" class="u-chart-canvas-container">
      <canvas ref="activeChartCanvas" />
    </div>

    <div id="confirmed-chart-canvas-container" class="u-chart-canvas-container">
      <canvas ref="confirmedChartCanvas" />
    </div>

    <div id="recovered-chart-canvas-container" class="u-chart-canvas-container">
      <canvas ref="recoveredChartCanvas" />
    </div>

    <div id="deaths-chart-canvas-container" class="u-chart-canvas-container">
      <canvas ref="deathsChartCanvas" />
    </div>
  </div>



</template>

<script setup lang="ts">
import {ref, watchEffect} from 'vue';
import ChartManager from "@/chart-manager";
const props = defineProps({
  country: {
    type: Object,
    required: false,
    default: () => {}
  }
});

const activeChartCanvas = ref('');
const confirmedChartCanvas = ref('');
const recoveredChartCanvas = ref('');
const deathsChartCanvas = ref('');

watchEffect(() => {
  if(!activeChartCanvas.value || !props.country.reports){
    return;
  }

  ChartManager.service.createChart(
      [activeChartCanvas.value,
          confirmedChartCanvas.value,
          recoveredChartCanvas.value,
          deathsChartCanvas.value
      ],
      ChartManager.chartType.Bar,
      props.country.reports
  );

});


</script>

<style scoped>
#chart-main-container{
  height: 83vh;
  overflow: hidden;
  overflow-y: scroll;
}

#reporterTitle {
  color: #00BD7E;
  font-weight: bold;
}

.u-chart-canvas-container {
  width: 100%;
  margin-top: 40px;
  margin-bottom: 60px;
}

.u-chart-canvas-container:last-of-type {
  margin-bottom: 0;
}


</style>
