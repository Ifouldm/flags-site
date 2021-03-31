<template>
  <div class="card">
    <img :src="country.flag" alt="country.name" />
    <div class="info">
      <h4>{{ country.name }}</h4>
      <h6>
        Population: <span>{{ country.population }}</span>
      </h6>
      <h6>
        Region: <span>{{ country.region }}</span>
      </h6>
      <h6>
        Captial: <span>{{ country.capital }}</span>
      </h6>
    </div>
  </div>
</template>

<script>
export default {
  name: "CountryCard",
  props: ["country"],
};
</script>

<style>
.card {
  background-color: var(--BackgroundClear);
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: var(--BoxShadow);
}

img {
  width: 100%;
  height: auto;
}

.info {
  padding: 1rem;
}

h4 {
  margin-bottom: 1rem;
}

h6 {
  font-weight: 600;
}

h6 span {
  color: var(--TextLight);
}
</style>