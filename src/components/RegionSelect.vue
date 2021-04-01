<template>
    <select @change="regionChange" v-model="selectedRegion" name="Region">
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

<style scoped></style>
