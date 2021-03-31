<template>
  <div class="card">
      <img :src="country.flag" alt="country.name">
      <div class="info">
        <h3>{{country.name}}</h3>
        <h5>Population: <span>{{country.population}}</span></h5>
        <h5>Region: <span>{{country.region}}</span></h5>
        <h5>Captial: <span>{{country.capital}}</span></h5>
      </div>
  </div>
</template>

<script>
export default {
    name: "CountryCard",
    props: ["country"],
}
</script>

<style scoped>
.card {
    background-color: white;
    border-radius: 0.5rem;
    overflow: hidden;
    box-shadow: var(--BoxShadow);
}

img {
    min-width: 100%;
    height: auto;
}

.info {
    padding: 1rem;
}

h3 {
    margin-bottom: 1rem;
}

h5 span {
    color: var(--DarkGray);
}
</style>