<script setup>
import Card from '@/components/Card.vue';
// import { RouterLink } from 'vue-router';s
</script>

<template>
  <!-- <Navbar></Navbar> -->
  <div class="py-10 px-10 mt-10">
    <div id="container" class="mb-10">
      <img src="/src/assets/img/pp1.jpg">
    </div>
    <div>
      <h1 class="text-3xl mb-3 text-purple-600 font-bold"><strong>About</strong></h1>
      <p class="text-lg">Pure Purple is a pioneering company that converges technology, data, and sustainability to
        drive growth and positive impact. Our diverse portfolio includes expert-led courses, customized services, and
        solar power installation and maintenance solutions. Join us in our mission to empower individuals, businesses,
        and communities to thrive in a rapidly evolving world.</p>
    </div>
    <div>
      <h1 class="text-3xl mb-3 text-purple-600 font-bold"><strong>Our Services</strong></h1>
      <div class="grid grid-cols-3 gap-3">
        <Card>
          <h2 class="text-xl font-bold">Coding</h2>
          <p>Learn in-demand coding skills with our expert-led courses and boost your career prospects in software
            development.
          </p>
          <RouterLink to="#"><button
              class=" inline-block bg-cyan-500 text-white rounded-lg px-4 py-2 hover:bg-cyan-600">Read More</button>
          </RouterLink>
        </Card>
        <Card>
          <h2 class="text-xl font-bold">Data Analytics</h2>
          <p></p>
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
</style>
