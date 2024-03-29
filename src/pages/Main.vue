<template>
    <div class="body">
        <div class="inputs">
            <Searchbar @search="search" />
            <RegionSelect :regions="regions" @regionChange="regionChange" />
        </div>
        <CountryList :countries="pageCountries" />
        <Pagination
            class="pagination"
            @pageChange="pageChange"
            :totalRecords="selectedCountries.length"
            :perPage="perPage"
        />
    </div>
</template>

<script>
import Searchbar from '@/components/Searchbar.vue';
import RegionSelect from '@/components/RegionSelect.vue';
import CountryList from '@/components/CountryList.vue';
import Pagination from '@/components/Pagination.vue';

export default {
    name: 'Main',
    data() {
        return {
            allCountries: [],
            selectedRegion: null,
            currentPage: 1,
            perPage: 8,
            searchTerm: '',
        };
    },
    components: {
        Searchbar,
        RegionSelect,
        CountryList,
        Pagination,
    },
    computed: {
        regions: function() {
            return [
                ...new Set(this.allCountries.map((country) => country.region)),
            ];
        },
        selectedCountries: function() {
            return this.allCountries.filter((country) => {
                let filterOut = false;
                if (
                    this.selectedRegion &&
                    this.selectedRegion !== country.region
                )
                    filterOut = true;
                const searchStr =
                    country.name.common + country.region + country.capital;
                const regex = new RegExp(this.searchTerm, 'i');
                if (this.searchTerm && !regex.test(searchStr)) filterOut = true;
                return !filterOut;
            });
        },
        pageCountries: function() {
            const start = (this.currentPage - 1) * this.perPage;
            return this.selectedCountries.slice(start, start + this.perPage);
        },
    },
    methods: {
        fetchData: async function() {
            const jsonData = await fetch('https://restcountries.com/v3.1/all');
            this.allCountries = await jsonData.json();
        },
        regionChange(newRegion) {
            this.selectedRegion = newRegion;
        },
        pageChange(newPage) {
            this.currentPage = newPage;
        },
        search(searchTerm) {
            this.searchTerm = searchTerm;
        },
    },
    mounted() {
        this.fetchData();
    },
};
</script>

<style>
.inputs > * {
    margin: 0.5rem 0;
}

.inputs {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 1rem 0;
}

@media screen and (min-width: 600px) {
    .inputs {
        flex-direction: row;
    }
}

.pagination {
    margin: 2rem 0;
}
</style>
