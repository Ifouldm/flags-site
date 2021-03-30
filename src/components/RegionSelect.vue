<template>
  <select class="dropdown">
      <option disabled selected>Filter by Region</option>
      <option v-for="region in regions" :key="region">{{region}}</option>
  </select>
</template>

<script>
export default {
    name: "RegionSelect",
    props: {
        regions: Array
    }
}
</script>

<style>
select {
    padding: 1rem;
}
</style>