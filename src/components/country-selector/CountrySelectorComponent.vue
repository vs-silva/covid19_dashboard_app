<template>
  <h1>Countries selector component in here!</h1>
  {{countries}}
</template>

<script setup lang="ts">

import {CountrySelectorUtils} from "@/components/country-selector/country-selector.utils";

const props = defineProps({
  countries: {
    type: Array,
    required: false,
    default: () => []
  }
});

const utils = CountrySelectorUtils();
console.log(utils);
</script>

<style scoped>

</style>
