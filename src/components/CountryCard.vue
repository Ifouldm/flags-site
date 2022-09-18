<template>
    <div class="card">
        <img :src="country.flags.png" :alt="country.name.common" />
        <div class="info">
            <h2>{{ country.name.common }}</h2>
            <h4>
                Population: <span>{{ populationFormatted }}</span>
            </h4>
            <h4>
                Region: <span>{{ country.region }}</span>
            </h4>
            <h4>
                Captial: <span>{{ country.capital[0] }}</span>
            </h4>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CountryCard',
    props: ['country'],
    computed: {
        populationFormatted() {
            return this.country.population
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        },
    },
};
</script>

<style scoped>
.card {
    background-color: var(--BackgroundClear);
    border-radius: 0.3rem;
    overflow: hidden;
    box-shadow: var(--BoxShadow);
    height: 100%;
}

img {
    width: 100%;
    height: auto;
}

.info {
    padding: 1rem;
}

h2 {
    margin-bottom: 1rem;
}

h4 {
    font-weight: 600;
}

h4 span {
    color: var(--TextLight);
}
</style>
