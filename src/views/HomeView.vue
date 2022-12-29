<template>
  <div id="b-contentContainer">

    <aside id="b-aside-container" class="u-padding-left-and-right-20px">

      <CountrySearcherComponent class="c-country-searcher"/>
      <CountrySelectorComponent class="c-country-list-selector"
          v-bind:countries = countries
      />

    </aside>

    <main id="b-main-container" class="u-padding-left-and-right-20px">
      <CountryReporterComponent
          v-bind:country = country
      />
    </main>
  </div>

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
#b-contentContainer {
  display: flex;
}

#b-aside-container {
  height: 88vh;
  overflow: hidden;
  min-width: 350px;
}

.c-country-searcher {
  margin-bottom: 20px;
  width: 100%;
}

.c-country-list-selector{
  height: 100%;
  overflow-y: scroll;
  list-style: none;
  padding: 0;
}

#b-main-container {
  flex-grow: 1;
}
</style>
