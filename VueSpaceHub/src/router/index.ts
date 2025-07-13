import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CalculatorView from '../views/CalculatorView.vue'
import RegisterView from '../views/RegisterView.vue'
import PlannerView from '../views/PlannerView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/calculator',
      name: 'calculator',
      component: CalculatorView,
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
    },
    {
      path: '/planner',
      name: 'planner',
      component: PlannerView, 
    },
  ],
})

export default router
