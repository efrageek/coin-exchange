import Vue from "vue";
import App from "./App.vue";
import "@/assets/css/tailwind.css";
import { dollarFilter, percentageFilter } from "@/filters";

import router from "@/router";

Vue.filter("dollar", dollarFilter);
Vue.filter("percent", percentageFilter);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
