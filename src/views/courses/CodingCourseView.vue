<script setup>
import Card from '@/components/Card.vue'
import PageHeader from '@/components/PageHeader.vue'
</script>

<template>
  <PageHeader title="Coding" subtitle="Master programming from fundamentals to advanced topics" />

  <section class="bg-purple-50 py-16">
    <div class="max-w-4xl mx-auto px-6 space-y-8">
      <div class="bg-white p-8 rounded-2xl shadow-md border border-purple-100/50">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
        <p class="text-gray-600 leading-relaxed">The Web Development course teaches students how to build dynamic web applications using HTML, CSS,
          JavaScript, and popular frameworks like React and Angular. The Programming Fundamentals course covers
          the basics of programming, including data types, variables, loops, and control structures, using
          languages like Python, Java, and C++. The Data Science and Machine Learning course explores the world of
          data science and machine learning, covering topics like data analysis, visualization, and modeling using
          libraries like Pandas, NumPy, and scikit-learn.
          The Mobile App Development course teaches students how to build native mobile apps for Android and iOS
          using frameworks like React Native and Flutter. The Cybersecurity course covers the latest cybersecurity
          threats and teaches students how to protect their applications and data using best practices and
          cutting-edge tools.</p>
      </div>

      <div class="bg-white p-8 rounded-2xl shadow-md border border-purple-100/50">
        <h2 class="text-2xl font-bold text-gray-900 mb-2">Duration</h2>
        <p class="text-gray-600 flex items-center gap-2">
          <i class="pi pi-clock text-purple-500"></i>
          5 days
        </p>
      </div>

      <div class="bg-white p-8 rounded-2xl shadow-md border border-purple-100/50">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">Content</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card bg="bg-gradient-to-b from-purple-50 to-white">
            <div class="text-center">
              <span class="inline-block px-3 py-1 text-xs font-semibold text-purple-600 bg-purple-100 rounded-full mb-3">Beginner</span>
              <p class="text-sm text-gray-500">Perfect for those new to coding, covering the basics of programming and web development</p>
              <p class="text-lg font-bold text-purple-600 mt-3">$0.00</p>
            </div>
          </Card>
          <Card bg="bg-gradient-to-b from-purple-50 to-white">
            <div class="text-center">
              <span class="inline-block px-3 py-1 text-xs font-semibold text-fuchsia-600 bg-fuchsia-100 rounded-full mb-3">Intermediate</span>
              <p class="text-sm text-gray-500">Designed for those with some coding experience, exploring data structures, algorithms, and machine learning</p>
              <p class="text-lg font-bold text-purple-600 mt-3">$0.00</p>
            </div>
          </Card>
          <Card bg="bg-gradient-to-b from-purple-50 to-white">
            <div class="text-center">
              <span class="inline-block px-3 py-1 text-xs font-semibold text-violet-600 bg-violet-100 rounded-full mb-3">Advanced</span>
              <p class="text-sm text-gray-500">Ideal for experienced coders, diving deeper into cloud computing and cybersecurity</p>
              <p class="text-lg font-bold text-purple-600 mt-3">$0.00</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  </section>
</template>
