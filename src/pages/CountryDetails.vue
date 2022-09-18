<template>
    <div class="body">
        <div v-if="!country">
            No Country Selected
        </div>
        <div class="controls" v-else>
            <button @click="back">
                <font-awesome-icon icon="arrow-left" /> Back
            </button>
        </div>
        <div class="details">
            <div class="flag">
                <img :src="country.flags.png" :alt="country.name.common" />
            </div>
            <div class="info">
                <h1>{{ country.name.common }}</h1>
                <div class="data">
                    <h4>
                        Native Name:
                        <span>{{
                            Object.values(country.name.nativeName)[0].official
                        }}</span>
                    </h4>
                    <h4>
                        Population: <span>{{ populationFormatted }}</span>
                    </h4>
                    <h4>
                        Region: <span>{{ country.region }}</span>
                    </h4>
                    <h4>
                        Sub Region: <span>{{ country.subregion }}</span>
                    </h4>
                    <h4>
                        Captial: <span>{{ country.capital[0] }}</span>
                    </h4>
                    <h4>
                        Top Level Domain: <span>{{ topLevelDomain }}</span>
                    </h4>
                    <h4>
                        Currencies: <span>{{ currencies }}</span>
                    </h4>
                    <h4>
                        Languages: <span>{{ languages }}</span>
                    </h4>
                </div>
                <div class="border">
                    Border Countries:
                    <button v-for="border in country.borders" :key="border">
                        {{ border }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CountryDetails',
    props: ['country'],
    computed: {
        populationFormatted() {
            return this.country.population
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        },
        currencies() {
            return Object.values(this.country.currencies)
                .map(currency => currency.name)
                .join(', ');
        },
        languages() {
            return Object.values(this.country.languages).join(', ');
        },
        topLevelDomain() {
            return this.country.tld.join(', ');
        }
    },
    methods: {
        back() {
            this.$router.back();
        }
    }
};
</script>

<style scoped>
.details {
    display: flex;
    flex-direction: column;
}

.flag {
    padding: 1.5rem;
}

.flag img {
    width: 100%;
    height: auto;
}

.info {
    margin: auto 0;
    padding: 1.5rem;
}

.data {
    line-height: 2rem;
}

.border {
    margin: 1rem 0;
    color: var(--TextLight);
    font-weight: 600;
}

.controls {
    padding: 1.5rem;
}

.border button {
    margin: 0.2rem;
}

h1 {
    margin-bottom: 1rem;
}

h4 {
    color: var(--TextLight);
    font-weight: 600;
}

h4 span {
    font-weight: 300;
}

@media screen and (min-width: 500px) {
    .details {
        flex-direction: row;
    }

    .flag {
        width: 50%;
        padding: 0 8rem;
    }

    .data {
        column-count: 2;
        column-gap: 3rem;
    }
}
</style>
