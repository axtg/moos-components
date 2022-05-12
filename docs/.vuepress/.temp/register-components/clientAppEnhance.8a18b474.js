import { defineAsyncComponent } from 'vue'

export default ({ app }) => {
  app.component("index", defineAsyncComponent(() => import("/home/xander/webapps/moos/moos-components/src/components/index.js"))),
  app.component("MButton-MButton.test", defineAsyncComponent(() => import("/home/xander/webapps/moos/moos-components/src/components/MButton/MButton.test.js"))),
  app.component("MButton-MButton", defineAsyncComponent(() => import("/home/xander/webapps/moos/moos-components/src/components/MButton/MButton.vue")))
}
