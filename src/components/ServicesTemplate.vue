<script setup>
import { defineProps } from 'vue';
import Card from './Card.vue';
import { ref } from 'vue';

defineProps({
  bg: {
    type: String,
    default: 'bg-purple-100'
  },
  title: {
    type: String,
    default: 'Title'
  },
  description: {
    type: String,
    default: 'Description'
  },
  level: {
    type: String,
    default: 'Level'
  },
  content: {
    type: String,
    default: 'Content'
  },
  price: {
    type: String,
    default: 'Price'
  }
})
</script>

<template>
  <section :class="`${bg}`">
    <!-- <slot></slot> -->
    <div class="container m-auto py-10 px-6">
      <div class="grid grid-cols-2 md:grid-cols-70/30 w-full gap-6">
        <div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h1 class="text-3xl font-bold mb-4">{{ title }}</h1>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md mt-6">
            <h1 class="text-3xl mb-5">
              <strong>Overview</strong>
            </h1>
            <p class="mb-4">{{ description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
