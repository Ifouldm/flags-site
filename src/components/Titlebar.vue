<template>
  <div class="titlebar">
    <h1>Where in the world?</h1>
    <h3 @click="darkModeToggle"><font-awesome-icon icon="moon" /> Dark Mode</h3>
  </div>
</template>

<script>
export default {
  name: 'TitleBar',
  methods: {
    darkModeToggle() {
      this.$emit('darkModeToggle');
    }
  }
}
</script>

<style scoped>
.titlebar {
  padding: 1rem 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  cursor: pointer;

}
</style>
