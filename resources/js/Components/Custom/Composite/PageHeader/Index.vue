<template>
  <!-- contents wrapper -->
  <Section class="relative h-[300px] bg-gray-50 lg:h-[360px]">
    <!-- background -->
    <!-- <div class="absolute inset-0 -z-10">
      <img :src="image" class="object-cover object-center w-full h-full" />
    </div> -->
    <!-- background -->

    <Container class="h-full">
      <div class="flex h-full flex-col items-center justify-center">
        <div class="mx-auto max-w-[720px] pb-2">
          <!-- heading -->
          <div>
            <AnimateOnScroll>
              <h1
                class="text-center text-[40px] font-black leading-[72px] text-primary-500 sm:text-[48px]"
              >
                {{ heading }}
              </h1>
            </AnimateOnScroll>
          </div>
          <!-- heading -->

          <!-- intro -->
          <div>
            <AnimateOnScroll :delay="300">
              <Intro class="mt-2 text-center">{{ intro }}</Intro>
            </AnimateOnScroll>
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
