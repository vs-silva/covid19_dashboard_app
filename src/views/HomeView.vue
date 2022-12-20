<template>
  <div class="container">

  </div>
  <aside>
    <CountrySearcherComponent/>
    <CountrySelectorComponent
        v-bind:countries = countries
    />
  </aside>
  <main>
    <CountryReporterComponent
      v-bind:country = country
    />
  </main>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import Stores from '@/stores';
import Eventbus from "@/eventbus";

//Components
import CountrySearcherComponent from "@/components/country-searcher/CountrySearcherComponent.vue";
import CountrySelectorComponent from "@/components/country-selector/CountrySelectorComponent.vue";
import CountryReporterComponent from "@/components/country-reporter/CountryReporterComponent.vue";
import {watchEffect} from "vue";

const domainStore = Stores.useCoreDomainStore();
const { countries, country } = storeToRefs(domainStore);
domainStore.getCountries();
//const selectedCountry = 'Poland';
//domainStore.getCountryReport(selectedCountry);
let canStop = false;
const stop = watchEffect(() => {
  if(countries.value[0]){
    domainStore.getCountryReport(countries.value[0].slug);
  }
});

Eventbus.emitter.on(Eventbus.eventType.countryReport, async countryName =>  {
  await domainStore.getCountryReport(countryName as string);
});


</script>


<style scoped>
.container{
  display: flex;
}
</style>
