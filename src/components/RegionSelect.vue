<template>
  <select
    @change="regionChange"
    class="dropdown"
    v-model="selectedRegion"
    name="Region"
  >
    <option value="" disabled selected>Filter by Region</option>
    <option v-for="region in regions" :key="region">{{ region }}</option>
  </select>
</template>

<script>
export default {
  name: "RegionSelect",
  data() {
    return {
      selectedRegion: "",
    };
  },
  props: {
    regions: Array,
  },
  methods: {
    regionChange() {
      this.$emit("regionChange", this.selectedRegion);
    },
  },
};
</script>

<style scoped>
select {
  padding: 1rem;
  border: 0;
  background: white;
  border-radius: 0.3rem;
  box-shadow: var(--BoxShadow);
}

select:focus {
  outline: 0;
}

option {
  padding: 0.5rem;
  background: white;
  border-radius: 0.3rem;
  box-shadow: var(--BoxShadow);
}
</style>