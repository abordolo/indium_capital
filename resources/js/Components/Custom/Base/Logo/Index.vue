<template>
  <InertiaLink href="/" class="focus:outline-none">
    <div class="flex cursor-pointer items-center space-x-2 focus:outline-none">
      <!-- logo image -->
      <div>
        <img :src="src" alt="Indium Capital Logo" />
      </div>
      <!-- logo image -->
    </div>
  </InertiaLink>
</template>

<script setup>
// imports
import { computed } from "vue";

// props
const props = defineProps({
  white: { type: Boolean, default: false },
  blue: { type: Boolean, default: false },
});

// src
const src = computed(() => {
  if (props.white) return "/logo-white.svg";
  if (props.blue) return "/logo-blue.svg";
  return "/logo.svg";
});
</script>
