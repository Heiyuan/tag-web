import { createRouter, createWebHistory } from 'vue-router'
import MainVIew from '../views/MainVIew/MainVIew.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainVIew,
      meta: { title: '寻找轴对称教学包' }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: { title: '关于' }
    },
  ],
})

// 路由导航守卫 - 动态设置页面标题
router.beforeEach((to, _from, next) => {
  const title = to.meta.title as string
  document.title = title || '备课系统'
  next()
})

export default router
