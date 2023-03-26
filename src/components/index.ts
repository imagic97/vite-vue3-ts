import { App } from "vue";

import MgSpinner from './spinner/index.vue'

export default {
  install(app: App<Element>, options:any) {
    app.component('MgSpinner', MgSpinner)
  },
};
