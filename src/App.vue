<template>
  <div id="app">
    <Titlebar  @darkModeToggle="darkModeToggle" />
    <Main />
  </div>
</template>

<script>
import Titlebar from './components/Titlebar.vue';
import Main from './components/Main.vue';

export default {
  name: 'App',
  data: function() {
    return {
      darkMode: false
    };
  },
  components: {
    Titlebar,
    Main
  },
  methods: {
    darkModeToggle() {
      this.darkMode = !this.darkMode;
      console.log(this.darkMode);
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap');
:root {
--DarkBlue: hsl(209, 23%, 22%); /*(Dark Mode Elements) */
--VeryDarkBlue-dm: hsl(207, 26%, 17%); /*(Dark Mode Background) */
--VeryDarkBlue: hsl(200, 15%, 8%); /*(Light Mode Text) */
--DarkGray: hsl(0, 0%, 52%); /*(Light Mode Input) */
--VeryLightGray: hsl(0, 0%, 98%); /*(Light Mode Background) */
--White: hsl(0, 0%, 100%); /*(Dark Mode Text & Light Mode Elements) */
--BoxShadow: 0.1rem 0.1rem 0.2rem 0.2rem hsla(0, 0%, 52%, 0.2);
}

* {
  font-family: 'Nunito Sans', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
