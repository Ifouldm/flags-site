<template>
  <div class="search">
    <input
      type="text"
      class="text"
      v-model="searchTerm"
      placeholder="Search for a country..."
      @input="search"
    />
    <font-awesome-icon icon="search" class="icon" />
  </div>
</template>

<script>
export default {
  data: function () {
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
.text {
  border: 0;
  border-radius: 0.3rem;
  padding: 1rem 1rem 1rem 3rem;
  box-shadow: var(--BoxShadow);
}

.search {
  position: relative;
}

.icon {
  position: absolute;
  height: 100%;
  left: 1rem;
}

.text:focus {
  outline: 0;
}
</style>