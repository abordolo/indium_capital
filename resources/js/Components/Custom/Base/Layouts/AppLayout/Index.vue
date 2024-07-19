<template>
  <div class="flex min-h-screen flex-col justify-between">
    <!-- navigation and content -->
    <div class="flex-1">
      <Navigation />
      <Navigation2 />

      <slot />
    </div>
    <!-- navigation and content -->

    <Footer />
  </div>
</template>

<script setup>
//imports
import Navigation from '@/Components/Custom/Composite/Navigation/Index.vue';
import Navigation2 from '@/Components/Custom/Composite/Navigation2/Index.vue';
import Footer from '@/Components/Custom/Composite/Footer/Index.vue';
</script>
