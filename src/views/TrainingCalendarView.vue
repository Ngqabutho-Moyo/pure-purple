<script setup>
import pdf from '@/assets/docs/calendar4.pdf'
</script>

<template>
  <div>
    <embed class="w-full rounded-xl" style="height: 80vh;" :src="pdf">
  </div>
</template>
