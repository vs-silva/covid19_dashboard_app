<script setup lang="ts">
import { storeToRefs } from 'pinia';
import Stores from '@/stores';
const domainStore = Stores.useCoreDomainStore();
const { countries, country } = storeToRefs(domainStore);

domainStore.getCountries();
domainStore.getCountryReport('Portugal');

</script>

<template>
  <main>

  </main>
  {{countries[0]}}
  <br/>
  <br/>
  {{country}}
</template>
