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
              <PreHeading
                v-if="preHeading"
                :textWhite="textWhite"
              >
                {{ preHeading }}
              </PreHeading>
            </AnimateOnScroll>
            <!-- preHeading -->

            <!-- heading -->
            <AnimateOnScroll :delay="100">
              <Heading
                v-if="heading"
                :headingSize="headingSize"
              >
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
        <AnimateOnScroll :delay="300">
          <BodyText v-if="body">{{ body }}</BodyText>
        </AnimateOnScroll>
        <!-- bodyText -->
      </div>
      <!-- preHeading heading intro bodyText -->

      <!-- button -->
      <div
        class="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
        v-if="primaryButtonText || secondaryButtonText"
      >
        <!-- primary button -->
        <AnimateOnScroll
          v-if="primaryButtonText"
          :delay="350"
        >
          <AppButton
            color="primary"
            :size="buttonSize"
            :url="primaryButtonUrl"
            :noShadow="noShadow"
            class="min-w-[180px]"
          >
            {{ primaryButtonText }}
          </AppButton>
        </AnimateOnScroll>
        <!-- primary button -->

        <!-- secondary button -->
        <AnimateOnScroll
          v-if="secondaryButtonText"
          :delay="400"
        >
          <AppButton
            color="secondary"
            :size="buttonSize"
            :url="secondaryButtonUrl"
            :noShadow="noShadow"
            class="min-w-[180px]"
          >
            {{ secondaryButtonText }}
          </AppButton>
        </AnimateOnScroll>
        <!-- secondary button -->
      </div>
      <!-- button -->
    </div>
    <!-- preHeading heading intro bodyText button -->
  </div>
</template>

<script setup>
// imports
import { computed } from 'vue';

// props
const props = defineProps({
  preHeading: String,
  heading: String,
  intro: String,
  body: String,
  alignment: {
    type: String,
    default: 'left',
    validator: (value) => ['left', 'center'].includes(value),
  },

  // size
  headingSize: {
    type: String,
    default: 'h1',
    validator: (value) => ['h1', 'h2', 'display'].includes(value),
  },

  //   buttons
  primaryButtonText: String,
  primaryButtonUrl: String,
  secondaryButtonText: String,
  secondaryButtonUrl: String,

  // textWhite
  textWhite: { type: Boolean, default: false },

  // noShadow
  noShadow: { type: Boolean, default: false },
});

// button size
const buttonSize = computed(() => {
  if (props.headingSize === 'display') {
    return 'cta';
  }

  return 'normal';
});
</script>
