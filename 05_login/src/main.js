import Vue from 'vue';
import VueRouter from 'vue-router';

import MintUi from 'mint-ui';
import 'mint-ui/lib/style.css';
import Axios from 'axios';

import App from './components/App.vue';
import Home from './components/Home.vue';
import Music from './components/Music.vue';
import List from './components/List.vue';
import Login from './components/Login.vue';

Vue.use(VueRouter);
Vue.use(MintUi);
Vue.prototype.$axios = Axios;

Axios.interceptors.request.use(function (config) {
  MintUi.Indicator.open({
    text: '加载中...',
    spinnerType: 'fading-circle'
  });
  return config;
});
Axios.interceptors.response.use(function (config) {
  MintUi.Indicator.close();
  return config;
});

Axios.defaults.baseURL = 'http://localhost:3000/';

//路由
let router = new VueRouter();

router.addRoutes([{
  name: 'home',
  path: '/home',
  component: Home,
  children: [{
    name: 'login',
    path: '/login',
    component: Login
  },
  {
    name: 'music',
    path: '/music',
    component: Music,
    meta: { check: true },
    children: [
      { name: 'list', path: 'list', component: List }
    ]
  }
  ]
}]);
//全局钩子
router.beforeEach((to, from, next) => {
  // console.log(to);
  let checkLogin = false;
  to.matched.forEach(ele => {
    if(ele.meta.check) {
      // console.log(ele.meta.check)
      // console.log(1)
      checkLogin = true;
    }
  })

  if (checkLogin) {
    Axios.get('users/qiao')
      .then(res => {
        if(res.data.isLogin) {
          return next();
        }
        MintUi.Toast({
          message: '请登录',
          position: 'middle',
          duration: 5000
        });
        next({
          name: 'login'
        })
      })
      .catch(err => {
        console.log(err);
      })
  } else {
    next();
  }

  next();
})

new Vue({
  el: '#app',
  render: c => c(App),
  router
})
