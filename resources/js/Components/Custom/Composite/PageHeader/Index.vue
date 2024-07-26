<template>
  <!-- contents wrapper -->
  <Section class="relative h-[400px]">
    <!-- background -->
    <div class="absolute inset-0 -z-10 bg-green-100">
      <img :src="image" class="h-full w-full object-cover object-center" />
    </div>
    <!-- background -->
    <Container class="h-full">
      <div class="flex h-full flex-col items-center justify-center">
        <div class="mx-auto max-w-[720px] pb-2">
          <!-- heading -->
          <div>
            <h1
              class="text-center text-[72px] font-bold leading-[72px] text-white"
            >
              {{ heading }}
            </h1>
          </div>
          <!-- heading -->

          <!-- intro -->
          <div>
            <Intro class="mt-2 text-center text-white">{{ intro }}</Intro>
          </div>
          <!-- intro -->
        </div>
      </div>
    </Container>
  </Section>
  <!-- contents wrapper -->
</template>

<script setup>
// props
const props = defineProps({
  image: { type: String, required: true },
  heading: { type: String, required: true },
  intro: { type: String, required: true },
});
</script>
