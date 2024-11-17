<template>
  <div>
    <ParallaxSection
      title="Carrières et Contact"
      description="Rejoignez notre équipe d'experts et contribuez à façonner l'avenir du traitement des eaux"
      backgroundImage="/images/team-working.jpg"
    />

    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid md:grid-cols-2 gap-12">
          <!-- Contact Form -->
          <div class="bg-white p-8 rounded-lg shadow-lg">
            <h2 class="text-3xl font-bold mb-6">Contactez-nous</h2>
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div>
                <label for="name" class="block text-sm font-medium text-gray-700">Nom complet</label>
                <input
                  type="text"
                  id="name"
                  v-model="form.name"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  required
                />
              </div>
              
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  v-model="form.email"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  required
                />
              </div>
              
              <div>
                <label for="subject" class="block text-sm font-medium text-gray-700">Sujet</label>
                <select
                  id="subject"
                  v-model="form.subject"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  required
                >
                  <option value="general">Information générale</option>
                  <option value="service">Services</option>
                  <option value="career">Carrières</option>
                  <option value="other">Autre</option>
                </select>
              </div>
              
              <div>
                <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  v-model="form.message"
                  rows="4"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                class="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-full transition-colors duration-200"
              >
                Envoyer
              </button>
            </form>
          </div>

          <!-- Contact Info -->
          <div class="space-y-8">
            <div>
              <h2 class="text-3xl font-bold mb-6">Nos bureaux</h2>
              <div class="space-y-6">
                <div>
                  <h3 class="text-xl font-semibold mb-2">Canada (Siège social)</h3>
                  <p class="text-gray-600">
                    123 Rue de l'Innovation<br>
                    Montréal, QC H2X 1Y6<br>
                    Tél: +1 (514) 555-0123<br>
                    Email: contact@acquapro.com
                  </p>
                </div>
                <div>
                  <h3 class="text-xl font-semibold mb-2">Sénégal</h3>
                  <p class="text-gray-600">
                    45 Avenue de la République<br>
                    Dakar, Sénégal<br>
                    Tél: +221 33 123 4567
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 class="text-xl font-semibold mb-4">Heures d'ouverture</h3>
              <p class="text-gray-600">
                Lundi - Vendredi: 8h30 - 17h00<br>
                Samedi - Dimanche: Fermé
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Careers Section -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Opportunités de carrière</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="job in jobs" :key="job.title" class="bg-white p-6 rounded-lg shadow-lg">
            <h3 class="text-xl font-bold mb-3">{{ job.title }}</h3>
            <p class="text-gray-600 mb-4">{{ job.description }}</p>
            <div class="flex items-center text-sm text-gray-500 mb-4">
              <LocationIcon class="w-4 h-4 mr-2" />
              <span>{{ job.location }}</span>
            </div>
            <button
              class="w-full bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded-md transition-colors duration-200"
              @click="applyForJob(job)"
            >
              Postuler
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ParallaxSection from '../components/ParallaxSection.vue'
import LocationIcon from '../components/icons/LocationIcon.vue'

const form = ref({
  name: '',
  email: '',
  subject: 'general',
  message: ''
})

const jobs = [
  {
    title: 'Ingénieur Process',
    description: 'Conception et optimisation des processus de traitement des eaux. 5+ ans d\expérience requise.',
    location: 'Montréal, Canada'
  },
  {
    title: 'Technicien en traitement des eaux',
    description: 'Surveillance et maintenance des systèmes de traitement des eaux. Formation technique requise.',
    location: 'Dakar, Sénégal'
  },
  {
    title: 'Chimiste senior',
    description: 'Analyse et optimisation des processus chimiques. Doctorat en chimie ou équivalent requis.',
    location: 'Montréal, Canada'
  }
]

const handleSubmit = () => {
  // Implement form submission logic
  console.log('Form submitted:', form.value)
}

const applyForJob = (job: any) => {
  // Implement job application logic
  console.log('Applying for job:', job)
}
</script>
