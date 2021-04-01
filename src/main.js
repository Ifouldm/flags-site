import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faAngleLeft,
    faAngleRight,
    faArrowLeft,
    faMoon,
    faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Vue from "vue";
import VueRouter from "vue-router";
import App from "@/App.vue";
import Main from "@/pages/Main.vue";
import CountryDetails from "@/pages/CountryDetails.vue";

library.add(faSearch, faMoon, faArrowLeft, faAngleLeft, faAngleRight);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        component: Main,
        name: "Home",
    },
    {
        path: "/country",
        component: CountryDetails,
        props: true,
        name: "Country",
    },
];

const router = new VueRouter({
    routes,
});

new Vue({
    router,
    render: (h) => h(App),
}).$mount("#app");
