import Vue from "vue";
import App from "./App.vue";
import { Plugin } from "vue-fragment";
// import wicg-inert so the inert attribute can be used
// inert provides some QOL stuff for modals & overlays. Useful for search input + hamburger menu
import "wicg-inert";
// use vue-fragment so nothing has to be wrapped in a div
Vue.use(Plugin);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
