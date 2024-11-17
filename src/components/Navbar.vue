<template>
<nav class="bg-gradient-to-r from-blue-50 to-white shadow-lg fixed w-full z-50">    
  <div class="max-w-7xl mx-auto px-4">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex items-center">
          <img src="/images/logo_1.png" alt="AcquaPro Logo" class="h-[88px] w-[100px]" />
        </div>

        <!-- Menu Desktop -->
        <div class="hidden md:flex items-center space-x-8">
          <router-link 
            v-for="item in menuItems" 
            :key="item.path"
            :to="item.path"
            class="text-gray-700 hover:text-primary transition-colors duration-200"
          >
            {{ item.name }}
          </router-link>
        </div>

        <!-- Menu Mobile -->
        <div class="md:hidden flex items-center">
          <button @click="toggleMenu" aria-label="Toggle menu" class="text-gray-700 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Menu Mobile (Dropdown) -->
      <div v-if="isMenuOpen" class="md:hidden flex flex-col items-center space-y-4 mt-4 transition-all duration-300 ease-in-out transform" :class="{'opacity-100': isMenuOpen, 'opacity-0': !isMenuOpen, 'translate-y-0': isMenuOpen, '-translate-y-8': !isMenuOpen}">
        <router-link 
          v-for="item in menuItems" 
          :key="item.path"
          :to="item.path"
          class="text-gray-700 hover:text-primary transition-colors duration-200"
          @click="closeMenu"
        >
          {{ item.name }}
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// Liste des éléments de menu
const menuItems = [
  { name: 'Accueil', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Applications', path: '/applications' },
  { name: 'Carrières et Contact', path: '/careers' }
];

// Variable d'état pour gérer l'ouverture et la fermeture du menu mobile
const isMenuOpen = ref(false);

// Fonction pour basculer l'état du menu mobile
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

// Fonction pour fermer le menu mobile après un clic sur un lien
const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>

<style scoped>
/* Animation pour le menu mobile */
.md:hidden {
  display: block;
}

@media (min-width: 768px) {
  .md:hidden {
    display: none;
  }
}

/* Animation de la transition d'affichage du menu mobile */
.transition-all {
  transition: all 0.3s ease-in-out;
}
</style>
