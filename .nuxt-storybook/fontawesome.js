import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import {
  FontAwesomeLayers,
  FontAwesomeLayersText,
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'

import {
  faCog as freeFasFaCog,
  faChevronLeft as freeFasFaChevronLeft,
  faAngleDown as freeFasFaAngleDown
} from '@fortawesome/free-solid-svg-icons'

import {
  faGithub as freeFabFaGithub,
  faVuejs as freeFabFaVuejs,
  faAngular as freeFabFaAngular,
  faReact as freeFabFaReact
} from '@fortawesome/free-brands-svg-icons'

library.add(
  freeFasFaCog,
  freeFasFaChevronLeft,
  freeFasFaAngleDown,
  freeFabFaGithub,
  freeFabFaVuejs,
  freeFabFaAngular,
  freeFabFaReact
)

config.autoAddCss = false

Vue.component('fa', FontAwesomeIcon)
Vue.component('faLayers', FontAwesomeLayers)
Vue.component('faLayersText', FontAwesomeLayersText)
