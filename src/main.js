import Vue from 'vue'
import App from './App.vue'
import router from './router'
//import './assets/bootstrap/bootstrap.css'
import axios from 'axios'
axios.defaults.withCredentials = true
axios.defaults.headers.post['Content-Type'] = 'application/json'
import VueAxios from 'vue-axios'
import currency from './components/filter/currency'
Vue.filter('currency', currency)
import VueI18n from 'vue-i18n'
import VeeValidate from 'vee-validate'
import validationMessages from 'vee-validate/dist/locale/zh_TW'
import '../bus'

Vue.use(VueAxios, axios)
Vue.use(VueI18n)
const i18n = new VueI18n()
i18n.locale = 'zhTW'
Vue.use(VeeValidate, {
  events: '',
  i18n,
  dictionary: {
    zhTW: validationMessages
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    axios.get(`${process.env.VUE_APP_api}/users/isSignin`).then(res => {
      if (res.data.success) {
        to.path === '/login' || to.path === '/signup'
          ? next({ path: '/' })
          : next()
      } else {
        to.path === '/dashboard' ||
        to.path === '/favorite' ||
        to.path === '/purchase'
          ? next({ path: '/login' })
          : next()
      }
    })
  } else {
    next()
  }
})
