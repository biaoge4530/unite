// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store";
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
import "./common/css/reset.css";
import "./common/css/iconfont/iconfont.css";
import "./common/css/icon-mdn/iconfont.css";
import "../node_modules/swiper/dist/css/swiper.min.css";
import "./common/js/flexble";

import MintUI from "mint-ui";
import "../node_modules/mint-ui/lib/style.css";
Vue.use(MintUI);

// import oBserver from ".././observer";
// Vue.prototype.Observer = oBserver;


Vue.use(Mint);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
