import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSpinner, faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedinIn,
  faFontAwesome,
} from "@fortawesome/free-brands-svg-icons";
// import { faLinkedIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faSpinner, faCircleNotch, faLinkedinIn, faFontAwesome);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.config.productionTip = false;

new Vue({ router, render: (h) => h(App) }).$mount("#app");
