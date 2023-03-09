import Vue from 'vue'
import App from './App.vue'
import TestBtn from 'vue2-ui'

Vue.config.productionTip = false
Vue.use(TestBtn);
new Vue({
  render: h => h(App),
}).$mount('#app')
