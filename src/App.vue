<template>
    <div id="app">
        <Titlebar @darkModeToggle="darkModeToggle" />
        <router-view />
    </div>
</template>

<script>
import Titlebar from "@/components/Titlebar.vue";

export default {
    name: "App",
    components: {
        Titlebar,
    },
    methods: {
        darkModeToggle(darkMode) {
            document.documentElement.setAttribute(
                "data-theme",
                darkMode ? "darkMode" : ""
            );
        },
    },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap");
:root {
    /* Light Mode (default) */
    --BackgroundClear: hsl(0, 0%, 100%);
    --BackgroundSecondary: hsl(0, 0%, 98%);
    --TextLight: hsl(0, 0%, 52%);
    --TextNormal: hsl(200, 15%, 8%);
    --BoxShadow: 0.1rem 0.1rem 0.2rem 0.2rem hsla(0, 0%, 52%, 0.2);
}

[data-theme="darkMode"] {
    /* Dark Mode */
    --BackgroundClear: hsl(209, 23%, 22%);
    --BackgroundSecondary: hsl(207, 26%, 17%);
    --TextLight: hsl(0, 0%, 52%);
    --TextNormal: hsl(0, 0%, 100%);
    --BoxShadow: 0.1rem 0.1rem 0.2rem 0.2rem hsla(200, 15%, 8%, 0.2);
}

a {
    text-decoration: none;
    color: inherit;
}

input {
    border: 0;
    border-radius: 0.3rem;
    background-color: var(--BackgroundClear);
    color: var(--TextLight);
    padding: 1rem;
    box-shadow: var(--BoxShadow);
}

input:focus {
    outline: 0;
}

select {
    padding: 1rem;
    border: 0;
    background: var(--BackgroundClear);
    color: var(--TextLight);
    border-radius: 0.3rem;
    box-shadow: var(--BoxShadow);
}

select:focus {
    outline: 0;
}

option {
    padding: 0.5rem;
    background: var(--BackgroundClear);
    color: var(--TextLight);
    border-radius: 0.3rem;
    box-shadow: var(--BoxShadow);
}

button {
    padding: 0.3rem 1.5rem;
    background-color: var(--BackgroundClear);
    color: var(--TextNormal);
    border: 0;
    border-radius: 0.3rem;
    box-shadow: var(--BoxShadow);
    cursor: pointer;
}

button:focus {
    outline: 0;
}

* {
    font-family: "Nunito Sans", sans-serif;
    color: var(--TextNormal);
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    height: 100%;
    background-color: var(--BackgroundSecondary);
}

.body {
    padding: 1.5rem;
}
</style>
