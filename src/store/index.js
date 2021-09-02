import Vue from "vue";
import Vuex from "vuex";
import Codewars from "./codewars";
import Challenges from "./challenges";
import Projects from "./projects";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Codewars,
    Challenges,
    Projects,
  },
});
