<template>
  <div
      class="relative h-[800px] bg-fixed bg-cover bg-center flex items-center justify-center"
      :style="{
      backgroundImage: `url(${backgroundImage})`,
      maxWidth,
      minHeight: '800px',
      width: '100%'
    }"
  >
    <div class="absolute inset-0 bg-black/50"></div>
    <div class="relative text-white text-center max-w-4xl px-4">
      <h2 class="text-4xl font-bold mb-4">{{ title }}</h2>
      <p class="text-xl">{{ description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  title: string;
  description: string;
  backgroundImage: string;
  maxWidth?: string;
}>(), {
  maxWidth: '100%'
});
</script>