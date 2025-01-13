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
            <p>Pure Purple's data analytics courses are designed to equip students with the skills and knowledge needed to extract insights and meaning from data. The courses cover a range of topics, including data visualization, machine learning, statistical modeling, and data mining.
Students learn how to work with various data analytics tools and technologies, such as Excel, SQL, Tableau, Power BI, Python, R, and TensorFlow. They also gain hands-on experience with real-world datasets and projects, allowing them to apply theoretical concepts to practical problems.
The courses are taught by experienced instructors who have industry expertise and a passion for teaching. They provide personalized attention and guidance, helping students to overcome challenges and achieve their goals
            </p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md mt-6">
            <h1 class="text-2xl font-bold">Pricing</h1>
            <div class="grid grid-cols-3 gap-3">
              <Card>
                <h1 class="text-xl font-bold">Beginner</h1>
                <p>Foundations of data analysis, data visualization, Excel, SQL, statistics, and data cleaning</p>
                <p>$0.00</p>
              </Card>
              <Card>
                <h1 class="text-xl font-bold">Intermediate</h1>
                <p>Data modeling, machine learning, Python, R, data storytelling, and big data</p>
                <p>$0.00</p>
              </Card>
              <Card>
                <h1 class="text-xl font-bold">Advanced</h1>
                <p>Deep learning, natural language processing, advanced machine learning, big data analytics, and data governance.</p>
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
