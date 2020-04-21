import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faStar,
  faCircle,
  faAdjust,
  faStarHalfAlt
} from "@fortawesome/free-solid-svg-icons";
import {
  faStar as farStar,
  faCircle as farCircle
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faStar, farStar, faCircle, farCircle, faAdjust, faStarHalfAlt);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
