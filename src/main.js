import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

Vue.use(VueRouter)


const router = new VueRouter({
  routes: [
    {
      path: "/",
      name: "Body",
      component: () => import("./components/Body.vue")
    },
    {
      path: "/Map",
      name: "Map",
      component: () => import("./components/Map.vue")
    }
  ]
})





new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
