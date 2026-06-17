<script setup>
import Card from '@/components/Card.vue';
// const _title = 'Coding';
// const description = "Pure Purple's coding courses are designed to provide students with the skills and knowledge needed to succeed in the tech industry. The courses are divided into several categories, including Web Development, Programming Fundamentals, Data Science and Machine Learning, Mobile App Development, and Cybersecurity."
</script>

<template>
  <section class="bg-purple-100">
    <div class="container m-auto py-10 px-6">
      <div class="grid grid-cols-2 md:grid-cols-70/30 w-full gap-6">
        <div>
          <div class="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
            <h1 class="text-3xl font-bold mb-4">Networking</h1>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md mt-6">
            <h1 class="text-2xl font-bold">Overview</h1>
            <p>In this comprehensive course, students will gain a solid understanding of computer networking fundamentals, including network architectures, protocols, and security. Through a combination of theoretical foundations and hands-on labs, students will learn how to design, implement, and manage computer networks.

</p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md mt-6">
              <h1 class="text-2xl font-bold">Duration</h1>
              <p>5 days</p>
            </div>
          <div class="bg-white p-6 rounded-lg shadow-md mt-6">
            <h1 class="text-2xl font-bold">Pricing</h1>
            <div class="grid grid-cols-3 gap-3">
              <Card>
                <h1 class="text-xl font-bold">Beginner</h1>
                <p>Networking standards, network devices, operating systems, application software and network devices</p>
                <p>$0.00</p>
              </Card>
              <Card>
                <h1 class="text-xl font-bold">Intermediate</h1>
                <p>Interconnecting network devices (local area networks, wide area networks), network cabling, network switches and virtual local area networks</p>
                <p>$0.00</p>
              </Card>
              <Card>
                <h1 class="text-xl font-bold">Advanced</h1>
                <p>wide area networks, Internet protocols, routers, firewalls and network security</p>
                <p>$0.00</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
