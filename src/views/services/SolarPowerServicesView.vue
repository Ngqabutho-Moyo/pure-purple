<script setup>
import Card from '@/components/Card.vue';
// const _title = 'Coding';
// const description = "Purepurple's coding courses are designed to provide students with the skills and knowledge needed to succeed in the tech industry. The courses are divided into several categories, including Web Development, Programming Fundamentals, Data Science and Machine Learning, Mobile App Development, and Cybersecurity."
</script>

<template>
  <section class="bg-purple-100">
    <div class="container m-auto py-10 px-6">
      <div class="grid grid-cols-2 md:grid-cols-70/30 w-full gap-6">
        <div>
          <div class="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
            <h1 class="text-3xl font-bold mb-4">Web Development</h1>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md mt-6">
            <h1 class="text-2xl font-bold">Overview</h1>
            <p>Purepurple offers full-service web development solutions designed to help businesses establish a powerful
              online presence and streamline their digital operations. We provide a range of services, including custom
              website development, system architecture and engineering, and ongoing maintenance and support. Our team of
              experienced professionals works closely with clients to determine the best digital solution for their
              specific needs and budget. We conduct thorough assessments to understand your goals and provide detailed
              recommendations for design and development. Our development services include building high-performance
              websites, web applications, and content management systems. We also provide performance monitoring and
              maintenance to ensure your digital platforms are operating at peak efficiency. In addition to development,
              we offer consulting and optimization services to help clients improve user experience and maximize their
              online performance. Our goal is to provide a comprehensive web solution that meets your business needs and
              helps you grow. Purepurple is committed to providing exceptional customer service and support throughout
              the entire process, from initial consultation to ongoing maintenance and updates</p>
          </div>
          <!-- <div class="bg-white p-6 rounded-lg shadow-md mt-6">
            <h1 class="text-2xl font-bold">Pricing</h1>
            <div class="grid grid-cols-3 gap-3">
              <Card>
                <h1 class="text-xl font-bold">Basic</h1>
                <p>The Basic Package is designed for homeowners and small businesses with basic solar power needs. This
                  package typically includes a standard solar panel installation, a basic monitoring system, and a
                  limited warranty.</p>
                <p>$0.00</p>
              </Card>
              <Card>
                <h1 class="text-xl font-bold">Premium</h1>
                <p>
                  The Premium Package is designed for homeowners and businesses with more complex solar power needs.
                  This package typically includes a high-efficiency solar panel installation, an advanced monitoring
                  system, and an extended warranty.
                </p>
                <p>$0.00</p>
              </Card>
              <Card>
                <h1 class="text-xl font-bold">Custom</h1>
                <p>The Custom Package is designed for large businesses, commercial properties, and government
                  institutions with unique solar power needs. This package typically includes a customized solar panel
                  installation, a sophisticated monitoring system, and a comprehensive warranty.
                </p>
                <p>$0.00</p>
              </Card>
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
