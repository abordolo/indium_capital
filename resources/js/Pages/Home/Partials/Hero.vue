<template>
  <Section class="py-32 relative">
    <!-- background -->
    <div class="absolute inset-0 -z-10">
      <img
        src="images/home/hero/bg.png"
        class="object-cover object-center w-full h-full"
      />
    </div>
    <!-- background -->
    <Container>
      <!-- contents -->
      <div class="flex items-center justify-between gap-8">
        <!-- left -->
        <TextBlock
          class="w-1/2"
          :preHeading="preHeading"
          :heading="heading"
          :intro="intro"
          :primaryButtonText="primaryButtonText"
          :secondaryButtonText="secondaryButtonText"
          headingSize="display"
          textWhite
          noShadow
        />
        <!-- left -->

        <!-- right -->
        <div class="flex flex-col text-white gap-12">
          <template
            v-for="(item, index) in items"
            :key="item.id"
          >
            <!-- single block -->
            <AnimateOnScroll :delay="index * 100 + 400">
              <div
                class="bg-primary-500 p-6 rounded-2xl flex space-x-3 items-center border border-white"
              >
                <!-- icon -->
                <div class="bg-white rounded-full p-6 relative shrink-0">
                  <img
                    :src="item.icon"
                    class="w-12 h-12"
                  />
                  <div class="absolute inset-0"></div>
                </div>
                <!-- icon -->

                <!-- texts -->
                <div>
                  <Heading headingSize="h1">{{ item.heading }}</Heading>
                  <p class="font-medium">{{ item.subHeading }}</p>
                </div>
                <!-- texts -->
              </div>
            </AnimateOnScroll>
            <!-- single block -->
          </template>
        </div>
        <!-- right -->
      </div>
      <!-- contents -->
    </Container>
  </Section>
</template>

<script setup>
// imports

// props

// variables
const preHeading = 'Lorem Ipsum';
const heading = 'Lorem Ipsum Heading';
const intro =
  'We are an Investment Bank focusing on Fund-Raising and Mergers & Acquisitions Advisory.';
const primaryButtonText = 'Services';
const secondaryButtonText = 'Transactions';

// items
const items = [
  {
    id: 1,
    heading: '30+',
    subHeading: 'Years of team experience',
    icon: 'images/home/hero/experience.svg',
  },

  {
    id: 1,
    heading: '50+',
    subHeading: 'Deals advised',
    icon: 'images/home/hero/deal-count.svg',
  },

  {
    id: 1,
    heading: '$1bn+',
    subHeading: 'Deal value',
    icon: 'images/home/hero/deal-value.svg',
  },
];
</script>
