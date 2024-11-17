<template>
  <div div class="relative bg-cover bg-center h-[500px]">
    <ParallaxSection
      title="Nos Services"
      description="Une gamme complète de services d'études et d'accompagnement technique pour répondre à vos besoins spécifiques"
      backgroundImage="/images/water-treatment-process.jpg"
      maxWidthStyle="max-w-7xl"
    />
    

    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            title="Service de chimie des procédés"
            description="Notre équipe de chimistes et techniciens expérimentés vous aide à obtenir la bonne chimie pour traiter l'eau usée et assurer un rejet conforme à l'environnement."
            image="/images/chemistry-lab.jpg"
          />
          
          <ServiceCard
            title="Service d'ingénierie"
            description="Notre équipe d'ingénierie offre un soutien complet pour l'élaboration de solutions adaptées en traitement des eaux, du diagnostic à la surveillance des travaux."
            image="/images/engineering.jpg"
          />
          
          <ServiceCard
            title="Service d'opération"
            description="Nos opérateurs qualifiés garantissent un niveau de satisfaction élevé et respectent les plus hautes normes en matière de santé et sécurité au travail."
            image="/images/operations.jpg"
          />
        </div>
      </div>
    </section>

    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Notre approche</h2>
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <ul class="space-y-6">
              <li v-for="(item, index) in approachItems" :key="index" class="flex items-start">
                <div class="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                  {{ index + 1 }}
                </div>
                <div class="ml-4">
                  <h3 class="text-xl font-semibold mb-2">{{ item.title }}</h3>
                  <p class="text-gray-600">{{ item.description }}</p>
                </div>
              </li>
            </ul>
          </div>
          <div class="relative">
            <img 
              src="/images/water-analysis.jpg" 
              alt="Analyse de l'eau" 
              class="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import ParallaxSection from '../components/ParallaxSection.vue'
import ServiceCard from '../components/ServiceCard.vue'

const approachItems = [
  {
    title: 'Analyse des besoins',
    description: 'Étude approfondie de vos exigences spécifiques et évaluation complète de votre situation actuelle.'
  },
  {
    title: 'Solutions personnalisées',
    description: 'Développement de solutions sur mesure adaptées à vos contraintes techniques et budgétaires.'
  },
  {
    title: 'Support technique',
    description: 'Accompagnement continu et expertise technique pour optimiser vos installations.'
  },
  {
    title: 'Suivi et optimisation',
    description: 'Monitoring régulier et ajustements pour garantir les meilleures performances.'
  }
]
</script>