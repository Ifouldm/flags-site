<template>
  <div class="titlebar">
    <h1>Where in the world?</h1>
    <h3 @click="darkModeToggle">
      <font-awesome-icon icon="moon" />
      {{ this.darkMode ? "Light" : "Dark" }} Mode
    </h3>
  </div>
</template>

<script>
export default {
  name: "TitleBar",
  data: function () {
    return {
      darkMode: false,
    };
  },
  methods: {
    darkModeToggle() {
      this.darkMode = !this.darkMode;
      this.$emit("darkModeToggle", this.darkMode);
    },
  },
};
</script>

<style>
.titlebar {
  background-color: var(--BackgroundClear);
  color: var(--TextNormal);
  padding: 1rem 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  cursor: pointer;
}
</style>
