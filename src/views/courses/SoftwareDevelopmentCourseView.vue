<script setup>
import Card from '@/components/Card.vue'
import PageHeader from '@/components/PageHeader.vue'
</script>

<template>
  <PageHeader title="Software Development" subtitle="From programming basics to advanced software engineering" />

  <section class="bg-purple-50 py-16">
    <div class="max-w-4xl mx-auto px-6 space-y-8">
      <div class="bg-white p-8 rounded-2xl shadow-md border border-purple-100/50">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
        <p class="text-gray-600 leading-relaxed">Purepurple's software development courses are designed to equip students with the skills and knowledge
          needed to design, develop, and deploy software applications. The courses cover a range of programming
          languages, frameworks, and technologies, including Java, Python, JavaScript, React, Angular, and more.
          The courses are structured to take students from the basics of programming to advanced software
          development concepts. Students learn about data structures, algorithms, object-oriented programming, and
          software design patterns. They also gain hands-on experience with industry-standard tools and
          technologies, such as Git, Jenkins, and Docker.
          Purepurple's software development courses are taught by experienced instructors who have industry
          expertise and a passion for teaching. They provide personalized attention and guidance, helping students
          to overcome challenges and achieve their goals.</p>
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
              <p class="text-sm text-gray-500">Foundations of programming, data structures, algorithms, OOP, and basic software development concepts</p>
              <p class="text-lg font-bold text-purple-600 mt-3">$0.00</p>
            </div>
          </Card>
          <Card bg="bg-gradient-to-b from-purple-50 to-white">
            <div class="text-center">
              <span class="inline-block px-3 py-1 text-xs font-semibold text-fuchsia-600 bg-fuchsia-100 rounded-full mb-3">Intermediate</span>
              <p class="text-sm text-gray-500">Web development, mobile app development, cloud computing, database management, and software testing</p>
              <p class="text-lg font-bold text-purple-600 mt-3">$0.00</p>
            </div>
          </Card>
          <Card bg="bg-gradient-to-b from-purple-50 to-white">
            <div class="text-center">
              <span class="inline-block px-3 py-1 text-xs font-semibold text-violet-600 bg-violet-100 rounded-full mb-3">Advanced</span>
              <p class="text-sm text-gray-500">AI, machine learning, cybersecurity, advanced design patterns, blockchain and IoT</p>
              <p class="text-lg font-bold text-purple-600 mt-3">$0.00</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  </section>
</template>
