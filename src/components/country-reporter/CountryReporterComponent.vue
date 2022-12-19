<template>
  <h1>{{country.country}} - {{country.countryCode}}</h1>
  <div>{{country.reports}}</div>
</template>

<script setup lang="ts">

const props = defineProps({
  country: {
    type: Object,
    required: false,
    default: () => {}
  }
});


</script>

<style scoped>

</style>
