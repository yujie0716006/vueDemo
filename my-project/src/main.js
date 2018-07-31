// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import store from './store'

import './assets/reset.css';
import 'element-ui/lib/theme-chalk/index.css';
// 引入element-ui中的主题颜色
/*import './assets/theme/orange/index.css';
import './assets/theme/yellow/index.css';
import './assets/theme/green/index.css';
import './assets/theme/greenyellow/index.css';
import './assets/theme/purple/index.css';
import './assets/theme/blue/index.css';
import './assets/theme/red/index.css';*/
Vue.use(ElementUI);


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
