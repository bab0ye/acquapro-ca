<template>
  <div>
    <ParallaxSection
      title="Nos Applications"
      description="Vos spécialistes en traitement des eaux dans différents secteurs d'activités"
      backgroundImage="/images/industrial-water.jpg"
      maxWidthStyle="max-w-7xl"
    />

    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Secteurs d'activités</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <IndustryCard
            v-for="industry in industries"
            :key="industry.title"
            :title="industry.title"
            :image="industry.image"
          />
        </div>
      </div>
    </section>

    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Nos solutions technologiques</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TechnologyCard
            v-for="tech in technologies"
            :key="tech.title"
            v-bind="tech"
          />
        </div>
      </div>
    </section>

    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-8">Une expertise complète</h2>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto">
          AcquaPro offre un service d'opération et d'optimisation des usines de traitement des eaux usées et potables, 
          ainsi qu'un support technique aux procédés physico-chimiques et biologiques. Avec l'aide de nos partenaires, 
          nous proposons un service clé en main innovant, de la conception à l'opération.
        </p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import ParallaxSection from '../components/ParallaxSection.vue'
import IndustryCard from '../components/IndustryCard.vue'
import TechnologyCard from '../components/TechnologyCard.vue'

const industries = [
  {
    title: 'Industrie minière',
    image: '/images/mining-industry.jpg'
  },
  {
    title: 'Industrie pétrochimique',
    image: '/images/petrochemical-industry.jpg'
  },
  {
    title: 'Industrie agroalimentaire',
    image: '/images/food-industry.jpg'
  },
  {
    title: 'Industrie de pâtes et papiers',
    image: '/images/paper-industry.jpg'
  },
  {
    title: 'Municipalités',
    image: '/images/municipal-water.jpg'
  },
  {
    title: 'Industrie de construction',
    image: '/images/construction-industry.jpg'
  }
]

const technologies = [
  {
    title: 'Prétraitement',
    description: 'Première étape du processus éliminant les plus gros déchets solides pour protéger les étapes ultérieures.',
    icon: 'PretreatmentIcon'
  },
  {
    title: 'Traitement physico-chimique',
    description: 'Processus de coagulation et floculation suivi de décantation pour éliminer les particules en suspension.',
    icon: 'ChemicalIcon'
  },
  {
    title: 'Traitement biologique',
    description: 'Utilisation de micro-organismes pour éliminer les polluants organiques dissous dans l\'eau.',
    icon: 'BiologicalIcon'
  },
  {
    title: 'Clarification',
    description: 'Étape essentielle d élimination des solides en suspension par sédimentation ou flottation.',
    icon: 'ClarificationIcon'
  },
  {
    title: 'Filtration',
    description: 'Processus d élimination des particules solides à l aide de médias filtrants spécialisés.',
    icon: 'FiltrationIcon'
  },
  {
    title: 'Désinfection et Oxydation',
    description: 'Traitement par ozone pour une désinfection efficace et respectueuse de l environnement.',
    icon: 'DisinfectionIcon'
  }
]
</script>