import Vue from "vue";
import App from "./App.vue";
import { Plugin } from "vue-fragment";
// use vue-fragment so nothing has to be wrapped in a div
Vue.use(Plugin);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
