<template>
  <div
    :class="{
      'text-center': alignment === 'center',
      'text-white': textWhite,
    }"
  >
    <!-- preHeading heading intro bodyText button -->
    <div class="space-y-10">
      <!-- preHeading heading intro bodyText -->
      <div class="space-y-8">
        <!-- preHeading heading intro -->
        <div class="space-y-6">
          <!-- preHeading and heading -->
          <div class="space-y-4">
            <!-- preHeading -->
            <AnimateOnScroll>
              <PreHeading v-if="preHeading" :textWhite="textWhite">
                {{ preHeading }}
              </PreHeading>
            </AnimateOnScroll>
            <!-- preHeading -->

            <!-- heading -->
            <AnimateOnScroll :delay="100">
              <Heading v-if="heading" :headingSize="headingSize">
                {{ heading }}
              </Heading>
            </AnimateOnScroll>
            <!-- heading -->
          </div>
          <!-- preHeading and heading -->

          <!-- intro -->
          <AnimateOnScroll :delay="200">
            <Intro v-if="intro"> {{ intro }}</Intro>
          </AnimateOnScroll>
          <!-- intro -->
        </div>
        <!-- preHeading heading intro -->

        <!-- bodyText -->

        <BodyText v-if="body">
          <AnimateOnScroll :delay="300">
            {{ body }}
          </AnimateOnScroll>
        </BodyText>
        <!-- bodyText -->
      </div>
      <!-- preHeading heading intro bodyText -->
    </div>
    <!-- preHeading heading intro bodyText button -->
  </div>
</template>

<script setup>
// imports
import { computed } from "vue";

// props
const props = defineProps({
  preHeading: String,
  heading: String,
  intro: String,
  body: String,
  alignment: {
    type: String,
    default: "left",
    validator: (value) => ["left", "center"].includes(value),
  },

  // size
  headingSize: {
    type: String,
    default: "h1",
    validator: (value) => ["h1", "h2", "display"].includes(value),
  },

  // textWhite
  textWhite: { type: Boolean, default: false },

  // noShadow
  noShadow: { type: Boolean, default: false },
});
</script>
