import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  FontAwesomeIcon,
  FontAwesomeLayers,
  FontAwesomeLayersText,
} from "@fortawesome/vue-fontawesome";
import {
  faCss3Alt,
  faGithub,
  faHtml5,
  faJsSquare,
  faSass,
  faTelegram,
  faVk,
  faVuejs,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

import {
  faCircle,
  faSquareFull,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faTimesCircle,
  faTelegram,
  faGithub,
  faWhatsapp,
  faVk,
  faSquareFull,
  faCircle,
  faHtml5,
  faJsSquare,
  faVuejs,
  faSass,
  faCss3Alt
);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component("font-awesome-layers", FontAwesomeLayers);
Vue.component("font-awesome-layers-text", FontAwesomeLayersText);
