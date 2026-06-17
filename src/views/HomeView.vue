<script setup>
import Card from '@/components/Card.vue'
import { RouterLink } from 'vue-router'
import TrainingCalendarView from './TrainingCalendarView.vue'

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <!-- Hero Section -->
  <section class="relative overflow-hidden bg-gradient-to-br from-purple-950 via-purple-800 to-violet-700 text-white">
    <div class="absolute inset-0 opacity-20">
      <div class="absolute top-20 left-10 w-72 h-72 bg-purple-400 rounded-full blur-3xl animate-float"></div>
      <div class="absolute bottom-20 right-10 w-96 h-96 bg-violet-400 rounded-full blur-3xl animate-float" style="animation-delay: -3s;"></div>
      <div class="absolute top-1/2 left-1/2 w-64 h-64 bg-fuchsia-400 rounded-full blur-3xl animate-float" style="animation-delay: -1.5s;"></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-6 py-32 md:py-40 text-center">
      <div class="animate-fade-in">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm">
          <span class="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
          Technology &bull; Data &bull; Sustainability
        </div>
        <h1 class="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
          Empowering the Future<br>
          <span class="bg-gradient-to-r from-purple-300 via-fuchsia-300 to-violet-300 bg-clip-text text-transparent">with PurePurple</span>
        </h1>
        <p class="text-lg md:text-xl text-purple-200 max-w-2xl mx-auto mb-10 leading-relaxed">
          Expert-led courses, customized technology services, and sustainable solutions to help individuals and businesses thrive.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button @click="scrollTo('courses')" class="px-8 py-3.5 bg-white text-purple-700 font-semibold rounded-full hover:shadow-2xl hover:shadow-purple-500/25 hover:-translate-y-0.5 transition-all duration-300">
            Explore Courses
          </button>
          <button @click="scrollTo('services')" class="px-8 py-3.5 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-300">
            Our Services
          </button>
        </div>
      </div>
    </div>

    <div class="absolute bottom-0 left-0 right-0">
      <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full">
        <path d="M0 80L1440 80L1440 30C1200 60 960 0 720 30C480 60 240 0 0 30L0 80Z" fill="white"/>
      </svg>
    </div>
  </section>

  <!-- About Section -->
  <section id="about" class="py-20 md:py-28 bg-white">
    <div class="max-w-7xl mx-auto px-6">
      <div class="max-w-3xl mx-auto text-center animate-slide-up">
        <span class="inline-block px-4 py-1 mb-4 text-sm font-semibold text-purple-600 bg-purple-50 rounded-full">Who We Are</span>
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About <span class="text-purple-600">PurePurple</span></h2>
        <p class="text-lg text-gray-600 leading-relaxed">
          Purepurple Technologies (Pvt) Ltd. is a pioneering company that converges technology, data, and
          sustainability to drive growth and positive impact. Our diverse portfolio includes expert-led courses,
          customized services, and solar power installation and maintenance solutions. Join us in our mission to
          empower individuals, businesses, and communities to thrive in a rapidly evolving world.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        <div class="text-center p-8 rounded-2xl bg-gradient-to-b from-purple-50 to-white border border-purple-100/50">
          <div class="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-purple-600 to-violet-500 flex items-center justify-center shadow-lg shadow-purple-200">
            <i class="pi pi-book text-white" style="font-size: 1.5rem"></i>
          </div>
          <h3 class="text-lg font-bold text-gray-900 mb-2">Expert Training</h3>
          <p class="text-sm text-gray-500">Industry-leading courses taught by experienced professionals</p>
        </div>
        <div class="text-center p-8 rounded-2xl bg-gradient-to-b from-purple-50 to-white border border-purple-100/50">
          <div class="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-purple-600 to-violet-500 flex items-center justify-center shadow-lg shadow-purple-200">
            <i class="pi pi-cog text-white" style="font-size: 1.5rem"></i>
          </div>
          <h3 class="text-lg font-bold text-gray-900 mb-2">Custom Solutions</h3>
          <p class="text-sm text-gray-500">Tailored technology services to meet your unique needs</p>
        </div>
        <div class="text-center p-8 rounded-2xl bg-gradient-to-b from-purple-50 to-white border border-purple-100/50">
          <div class="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-purple-600 to-violet-500 flex items-center justify-center shadow-lg shadow-purple-200">
            <i class="pi pi-bolt text-white" style="font-size: 1.5rem"></i>
          </div>
          <h3 class="text-lg font-bold text-gray-900 mb-2">Sustainable Impact</h3>
          <p class="text-sm text-gray-500">Driving growth while promoting sustainability</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Courses Section -->
  <section id="courses" class="py-20 md:py-28 bg-gradient-to-b from-purple-50 to-white">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center mb-16">
        <span class="inline-block px-4 py-1 mb-4 text-sm font-semibold text-purple-600 bg-purple-100 rounded-full">Learn & Grow</span>
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900">Our <span class="text-purple-600">Courses</span></h2>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <div class="mb-4">
            <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center mb-4 shadow-lg shadow-purple-200">
              <i class="pi pi-code text-white" style="font-size: 1.25rem"></i>
            </div>
            <h3 class="text-lg font-bold text-gray-900 mb-2">Back End Development</h3>
            <p class="text-sm text-gray-500 leading-relaxed">Learn in-demand coding skills with our expert-led courses and boost your career in backend and API development.</p>
          </div>
          <RouterLink to="/courses/coding" class="inline-flex items-center gap-2 text-sm font-semibold text-purple-600 hover:text-purple-700 group">
            Learn more
            <i class="pi pi-arrow-right text-xs transition-transform group-hover:translate-x-1"></i>
          </RouterLink>
        </Card>

        <Card>
          <div class="mb-4">
            <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-fuchsia-500 to-pink-600 flex items-center justify-center mb-4 shadow-lg shadow-fuchsia-200">
              <i class="pi pi-chart-bar text-white" style="font-size: 1.25rem"></i>
            </div>
            <h3 class="text-lg font-bold text-gray-900 mb-2">Data Science</h3>
            <p class="text-sm text-gray-500 leading-relaxed">Comprehensive training in data science, covering topics from basics to advanced levels.</p>
          </div>
          <RouterLink to="/courses/data-analytics" class="inline-flex items-center gap-2 text-sm font-semibold text-purple-600 hover:text-purple-700 group">
            Learn more
            <i class="pi pi-arrow-right text-xs transition-transform group-hover:translate-x-1"></i>
          </RouterLink>
        </Card>

        <Card>
          <div class="mb-4">
            <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-4 shadow-lg shadow-blue-200">
              <i class="pi pi-sitemap text-white" style="font-size: 1.25rem"></i>
            </div>
            <h3 class="text-lg font-bold text-gray-900 mb-2">Computer Networking</h3>
            <p class="text-sm text-gray-500 leading-relaxed">Master computer networking fundamentals and get connected, get ahead with Purepurple.</p>
          </div>
          <RouterLink to="/courses/networking" class="inline-flex items-center gap-2 text-sm font-semibold text-purple-600 hover:text-purple-700 group">
            Learn more
            <i class="pi pi-arrow-right text-xs transition-transform group-hover:translate-x-1"></i>
          </RouterLink>
        </Card>

        <Card>
          <div class="mb-4">
            <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mb-4 shadow-lg shadow-emerald-200">
              <i class="pi pi-server text-white" style="font-size: 1.25rem"></i>
            </div>
            <h3 class="text-lg font-bold text-gray-900 mb-2">Server Architecture</h3>
            <p class="text-sm text-gray-500 leading-relaxed">Learn the skills to install, deploy and maintain data centre infrastructure.</p>
          </div>
          <RouterLink to="/courses/solar-power" class="inline-flex items-center gap-2 text-sm font-semibold text-purple-600 hover:text-purple-700 group">
            Learn more
            <i class="pi pi-arrow-right text-xs transition-transform group-hover:translate-x-1"></i>
          </RouterLink>
        </Card>
      </div>
    </div>
  </section>

  <!-- Services Section -->
  <section id="services" class="py-20 md:py-28 bg-white">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center mb-16">
        <span class="inline-block px-4 py-1 mb-4 text-sm font-semibold text-purple-600 bg-purple-50 rounded-full">What We Do</span>
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900">Our <span class="text-purple-600">Services</span></h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="group relative p-8 rounded-2xl bg-gradient-to-b from-white to-purple-50 border border-purple-100 hover:shadow-2xl hover:shadow-purple-100 transition-all duration-500 hover:-translate-y-2">
          <div class="absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r from-purple-500 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center mb-6 shadow-lg shadow-purple-200 group-hover:scale-110 transition-transform duration-300">
            <i class="pi pi-chart-line text-white" style="font-size: 1.5rem"></i>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-3">Data Analytics</h3>
          <p class="text-sm text-gray-500 leading-relaxed mb-6">Transform your business with Purepurple's Data Analytics as a Service. Unlock insights from your data.</p>
          <RouterLink to="/services/data-analytics" class="inline-flex items-center gap-2 text-sm font-semibold text-purple-600 hover:text-purple-700 group/link">
            Explore service
            <i class="pi pi-arrow-right text-xs transition-transform group-hover/link:translate-x-1"></i>
          </RouterLink>
        </div>

        <div class="group relative p-8 rounded-2xl bg-gradient-to-b from-white to-purple-50 border border-purple-100 hover:shadow-2xl hover:shadow-purple-100 transition-all duration-500 hover:-translate-y-2">
          <div class="absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r from-fuchsia-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-fuchsia-500 to-pink-600 flex items-center justify-center mb-6 shadow-lg shadow-fuchsia-200 group-hover:scale-110 transition-transform duration-300">
            <i class="pi pi-desktop text-white" style="font-size: 1.5rem"></i>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-3">Software Development</h3>
          <p class="text-sm text-gray-500 leading-relaxed mb-6">Transform your business with Purepurple's custom Software Development as a Service.</p>
          <RouterLink to="/services/software-development" class="inline-flex items-center gap-2 text-sm font-semibold text-purple-600 hover:text-purple-700 group/link">
            Explore service
            <i class="pi pi-arrow-right text-xs transition-transform group-hover/link:translate-x-1"></i>
          </RouterLink>
        </div>

        <div class="group relative p-8 rounded-2xl bg-gradient-to-b from-white to-purple-50 border border-purple-100 hover:shadow-2xl hover:shadow-purple-100 transition-all duration-500 hover:-translate-y-2">
          <div class="absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-6 shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform duration-300">
            <i class="pi pi-globe text-white" style="font-size: 1.5rem"></i>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-3">Web Development</h3>
          <p class="text-sm text-gray-500 leading-relaxed mb-6">Individual and enterprise web applications for sole traders and large organizations.</p>
          <RouterLink to="/services/solar-power" class="inline-flex items-center gap-2 text-sm font-semibold text-purple-600 hover:text-purple-700 group/link">
            Explore service
            <i class="pi pi-arrow-right text-xs transition-transform group-hover/link:translate-x-1"></i>
          </RouterLink>
        </div>
      </div>
    </div>
  </section>

  <!-- Training Calendar Section -->
  <section id="calendar" class="py-20 md:py-28 bg-gradient-to-b from-purple-50 to-white">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center mb-12">
        <span class="inline-block px-4 py-1 mb-4 text-sm font-semibold text-purple-600 bg-purple-100 rounded-full">Plan Ahead</span>
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900">Training <span class="text-purple-600">Calendar</span></h2>
      </div>
      <div class="bg-white rounded-2xl shadow-lg border border-purple-100/50 p-6 overflow-hidden">
        <TrainingCalendarView />
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section id="contact" class="py-20 md:py-28 bg-white">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center mb-16">
        <span class="inline-block px-4 py-1 mb-4 text-sm font-semibold text-purple-600 bg-purple-50 rounded-full">Get In Touch</span>
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900">Contact <span class="text-purple-600">Us</span></h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <div class="text-center p-8 rounded-2xl bg-gradient-to-b from-purple-50 to-white border border-purple-100/50 hover:shadow-xl hover:shadow-purple-100 transition-all duration-300 hover:-translate-y-1">
          <div class="w-14 h-14 mx-auto mb-5 rounded-full bg-gradient-to-br from-purple-600 to-violet-500 flex items-center justify-center shadow-lg shadow-purple-200">
            <i class="pi pi-map-marker text-white" style="font-size: 1.25rem"></i>
          </div>
          <h3 class="font-semibold text-gray-900 mb-2">Visit Us</h3>
          <p class="text-sm text-gray-500">194 Baines Avenue</p>
          <p class="text-sm text-gray-500">Harare</p>
        </div>

        <div class="text-center p-8 rounded-2xl bg-gradient-to-b from-purple-50 to-white border border-purple-100/50 hover:shadow-xl hover:shadow-purple-100 transition-all duration-300 hover:-translate-y-1">
          <div class="w-14 h-14 mx-auto mb-5 rounded-full bg-gradient-to-br from-purple-600 to-violet-500 flex items-center justify-center shadow-lg shadow-purple-200">
            <i class="pi pi-phone text-white" style="font-size: 1.25rem"></i>
          </div>
          <h3 class="font-semibold text-gray-900 mb-2">Call Us</h3>
          <p class="text-sm text-gray-500">+263 71 288 4283</p>
          <p class="text-sm text-gray-500">+263 77 145 4784</p>
        </div>

        <div class="text-center p-8 rounded-2xl bg-gradient-to-b from-purple-50 to-white border border-purple-100/50 hover:shadow-xl hover:shadow-purple-100 transition-all duration-300 hover:-translate-y-1">
          <div class="w-14 h-14 mx-auto mb-5 rounded-full bg-gradient-to-br from-purple-600 to-violet-500 flex items-center justify-center shadow-lg shadow-purple-200">
            <i class="pi pi-envelope text-white" style="font-size: 1.25rem"></i>
          </div>
          <h3 class="font-semibold text-gray-900 mb-2">Email Us</h3>
          <p class="text-sm text-gray-500">purepurple312@gmail.com</p>
        </div>
      </div>
    </div>
  </section>
</template>
