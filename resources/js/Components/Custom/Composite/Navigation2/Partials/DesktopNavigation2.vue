<template>
  <!-- contents wrapper -->
  <div class="flex items-center space-x-8">
    <!-- navigation items loop -->
    <template
      v-for="item in navigationItems"
      :key="item.id"
    >
      <!-- single navigation item -->
      <SingleDesktopNavItem2 :navigationItem="item" />
      <!-- single navigation item -->
    </template>
    <!-- navigation items loop -->
  </div>
  <!-- contents wrapper -->
</template>

<script setup>
// imports
import SingleDesktopNavItem2 from './SingleDesktopNavItem2.vue';

// props
const props = defineProps({
  navigationItems: { type: Array, required: true },
});
</script>
