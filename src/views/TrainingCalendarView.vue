<script setup lang="ts">
import pdf from '@/assets/docs/calendar4.pdf'

</script>

<template>
  <div class="mb-10">
    <Navbar></Navbar>
  </div>
  <div class="mb-10">
    <Hero title="Tax Tables"></Hero>
  </div>
  <center>
    <div>
      <embed style="width: 90vw; height: 100vh;" :src="pdf">
    </div>
  </center>
</template>
