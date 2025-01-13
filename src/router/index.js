import { createRouter, createWebHashHistory } from 'vue-router'
import CodingCourseView from '@/views/courses/CodingCourseView.vue'
import DataAnalyticsCourseView from '@/views/courses/DataAnalyticsCourseView.vue'
import SoftwareDevelopmentCourseView from '@/views/courses/SoftwareDevelopmentCourseView.vue'
import SolarPowerTrainingView from '@/views/courses/SolarPowerTrainingCourseView.vue'
import DataAnalyticsView from '@/views/services/DataAnalyticsView.vue'
import SoftwareDevelopmentView from '@/views/services/SoftwareDevelopmentView.vue'
import SolarPowerServicesView from '@/views/services/SolarPowerServicesView.vue'
import HomeView from '@/views/HomeView.vue'
// import { name } from '@vue/eslint-config-prettier/skip-formatting'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/courses/coding',
      name: 'coding-course',
      component: CodingCourseView,
    },
    {
      path: '/courses/data-analytics',
      name: 'data-analytics-course',
      component: DataAnalyticsCourseView,
    },
    {
      path: '/courses/software-development',
      name: 'software-development-course',
      component: SoftwareDevelopmentCourseView,
    },
    {
      path: '/courses/solar-power',
      name: 'solar-power-course',
      component: SolarPowerTrainingView,
    },
    {
      path: '/services/data-analytics',
      name: 'data-analytics-service',
      component: DataAnalyticsView
    },
    {
      path: '/services/software-development',
      name: 'software-development-service',
      component: SoftwareDevelopmentView
    },
    {
      path: '/services/solar-power',
      name: 'solar-power-service',
      component: SolarPowerServicesView
    }

  ],
})

export default router
