<template>
  <div class="flex min-h-screen flex-col justify-between">
    <!-- navigation and content -->
    <div class="flex-1">
      <Navigation />

      <slot />
    </div>
    <!-- navigation and content -->

    <Footer />
  </div>
</template>

<script setup>
//imports
// import Navigation from "@/Components/Custom/Composite/NavigationBlue/Index.vue";
import Navigation from "@/Components/Custom/Composite/NavigationWhite/Index.vue";
import Footer from "@/Components/Custom/Composite/Footer/Index.vue";
</script>
