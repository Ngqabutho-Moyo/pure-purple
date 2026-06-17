<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <footer class="bg-gradient-to-br from-purple-950 via-purple-900 to-indigo-950 text-white">
    <div class="max-w-7xl mx-auto px-6 py-16">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div class="md:col-span-1">
          <div class="flex items-center gap-3 mb-4">
            <img src="/src/assets/img/pp1.jpg" alt="Pure Purple" class="w-10 h-10 rounded-lg">
            <span class="text-xl font-bold">PurePurple</span>
          </div>
          <p class="text-purple-300 text-sm leading-relaxed">Converging technology, data, and sustainability to drive growth and positive impact.</p>
        </div>

        <div>
          <h3 class="font-semibold text-sm uppercase tracking-wider mb-4 text-purple-300">Courses</h3>
          <div class="space-y-3">
            <RouterLink to="/courses/coding" class="block text-sm text-purple-200 hover:text-white transition-colors">Back End Development</RouterLink>
            <RouterLink to="/courses/data-analytics" class="block text-sm text-purple-200 hover:text-white transition-colors">Data Science</RouterLink>
            <RouterLink to="/courses/networking" class="block text-sm text-purple-200 hover:text-white transition-colors">Networking</RouterLink>
            <RouterLink to="/courses/solar-power" class="block text-sm text-purple-200 hover:text-white transition-colors">Server Architecture</RouterLink>
          </div>
        </div>

        <div>
          <h3 class="font-semibold text-sm uppercase tracking-wider mb-4 text-purple-300">Services</h3>
          <div class="space-y-3">
            <RouterLink to="/services/data-analytics" class="block text-sm text-purple-200 hover:text-white transition-colors">Data Analytics</RouterLink>
            <RouterLink to="/services/software-development" class="block text-sm text-purple-200 hover:text-white transition-colors">Software Development</RouterLink>
            <RouterLink to="/services/solar-power" class="block text-sm text-purple-200 hover:text-white transition-colors">Web Development</RouterLink>
          </div>
        </div>

        <div>
          <h3 class="font-semibold text-sm uppercase tracking-wider mb-4 text-purple-300">Contact</h3>
          <div class="space-y-3 text-sm text-purple-200">
            <div class="flex items-center gap-2">
              <i class="pi pi-map-marker text-purple-400"></i>
              <span>194 Baines Avenue, Harare</span>
            </div>
            <div class="flex items-center gap-2">
              <i class="pi pi-phone text-purple-400"></i>
              <span>+263 71 288 4283</span>
            </div>
            <div class="flex items-center gap-2">
              <i class="pi pi-envelope text-purple-400"></i>
              <span>purepurple312@gmail.com</span>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-12 pt-8 border-t border-purple-800/50 text-center">
        <p class="text-sm text-purple-400">&copy; {{ new Date().getFullYear() }} Purepurple Technologies (Pvt) Ltd. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>
