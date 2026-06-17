<script setup>
import Card from '@/components/Card.vue'
import PageHeader from '@/components/PageHeader.vue'
</script>

<template>
  <PageHeader title="Networking" subtitle="Master computer networking fundamentals and beyond" />

  <section class="bg-purple-50 py-16">
    <div class="max-w-4xl mx-auto px-6 space-y-8">
      <div class="bg-white p-8 rounded-2xl shadow-md border border-purple-100/50">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
        <p class="text-gray-600 leading-relaxed">In this comprehensive course, students will gain a solid understanding of computer networking fundamentals, including network architectures, protocols, and security. Through a combination of theoretical foundations and hands-on labs, students will learn how to design, implement, and manage computer networks.</p>
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
              <p class="text-sm text-gray-500">Networking standards, network devices, operating systems, application software and network devices</p>
              <p class="text-lg font-bold text-purple-600 mt-3">$0.00</p>
            </div>
          </Card>
          <Card bg="bg-gradient-to-b from-purple-50 to-white">
            <div class="text-center">
              <span class="inline-block px-3 py-1 text-xs font-semibold text-fuchsia-600 bg-fuchsia-100 rounded-full mb-3">Intermediate</span>
              <p class="text-sm text-gray-500">Interconnecting network devices, LANs, WANs, network cabling, switches and VLANs</p>
              <p class="text-lg font-bold text-purple-600 mt-3">$0.00</p>
            </div>
          </Card>
          <Card bg="bg-gradient-to-b from-purple-50 to-white">
            <div class="text-center">
              <span class="inline-block px-3 py-1 text-xs font-semibold text-violet-600 bg-violet-100 rounded-full mb-3">Advanced</span>
              <p class="text-sm text-gray-500">WANs, Internet protocols, routers, firewalls and network security</p>
              <p class="text-lg font-bold text-purple-600 mt-3">$0.00</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  </section>
</template>
