<template>
  <ul>
    <li v-for="country in countriesList" v-bind:key="country['slug']">
      <span @click="requestCountryReportData(country['country'])">{{country['country']}}</span>
    </li>
  </ul>
</template>

<script setup lang="ts">
import Eventbus from "@/eventbus";
import {CountrySelectorUtils} from "@/components/country-selector/country-selector.utils";
import {ref, watchEffect} from "vue";

const props = defineProps({
  countries: {
    type: Array,
    required: false,
    default: () => []
  }
});

const utils = CountrySelectorUtils();
const countriesList = ref([] as unknown);

watchEffect(() => {
  countriesList.value = props.countries;
},);

Eventbus.emitter.on(Eventbus.eventType.filterCountries, countryFilter => {
  countriesList.value = utils.filterCountries(countryFilter as string, props.countries);
});

function requestCountryReportData(countryName:string) {
  Eventbus.emitter.emit(Eventbus.eventType.countryReport, countryName);
}

</script>

<style scoped>

</style>
