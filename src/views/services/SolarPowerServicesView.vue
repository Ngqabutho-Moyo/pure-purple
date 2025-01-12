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
            <h1 class="text-3xl font-bold mb-4">Solar Power Services</h1>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md mt-6">
            <h1 class="text-2xl font-bold">Overview</h1>
            <p>Pure Purple's solar power services are designed to help homeowners and businesses harness the power of solar energy to reduce their reliance on traditional energy sources. The company offers a range of services, including solar panel installation, system design and engineering, and ongoing maintenance and repair.
Pure Purple's team of experienced professionals works closely with clients to determine the best solar power solution for their specific needs and budget. They conduct site assessments to determine the feasibility of solar power and provide detailed recommendations for system design and installation.
The company's solar panel installation services include the installation of high-quality solar panels, inverters, and mounting systems. They also provide system monitoring and maintenance services to ensure that solar power systems are operating at peak efficiency.
In addition to installation and maintenance services, Pure Purple also offers energy auditing and consulting services to help clients reduce their energy consumption and optimize their solar power systems. The company's goal is to provide clients with a comprehensive solar power solution that meets their energy needs and helps them save money on their energy bills.
Pure Purple's solar power services are available to homeowners and businesses in a variety of locations, and the company is committed to providing exceptional customer service and support throughout the entire process, from initial consultation to ongoing maintenance and repair.
            </p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md mt-6">
            <h1 class="text-2xl font-bold">Pricing</h1>
            <div class="grid grid-cols-3 gap-3">
              <Card>
                <h1 class="text-xl font-bold">Basic</h1>
                <p>The Basic Package is designed for homeowners and small businesses with basic solar power needs. This package typically includes a standard solar panel installation, a basic monitoring system, and a limited warranty.</p>
                <p>$0.00</p>
              </Card>
              <Card>
                <h1 class="text-xl font-bold">Premium</h1>
                <p>
The Premium Package is designed for homeowners and businesses with more complex solar power needs. This package typically includes a high-efficiency solar panel installation, an advanced monitoring system, and an extended warranty.
                </p>
                <p>$0.00</p>
              </Card>
              <Card>
                <h1 class="text-xl font-bold">Custom</h1>
                <p>The Custom Package is designed for large businesses, commercial properties, and government institutions with unique solar power needs. This package typically includes a customized solar panel installation, a sophisticated monitoring system, and a comprehensive warranty.
                </p>
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
