<script setup>
import Card from '@/components/Card.vue'
import PageHeader from '@/components/PageHeader.vue'
</script>

<template>
  <PageHeader title="Big Data Analytics" subtitle="Unlock the full potential of your data" />

  <section class="bg-purple-50 py-16">
    <div class="max-w-4xl mx-auto px-6 space-y-8">
      <div class="bg-white p-8 rounded-2xl shadow-md border border-purple-100/50">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
        <p class="text-gray-600 leading-relaxed">In today's data-driven world, making informed decisions is crucial for success. At Purepurple, we understand the importance of data analytics in driving business growth and improvement. That's why we offer Data Analytics as a Service, designed to help corporate and individual clients unlock the full potential of their data.
Our team of expert data analysts and scientists will work closely with you to understand your business goals and challenges. We'll then collect, analyze, and interpret your data to provide actionable insights and recommendations. Whether you're looking to improve operational efficiency, enhance customer experience, or identify new business opportunities, our data analytics service can help.
With Purepurple's Data Analytics as a Service, you'll gain access to advanced data analytics tools and technologies, as well as expertise in machine learning, predictive analytics, and data visualization. Our service is tailored to meet the unique needs of your business, and we'll work with you to develop a customized analytics solution that drives real results.</p>
      </div>

      <div class="bg-white p-8 rounded-2xl shadow-md border border-purple-100/50">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">Packages</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card bg="bg-gradient-to-b from-purple-50 to-white">
            <span class="inline-block px-3 py-1 text-xs font-semibold text-purple-600 bg-purple-100 rounded-full mb-3">Starter</span>
            <ul class="space-y-2 text-sm text-gray-500">
              <li class="flex items-center gap-2"><i class="pi pi-check-circle text-purple-500 text-xs"></i>Data analysis and reporting</li>
              <li class="flex items-center gap-2"><i class="pi pi-check-circle text-purple-500 text-xs"></i>Basic data visualization</li>
              <li class="flex items-center gap-2"><i class="pi pi-check-circle text-purple-500 text-xs"></i>Monthly progress meetings</li>
            </ul>
          </Card>
          <Card bg="bg-gradient-to-b from-purple-50 to-white">
            <span class="inline-block px-3 py-1 text-xs font-semibold text-fuchsia-600 bg-fuchsia-100 rounded-full mb-3">Growth</span>
            <ul class="space-y-2 text-sm text-gray-500">
              <li class="flex items-center gap-2"><i class="pi pi-check-circle text-fuchsia-500 text-xs"></i>Advanced data analysis and modeling</li>
              <li class="flex items-center gap-2"><i class="pi pi-check-circle text-fuchsia-500 text-xs"></i>Custom data visualization</li>
              <li class="flex items-center gap-2"><i class="pi pi-check-circle text-fuchsia-500 text-xs"></i>Quarterly strategy sessions</li>
            </ul>
          </Card>
          <Card bg="bg-gradient-to-b from-purple-50 to-white">
            <span class="inline-block px-3 py-1 text-xs font-semibold text-violet-600 bg-violet-100 rounded-full mb-3">Enterprise</span>
            <ul class="space-y-2 text-sm text-gray-500">
              <li class="flex items-center gap-2"><i class="pi pi-check-circle text-violet-500 text-xs"></i>Comprehensive data analytics and insights</li>
              <li class="flex items-center gap-2"><i class="pi pi-check-circle text-violet-500 text-xs"></i>Advanced machine learning and AI</li>
              <li class="flex items-center gap-2"><i class="pi pi-check-circle text-violet-500 text-xs"></i>Dedicated account management</li>
            </ul>
          </Card>
          <Card bg="bg-gradient-to-b from-purple-50 to-white">
            <span class="inline-block px-3 py-1 text-xs font-semibold text-indigo-600 bg-indigo-100 rounded-full mb-3">Premium</span>
            <ul class="space-y-2 text-sm text-gray-500">
              <li class="flex items-center gap-2"><i class="pi pi-check-circle text-indigo-500 text-xs"></i>Personalized data analytics and strategy</li>
              <li class="flex items-center gap-2"><i class="pi pi-check-circle text-indigo-500 text-xs"></i>Advanced data science and engineering</li>
              <li class="flex items-center gap-2"><i class="pi pi-check-circle text-indigo-500 text-xs"></i>Priority support and service</li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  </section>
</template>
