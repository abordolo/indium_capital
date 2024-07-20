<template>
  <!-- contents wrapper -->
  <div class="flex items-center space-x-12">
    <!-- navigation items loop -->
    <template
      v-for="item in navigationItems"
      :key="item.id"
    >
      <!-- single navigation item -->
      <SingleDesktopNavItem :navigationItem="item" />
      <!-- single navigation item -->
    </template>
    <!-- navigation items loop -->
  </div>
  <!-- contents wrapper -->
</template>

<script setup>
// imports
import SingleDesktopNavItem from './SingleDesktopNavItem.vue';

// props
const props = defineProps({
  navigationItems: { type: Array, required: true },
});
</script>
