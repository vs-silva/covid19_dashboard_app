<script setup lang="ts">
import { storeToRefs } from 'pinia';
import Stores from '@/stores';

//Components
import CountrySelectorComponent from "@/components/country-selector/CountrySelectorComponent.vue";
import CountryReporterComponent from "@/components/country-reporter/CountryReporterComponent.vue";

const domainStore = Stores.useCoreDomainStore();
const { countries, country } = storeToRefs(domainStore);
domainStore.getCountries();
//const selectedCountry = 'Poland';
//domainStore.getCountryReport(selectedCountry);




</script>

<template>
  <aside>
    <CountrySelectorComponent
        v-bind:countries = countries
    />
  </aside>
  <main>
    <CountryReporterComponent />
  </main>
</template>
