import { library } from '@fortawesome/fontawesome-svg-core'
import { faMoon, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Vue from 'vue'
import App from './App.vue'

library.add(faSearch, faMoon);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
