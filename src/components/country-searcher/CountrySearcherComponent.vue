<template>
  <input
      type="text" v-model="search"
      @keyup="utils.emitChange(Eventbus.eventType.filterCountries, search)"
      v-bind:placeholder="placeholder"
  >

</template>

<script setup lang="ts">
import {ref} from 'vue';
import Eventbus from "@/eventbus";
import {CountrySearcherUtils} from "@/components/country-searcher/country-searcher.utils";

const utils = CountrySearcherUtils(Eventbus);
const search = ref('');
const placeholder = ref('search.placeholder.message');
</script>

<style scoped>

</style>
