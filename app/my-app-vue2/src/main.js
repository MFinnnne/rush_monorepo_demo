import Vue from 'vue';
import TestBtn from 'vue2-ui';
import App from './App.vue';

Vue.config.productionTip = false;
Vue.use(TestBtn);
new Vue({
  render: (h) => h(App)
}).$mount('#app');
