<template>
    <div class="results">
        <router-link
            :to="{ name: 'Country', params: { country } }"
            country="country"
            v-for="country in countries"
            :key="country.name"
        >
            <CountryCard :country="country" />
        </router-link>
    </div>
</template>

<script>
import CountryCard from "../components/CountryCard.vue";
export default {
    name: "CountryList",
    components: {
        CountryCard,
    },
    props: ["countries"],
};
</script>

<style scoped>
.results {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 3rem;
}

@media screen and (min-width: 500px) {
    .results {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media screen and (min-width: 1000px) {
    .results {
        grid-template-columns: repeat(4, 1fr);
    }
}
</style>
