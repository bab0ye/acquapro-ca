<template>
  <div>
    <Hero />
    
    <section class="py-20 bg-gray-50">
  <div class="max-w-7xl mx-auto px-4">
    <h2 class="text-4xl font-bold text-center mb-12 text-gray-800">
      Nos avantages
    </h2>
    <div class="grid md:grid-cols-3 gap-8">
      <!-- Card 1: Expertise technique -->
      <div class="bg-white p-6 rounded-lg shadow-lg text-center">
        <div class="mb-4">
          <!-- Icon for expertise -->
          <i class="fas fa-cogs text-4xl text-primary"></i>
        </div>
        <h3 class="text-xl font-bold mb-4 text-primary">Expertise technique</h3>
        <p class="text-gray-600">
          Une équipe multidisciplinaire d'ingénieurs, chimistes et techniciens expérimentés.
        </p>
      </div>

      <!-- Card 2: Présence internationale -->
      <div class="bg-white p-6 rounded-lg shadow-lg text-center">
        <div class="mb-4">
          <!-- Icon for international presence -->
          <i class="fas fa-globe-americas text-4xl text-primary"></i>
        </div>
        <h3 class="text-xl font-bold mb-4 text-primary">Présence internationale</h3>
        <p class="text-gray-600">
          Des bureaux au Canada et des partenaires en Chine et au Sénégal.
        </p>
      </div>

      <!-- Card 3: Solutions optimisées -->
      <div class="bg-white p-6 rounded-lg shadow-lg text-center">
        <div class="mb-4">
          <!-- Icon for optimized solutions -->
          <i class="fas fa-lightbulb text-4xl text-primary"></i>
        </div>
        <h3 class="text-xl font-bold mb-4 text-primary">Solutions optimisées</h3>
        <p class="text-gray-600">
          Des solutions sur mesure pour réduire les coûts et l'empreinte environnementale.
        </p>
      </div>
    </div>
  </div>
</section>

  </div>
</template>

<script setup lang="ts"
>
import Hero from '../components/Hero.vue'
</script>