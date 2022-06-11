import Vue from 'vue'
import App from './App.vue'
import { registerMicroApps, start } from 'qiankun';


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

registerMicroApps([
  {
    name: 'vue app', // app name registered
    entry: 'http://localhost:8081',
    container: '#subapp-viewport',
    activeRule: '/vue-app',
  }
]);

start()


