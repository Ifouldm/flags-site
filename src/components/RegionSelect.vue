<template>
  <select @change="regionChange" class="dropdown" v-model="selectedRegion">
      <option disabled selected>Filter by Region</option>
      <option v-for="region in regions" :key="region">{{region}}</option>
  </select>
</template>

<script>
export default {
    name: "RegionSelect",
    data() {
        return {
            selectedRegion: null
        }
    },
    props: {
        regions: Array
    },
    methods: {
        regionChange() {
            this.$emit('regionChange', this.selectedRegion);
        }
    }
}
</script>

<style>
select {
    padding: 1rem;
}
</style>