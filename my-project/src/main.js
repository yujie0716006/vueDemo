// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import store from './store'
import vueI18n from 'vue-i18n';

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
Vue.use(vueI18n);

Vue.config.devtools = true

// 在使用mock的时候，要是用require同步引入(node引入)否则会报错，需要将所有的mock文件的引入都引入到main.js文件中，这样全局才可以使用
require('../mockData/index')


const i18n = new vueI18n({
  locale: navigator.language,
  messages: {
    'zh-CN': require('@/common/lang/zh-CN'),
    'en': require('@/common/lang/en')
  }
});


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: {App},
  template: '<App/>'
})
