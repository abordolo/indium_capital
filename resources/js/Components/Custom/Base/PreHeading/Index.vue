<template>
  <p
    class="font-semibold tracking-wider uppercase"
    :class="{
      'text-primary-500': !textWhite,
      'text-white': textWhite,
    }"
  >
    <slot />
  </p>
</template>

<script setup>
const props = defineProps({
  textWhite: { type: Boolean, default: false },
});
</script>
