<template>
  <input
      type="text" v-model="search"
      @keyup="utils.emitChange(Eventbus.eventType.filterCountries, search)"
  >

</template>

<script setup lang="ts">
import {ref} from 'vue';
import Eventbus from "@/eventbus";
import {CountrySearcherUtils} from "@/components/country-searcher/country-searcher.utils";

const utils = CountrySearcherUtils(Eventbus);
const search = ref('');
</script>

<style scoped>

</style>
