import { createRouter, createWebHashHistory } from 'vue-router'
import CodingView from '@/views/services/CodingView.vue'
import DataAnalyticsView from '@/views/services/DataAnalyticsView.vue'
import SoftwareDevelopmentView from '@/views/services/SoftwareDevelopmentView.vue'
import SolarPowerServicesView from '@/views/services/SolarPowerServicesView.vue'
import SolarPowerTrainingView from '@/views/services/SolarPowerTrainingView.vue'
import HomeView from '@/views/HomeView.vue'
// import { name } from '@vue/eslint-config-prettier/skip-formatting'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/coding',
      name: 'coding',
      component: CodingView,
    },
    {
      path: '/data-analytics',
      name: 'data-analytics',
      component: DataAnalyticsView,
    },
    {
      path: '/software-development',
      name: 'software-development',
      component: SoftwareDevelopmentView,
    },
    {
      path: '/solar-power-services',
      name: 'solar-power-services',
      component: SolarPowerServicesView,
    },
    {
      path: '/solar-power-training',
      name: 'solar-power-training',
      component: SolarPowerTrainingView,
    },
  ],
})

export default router
