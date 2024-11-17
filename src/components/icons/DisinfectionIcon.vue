<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    :width="size"
    :height="size"
    :fill="color"
  >
    <!-- Ajoutez ici votre path SVG pour l'icône de désinfection -->
  </svg>
</template>

<script lang="ts">
export default {
  name: 'DisinfectionIcon',
  props: {
    size: {
      type: [Number, String],
      default: 24
    },
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script> 