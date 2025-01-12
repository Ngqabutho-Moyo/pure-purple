<script setup>
import Card from '@/components/Card.vue';
import { RouterLink } from 'vue-router';
</script>

<template>
  <!-- <Navbar></Navbar> -->
  <div class="py-10 px-10 mt-10">
    <div id="container" class="mb-10">
      <img src="/src/assets/img/pp1.jpg">
    </div>
    <div class="mb-10">
      <h1 class="text-3xl mb-3 text-purple-600 font-bold"><strong>About</strong></h1>
      <p class="text-lg">Pure Purple is a pioneering company that converges technology, data, and sustainability to
        drive growth and positive impact. Our diverse portfolio includes expert-led courses, customized services, and
        solar power installation and maintenance solutions. Join us in our mission to empower individuals, businesses,
        and communities to thrive in a rapidly evolving world.</p>
    </div>
    <div class="mb-10">
      <h1 class="text-3xl mb-3 text-purple-600 font-bold"><strong>Our Services</strong></h1>
      <div class="grid grid-cols-3 gap-3 mb-5">
        <Card>
          <h2 class="text-xl font-bold">Coding</h2>
          <p>Learn in-demand coding skills with our expert-led courses and boost your career prospects in software
            development.
          </p>
          <div class="mt-5">
            <RouterLink to="coding"><button
                class=" inline-block bg-purple-300 text-white rounded-lg px-4 py-2 hover:bg-purple-600">Read
                More</button>
            </RouterLink>
          </div>
        </Card>
        <Card>
          <h2 class="text-xl font-bold">Data Analytics</h2>
          <p>Learn the skills to extract insights from data and drive business growth with our expert-led data analytics
            courses.
          </p>
          <div class="mt-5">
            <RouterLink to="data-analytics"><button
                class=" inline-block bg-purple-300 text-white rounded-lg px-4 py-2 hover:bg-purple-600">Read
                More</button>
            </RouterLink>
          </div>
        </Card>
        <Card>
          <h2 class="text-xl font-bold">Software Development</h2>
          <p>Learn the skills to design, develop, and deploy software solutions that drive innovation and business
            growth with our expert-led software development courses.
          </p>
          <div class="mt-5">
            <RouterLink to="software-development"><button
                class=" inline-block bg-purple-300 text-white rounded-lg px-4 py-2 hover:bg-purple-600">Read
                More</button>
            </RouterLink>
          </div>
        </Card>
      </div>
      <div class="grid grid-cols-3 gap-3">
        <Card>
          <h2 class="text-xl font-bold">Solar Power Training</h2>
          <p>Learn the skills to design, install, and maintain solar power systems with our expert-led training courses.
          </p>
          <div class="mt-5">
            <RouterLink to="solar-power-training"><button
                class=" inline-block bg-purple-300 text-white rounded-lg px-4 py-2 hover:bg-purple-600">Read
                More</button>
            </RouterLink>
          </div>
        </Card>
        <Card>
          <h2 class="text-xl font-bold">Solar Power Services</h2>
          <p>Get professional solar power installation, repair, and maintenance services from our experienced and
            certified technicians.
          </p>
          <div class="mt-5">
            <RouterLink to="solar-power-services"><button
                class=" inline-block bg-purple-300 text-white rounded-lg px-4 py-2 hover:bg-purple-600">Read
                More</button>
            </RouterLink>
          </div>
        </Card>
      </div>
    </div>
    <div class="mb-10">
      <h1 class="text-3xl mb-3 text-purple-600 font-bold"><strong>Contact Us</strong></h1>
      <div id="contact-us" class="grid grid-cols-3 gap-3">
        <Card>
          <div id="address">
            <div id="location-header">
              <i class="pi pi-map-marker" style="font-size: 2rem"></i>
              <!-- <h2 class="text-xl font-bold">Address</h2> -->
            </div>
            <div>
              <p>14 St Gorge House</p>
              <p>285 Hebert Chitepo Ave.</p>
              <p>Harare</p>
            </div>
          </div>
        </Card>
        <Card>
          <div id="phone">
            <div id="phone-header">
              <i class="pi pi-phone" style="font-size: 2rem"></i>
              <!-- <h2 class="text-xl font-bold">Phone</h2> -->
            </div>
            <div>
              <p>+263 71 288 4283</p>
              <p>+263 77 217 9106</p>
            </div>
          </div>
        </Card>
        <Card>
          <div id="email">
            <div id="email-header">
              <i class="pi pi-envelope" style="font-size: 2rem"></i>
              <!-- <h2 class="text-xl font-bold">Email</h2> -->
            </div>
            <div>
              <p>purepurple123@gmail.com</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  </div>
</template>

<style scoped>
#container {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* #contact-us >div{
  display: flex;
} */

#location-header {
  display: flex;
}

#phone-header {
  display: flex;
}

#email-header {
  display: flex;
}
</style>
