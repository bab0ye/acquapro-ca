<template>
  <div class="relative h-screen">
    <div class="absolute inset-0 overflow-hidden">
      <video 
        class="object-cover w-full h-full"
        autoplay 
        loop 
        muted 
        playsinline
      >
        <source src="/videos/water-treatment.mp4" type="video/mp4">
      </video>
      <div class="absolute inset-0 bg-black bg-opacity-50"></div>
    </div>
    
    <div class="relative h-full flex items-center justify-center text-white">
      <div class="text-center max-w-4xl px-4">
        <h1 class="text-5xl md:text-6xl font-bold mb-6">
          Vos spécialistes en traitement des eaux
        </h1>
        <p class="text-xl md:text-2xl mb-8">
          Vos projets, notre source de vie
        </p>
        <router-link 
          to="/services"
          class="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-full transition-colors duration-200"
        >
          Découvrir nos services
        </router-link>
      </div>
    </div>
  </div>
</template>