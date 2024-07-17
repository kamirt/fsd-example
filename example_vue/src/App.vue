<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from 'vue-router';
import BaseLayout from './layouts/Base.vue'
import AuthLayout from './layouts/Authorized.vue'


const route = useRoute();

const component = computed(() => {
  return route.meta.layout === 'base' ? BaseLayout : AuthLayout
})
</script>

<template>
  <component :is="component"></component>
</template>
