<script setup>
import Card from '@/components/Card.vue'
import PageHeader from '@/components/PageHeader.vue'
</script>

<template>
  <PageHeader title="Software Development" subtitle="Custom software solutions to drive your business forward" />

  <section class="bg-purple-50 py-16">
    <div class="max-w-4xl mx-auto px-6 space-y-8">
      <div class="bg-white p-8 rounded-2xl shadow-md border border-purple-100/50">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
        <p class="text-gray-600 leading-relaxed">In today's fast-paced digital landscape, custom software solutions can be a game-changer for businesses
          looking to stay ahead of the curve. At Purepurple, we offer software development as a service, designed
          to help corporate and individual clients achieve their unique goals and objectives.
          Our team of expert software developers will work closely with you to understand your business needs and
          challenges. We'll then design, develop, and deploy custom software solutions that meet your specific
          requirements. From mobile and web applications to enterprise software and systems integration, we have the
          expertise and experience to deliver high-quality solutions that drive real results.
          With Purepurple's software development services, you'll benefit from a tailored approach that addresses
          your unique business needs. We'll help you improve operational efficiency, enhance customer experience,
          and gain a competitive edge in your market. Our developers are proficient in a range of programming
          languages and technologies, ensuring that we can deliver solutions that integrate seamlessly with your
          existing infrastructure.</p>
      </div>

      <div class="bg-white p-8 rounded-2xl shadow-md border border-purple-100/50">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">Packages</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card bg="bg-gradient-to-b from-purple-50 to-white">
            <span class="inline-block px-3 py-1 text-xs font-semibold text-purple-600 bg-purple-100 rounded-full mb-3">Starter</span>
            <ul class="space-y-2 text-sm text-gray-500">
              <li class="flex items-center gap-2"><i class="pi pi-check-circle text-purple-500 text-xs"></i>Basic software development services</li>
              <li class="flex items-center gap-2"><i class="pi pi-check-circle text-purple-500 text-xs"></i>Designing, developing, and deploying small-scale applications</li>
            </ul>
          </Card>
          <Card bg="bg-gradient-to-b from-purple-50 to-white">
            <span class="inline-block px-3 py-1 text-xs font-semibold text-fuchsia-600 bg-fuchsia-100 rounded-full mb-3">Growth</span>
            <ul class="space-y-2 text-sm text-gray-500">
              <li class="flex items-center gap-2"><i class="pi pi-check-circle text-fuchsia-500 text-xs"></i>Advanced software development services</li>
              <li class="flex items-center gap-2"><i class="pi pi-check-circle text-fuchsia-500 text-xs"></i>Custom software development</li>
              <li class="flex items-center gap-2"><i class="pi pi-check-circle text-fuchsia-500 text-xs"></i>System integration and testing</li>
            </ul>
          </Card>
          <Card bg="bg-gradient-to-b from-purple-50 to-white">
            <span class="inline-block px-3 py-1 text-xs font-semibold text-violet-600 bg-violet-100 rounded-full mb-3">Enterprise</span>
            <ul class="space-y-2 text-sm text-gray-500">
              <li class="flex items-center gap-2"><i class="pi pi-check-circle text-violet-500 text-xs"></i>Comprehensive software development services</li>
              <li class="flex items-center gap-2"><i class="pi pi-check-circle text-violet-500 text-xs"></i>Enterprise software development</li>
              <li class="flex items-center gap-2"><i class="pi pi-check-circle text-violet-500 text-xs"></i>Cloud migration and DevOps</li>
            </ul>
          </Card>
          <Card bg="bg-gradient-to-b from-purple-50 to-white">
            <span class="inline-block px-3 py-1 text-xs font-semibold text-indigo-600 bg-indigo-100 rounded-full mb-3">Premium</span>
            <ul class="space-y-2 text-sm text-gray-500">
              <li class="flex items-center gap-2"><i class="pi pi-check-circle text-indigo-500 text-xs"></i>Dedicated development teams</li>
              <li class="flex items-center gap-2"><i class="pi pi-check-circle text-indigo-500 text-xs"></i>Priority support and customized solutions</li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  </section>
</template>
