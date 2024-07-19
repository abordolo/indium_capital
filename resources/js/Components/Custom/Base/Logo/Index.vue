<template>
  <InertiaLink
    href="/"
    class="focus:outline-none"
  >
    <div class="flex cursor-pointer items-center space-x-2 focus:outline-none">
      <!-- logo image -->
      <div>
        <img
          :src="src"
          alt="Indium Capital Logo"
        />
      </div>
      <!-- logo image -->
    </div>
  </InertiaLink>
</template>

<script setup>
// imports
import { computed } from 'vue';

// props
const props = defineProps({
  white: {
    type: Boolean,
    default: false,
  },
});

// src
const src = computed(() => {
  return props.white ? '/logo-white.svg' : '/logo.svg';
});
</script>
