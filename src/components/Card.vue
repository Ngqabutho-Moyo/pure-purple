<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { defineProps } from 'vue';

defineProps({
  bg: {
    type: String,
    default: 'bg-white'
  }
})
</script>

<template>
  <div v-bind:class="`${bg} p-6 rounded-2xl shadow-md border border-purple-100/50 hover:shadow-xl hover:shadow-purple-100 hover:-translate-y-1 transition-all duration-300`">
    <slot></slot>
  </div>
</template>

<style scoped></style>
