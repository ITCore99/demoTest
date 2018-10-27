import Vue from 'vue'
import Router from 'vue-router'
import Frist from '@/views/first'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '我是第一页',
      component: Frist
    },
    {
      path: "/second",
      name: "我是第二页",
      component: () => import("@/views/second")
    }
  ]
})
