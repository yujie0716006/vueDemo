'use strict';

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

var _router = require('./router');

var _router2 = _interopRequireDefault(_router);

var _elementUi = require('element-ui');

var _elementUi2 = _interopRequireDefault(_elementUi);

var _store = require('./store');

var _store2 = _interopRequireDefault(_store);

var _vueI18n = require('vue-i18n');

var _vueI18n2 = _interopRequireDefault(_vueI18n);

require('./assets/reset.css');

require('element-ui/lib/theme-chalk/index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 引入element-ui中的主题颜色
/*import './assets/theme/orange/index.css';
import './assets/theme/yellow/index.css';
import './assets/theme/green/index.css';
import './assets/theme/greenyellow/index.css';
import './assets/theme/purple/index.css';
import './assets/theme/blue/index.css';
import './assets/theme/red/index.css';*/
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
_vue2.default.use(_elementUi2.default);
_vue2.default.use(_vueI18n2.default);

var i18n = new _vueI18n2.default({
  locale: navigator.language,
  messages: {
    'zh-CN': require('@/common/lang/zh-CN'),
    'en': require('@/common/lang/en')
  }
});

_vue2.default.config.productionTip = false;

/* eslint-disable no-new */
new _vue2.default({
  el: '#app',
  router: _router2.default,
  store: _store2.default,
  i18n: i18n,
  components: { App: _App2.default },
  template: '<App/>'
});
//# sourceMappingURL=main.js.map