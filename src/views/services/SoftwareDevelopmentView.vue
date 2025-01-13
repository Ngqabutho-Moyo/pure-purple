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
            <h1 class="text-3xl font-bold mb-4">Software Development</h1>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md mt-6">
            <h1 class="text-2xl font-bold">Overview</h1>
            <p>In today's fast-paced digital landscape, custom software solutions can be a game-changer for businesses
              looking to stay ahead of the curve. At Pure Purple, we offer software development as a service, designed
              to help corporate and individual clients achieve their unique goals and objectives.
              Our team of expert software developers will work closely with you to understand your business needs and
              challenges. We'll then design, develop, and deploy custom software solutions that meet your specific
              requirements. From mobile and web applications to enterprise software and systems integration, we have the
              expertise and experience to deliver high-quality solutions that drive real results.
              With Pure Purple's software development services, you'll benefit from a tailored approach that addresses
              your unique business needs. We'll help you improve operational efficiency, enhance customer experience,
              and gain a competitive edge in your market. Our developers are proficient in a range of programming
              languages and technologies, ensuring that we can deliver solutions that integrate seamlessly with your
              existing infrastructure.
            </p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md mt-6">
            <h1 class="text-2xl font-bold">Packages</h1>
            <div class="grid grid-cols-2 gap-2 p-3">
              <Card>
                <h1 class="text-xl font-bold">Starter</h1>
                <ul>
                  <li>&#8226;Basic software development services</li>
                  <li>&#8226;Designing, developing, and deploying small-scale software applications</li>
                  <!-- <li>&#8226;Monthly progress meetings</li> -->
                </ul>
                <!-- <p>$0.00</p> -->
              </Card>
              <Card>
                <h1 class="text-xl font-bold">Growth</h1>
                <ul>
                  <li>&#8226;Advanced software development services</li>
                  <li>&#8226;Custom software development</li>
                  <li>&#8226;System integration and testing</li>
                </ul>
                <!-- <p>$0.00</p> -->
              </Card>
            </div>
            <div class="grid grid-cols-2 gap-2 p-3">
              <Card>
                <h1 class="text-xl font-bold">Enterprise</h1>
                <ul>
                  <li>&#8226;Comprehensive software development services</li>
                  <li>&#8226;Enterprise software development</li>
                  <li>&#8226;Cloud migration and DevOps</li>
                </ul>
                <!-- <p>$0.00</p> -->
              </Card>
              <Card>
                <h1 class="text-xl font-bold">Premium</h1>
                <ul>
                  <li>&#8226;Dedicated development teams</li>
                  <li>&#8226;Priority support and customized solutions</li>
                  <!-- <li>&#8226;Priority support and service</li> -->
                </ul>
                <!-- <p>$0.00</p> -->
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
