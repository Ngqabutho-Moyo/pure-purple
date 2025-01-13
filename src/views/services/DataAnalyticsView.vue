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
            <h1 class="text-3xl font-bold mb-4">Data Analytics</h1>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md mt-6">
            <h1 class="text-2xl font-bold">Overview</h1>
            <p>In today's data-driven world, making informed decisions is crucial for success. At Pure Purple, we understand the importance of data analytics in driving business growth and improvement. That's why we offer Data Analytics as a Service, designed to help corporate and individual clients unlock the full potential of their data.
Our team of expert data analysts and scientists will work closely with you to understand your business goals and challenges. We'll then collect, analyze, and interpret your data to provide actionable insights and recommendations. Whether you're looking to improve operational efficiency, enhance customer experience, or identify new business opportunities, our data analytics service can help.
With Pure Purple's Data Analytics as a Service, you'll gain access to advanced data analytics tools and technologies, as well as expertise in machine learning, predictive analytics, and data visualization. Our service is tailored to meet the unique needs of your business, and we'll work with you to develop a customized analytics solution that drives real results.
            </p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md mt-6">
            <h1 class="text-2xl font-bold">Packages</h1>
            <div class="grid grid-cols-2 gap-2 p-3">
              <Card>
                <h1 class="text-xl font-bold">Starter</h1>
                <ul>
                  <li>&#8226;Data analysis and reporting</li>
                  <li>&#8226;Basic data visualization</li>
                  <li>&#8226;Monthly progress meetings</li>
                </ul>
                <!-- <p>$0.00</p> -->
              </Card>
              <Card>
                <h1 class="text-xl font-bold">Growth</h1>
                <ul>
                  <li>&#8226;Advanced data analysis and modeling</li>
                  <li>&#8226;Custom data visualization</li>
                  <li>&#8226;Quarterly strategy sessions</li>
                </ul>
                <!-- <p>$0.00</p> -->
              </Card>
            </div>
            <div class="grid grid-cols-2 gap-2 p-3">
              <Card>
                <h1 class="text-xl font-bold">Enterprise</h1>
                <ul>
                  <li>&#8226;Comprehensive data analytics and insights</li>
                  <li>&#8226;Advanced machine learning and AI</li>
                  <li>&#8226;Dedicated account management</li>
                </ul>
                <!-- <p>$0.00</p> -->
              </Card>
              <Card>
                <h1 class="text-xl font-bold">Premium</h1>
                <ul>
                  <li>&#8226;Personalized data analytics and strategy</li>
                  <li>&#8226;Advanced data science and engineering</li>
                  <li>&#8226;Priority support and service</li>
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
