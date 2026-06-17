<script setup>
import Card from '@/components/Card.vue'
import PageHeader from '@/components/PageHeader.vue'
</script>

<template>
  <PageHeader title="Data Science" subtitle="From fundamentals to advanced applications in data science" />

  <section class="bg-purple-50 py-16">
    <div class="max-w-4xl mx-auto px-6 space-y-8">
      <div class="bg-white p-8 rounded-2xl shadow-md border border-purple-100/50">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
        <p class="text-gray-600 leading-relaxed">This immersive program is designed to take you on a journey from the fundamentals of data science to advanced applications, covering everything from statistics and data visualization to machine learning and natural language processing. You'll learn from experienced instructors who are passionate about data science and dedicated to helping you succeed.
Throughout the course, you'll work with real-world datasets and gain hands-on experience with popular data science tools like Python, R, and SQL. You'll also learn how to communicate complex data insights effectively to stakeholders, how to work collaboratively in a data-driven team, and how to stay up-to-date with the latest developments in the field.
Whether you're a professional looking to enhance your skills, a career-changer seeking a new challenge, or simply a curious learner, Purepurple's data science course is the perfect choice. By the end of the program, you'll have the skills, knowledge, and confidence to succeed in this exciting and rapidly evolving field.</p>
      </div>

      <div class="bg-white p-8 rounded-2xl shadow-md border border-purple-100/50">
        <h2 class="text-2xl font-bold text-gray-900 mb-2">Duration</h2>
        <p class="text-gray-600 flex items-center gap-2">
          <i class="pi pi-clock text-purple-500"></i>
          5 days
        </p>
      </div>

      <div class="bg-white p-8 rounded-2xl shadow-md border border-purple-100/50">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">Pricing</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card bg="bg-gradient-to-b from-purple-50 to-white">
            <div class="text-center">
              <span class="inline-block px-3 py-1 text-xs font-semibold text-purple-600 bg-purple-100 rounded-full mb-3">Beginner</span>
              <p class="text-sm text-gray-500">Foundations of data analysis, data visualization, Excel, SQL, statistics, and data cleaning</p>
              <p class="text-lg font-bold text-purple-600 mt-3">$0.00</p>
            </div>
          </Card>
          <Card bg="bg-gradient-to-b from-purple-50 to-white">
            <div class="text-center">
              <span class="inline-block px-3 py-1 text-xs font-semibold text-fuchsia-600 bg-fuchsia-100 rounded-full mb-3">Intermediate</span>
              <p class="text-sm text-gray-500">Data modeling, machine learning, Python, R, data storytelling, and big data</p>
              <p class="text-lg font-bold text-purple-600 mt-3">$0.00</p>
            </div>
          </Card>
          <Card bg="bg-gradient-to-b from-purple-50 to-white">
            <div class="text-center">
              <span class="inline-block px-3 py-1 text-xs font-semibold text-violet-600 bg-violet-100 rounded-full mb-3">Advanced</span>
              <p class="text-sm text-gray-500">Deep learning, NLP, advanced machine learning, big data analytics, and data governance</p>
              <p class="text-lg font-bold text-purple-600 mt-3">$0.00</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  </section>
</template>
