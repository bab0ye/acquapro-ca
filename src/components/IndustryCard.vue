<template>
  <div class="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
    <div class="relative h-56">
      <img :src="image" :alt="title" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
      <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
      <h3 class="absolute bottom-4 left-4 text-2xl font-bold text-white">{{ title }}</h3>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  image: string
}>()
</script>