<template>
    <div class="search">
        <input
            type="text"
            v-model="searchTerm"
            placeholder="Search for a country..."
            @input="search"
        />
        <font-awesome-icon icon="search" class="icon" />
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            searchTerm: "",
        };
    },
    methods: {
        search() {
            if (this.searchTerm.length > 3) {
                this.$emit("search", this.searchTerm);
            } else {
                this.$emit("search", "");
            }
        },
    },
};
</script>

<style scoped>
.search {
    position: relative;
}

.search input {
    padding-left: 3rem;
}

.icon {
    position: absolute;
    height: 100%;
    left: 1rem;
}
</style>
