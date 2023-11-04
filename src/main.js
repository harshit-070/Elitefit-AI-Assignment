import Vue from "vue";
import App from "./App.vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faUserSecret,
  faMagnifyingGlass,
  faShoppingCart,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faUserSecret,
  faMagnifyingGlass,
  faShoppingCart,
  faFacebookSquare,
  faYoutube,
  faInstagramSquare,
  faTwitter,
  faEnvelope,
  faXmark
);

import gsap from "gsap";

Vue.mixin({
  created: function () {
    this.gsap = gsap;
  },
});

Vue.component("FAI", FontAwesomeIcon);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.config.productionTip = false;

gsap.registerPlugin();

new Vue({
  render: (h) => h(App),
}).$mount("#app");
