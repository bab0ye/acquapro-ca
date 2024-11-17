<template>
  <div class="group relative overflow-hidden bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 p-8 border border-blue-100/50">
    <!-- Background Animation -->
    <div class="absolute inset-0 bg-gradient-to-br from-blue-900/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transform group-hover:scale-95 transition-all duration-500"></div>
    
    <!-- Icon Container with Animation -->
    <div class="relative mb-6 transform group-hover:-translate-y-2 transition-transform duration-500">
      <div class="w-16 h-16 mx-auto flex items-center justify-center text-blue-900 group-hover:text-blue-700 transition-colors duration-500">
        <component :is="icon" class="w-full h-full" />
      </div>
      <!-- Decorative water drop -->
      <div class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-bounce"></div>
    </div>
    
    <!-- Content with Animation -->
    <div class="relative text-center">
      <h3 class="text-xl font-semibold mb-4 text-blue-900 group-hover:text-blue-800 transform group-hover:-translate-y-1 transition-all duration-500">
        {{ title }}
      </h3>
      <p class="text-gray-600 group-hover:text-gray-700 transform transition-all duration-500 leading-relaxed">
        {{ description }}
      </p>
    </div>

    <!-- Decorative Elements -->
    <div class="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full -mr-12 -mt-12 group-hover:bg-blue-500/10 transition-colors duration-500"></div>
    <div class="absolute bottom-0 left-0 w-16 h-16 bg-blue-500/5 rounded-full -ml-8 -mb-8 group-hover:bg-blue-500/10 transition-colors duration-500"></div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description: string
  icon: any
}>()
</script>

<style scoped>
@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-bounce {
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0) translateX(-50%);
  }
  50% {
    transform: translateY(-8px) translateX(-50%);
  }
}
</style>