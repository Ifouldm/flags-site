<template>
  <div class="card">
      <img :src="country.flag" alt="country.name" width=200px>
      <h3>{{country.name}}</h3>
      <h4>Population: {{country.population}}</h4>
      <h4>Region: {{country.region}}</h4>
      <h4>Captial: {{country.capital}}</h4>
  </div>
</template>

<script>
export default {
    name: "CountryCard",
    props: ["country"],
}
</script>

<style>
.card {
    background-color: white;
}
</style>