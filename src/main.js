import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from "./i18n";
import VueHighlightJS from "vue-highlightjs";
import "highlight.js/styles/tomorrow-night-eighties.css";
// gruvbox-dark.css
// night-owl
// tomorrow-night-bright.css
import "./fa.config";
Vue.config.productionTip = false;
Vue.use(VueHighlightJS);
new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
