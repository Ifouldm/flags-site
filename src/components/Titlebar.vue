<template>
    <div class="titlebar">
        <h4>Where in the world?</h4>
        <h6 @click="darkModeToggle">
            <font-awesome-icon icon="moon" />
            {{ this.darkMode ? "Light" : "Dark" }} Mode
        </h6>
    </div>
</template>

<script>
export default {
    name: "TitleBar",
    data: function() {
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

<style scoped>
.titlebar {
    background-color: var(--BackgroundClear);
    color: var(--TextNormal);
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

@media screen and (min-width: 600px) {
    .titlebar {
        padding: 1rem 4rem;
    }

    h4 {
        font-size: 1.5rem;
    }

    h6 {
        font-size: 1rem;
    }
}

h6 {
    cursor: pointer;
}
</style>
