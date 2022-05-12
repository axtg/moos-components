import { defineAsyncComponent } from 'vue'

export default ({ app }) => {
  app.component("MButton-MButton", defineAsyncComponent(() => import("/home/xander/webapps/moos/moos-components/src/components/MButton/MButton.vue")))
}
