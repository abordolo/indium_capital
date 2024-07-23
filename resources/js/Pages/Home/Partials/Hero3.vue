<template>
  <Section
    class="py-[60px] xs-[80px] sm:py-[100px] md:[120px] relative bg-primary-500 overflow-clip"
  >
    <!-- background -->
    <div class="absolute hidden md:block inset-0 z-10 animate-hero_bg">
      <img
        src="images/home/hero/bg-pattern-big.svg"
        class="object-cover object-left w-full h-full opacity-10"
      />
    </div>

    <div class="absolute md:hidden inset-0 z-10 animate-hero_bg">
      <img
        src="images/home/hero/bg-pattern-medium.svg"
        class="object-cover object-left w-full h-full opacity-10"
      />
    </div>
    <!-- background -->

    <Container class="relative z-20">
      <!-- contents -->
      <div class="flex flex-col items-center justify-between">
        <!-- top -->
        <div class="max-w-[720px]">
          <!-- text content -->
          <TextBlock
            :preHeading="preHeading"
            :heading="heading"
            :intro="intro"
            :primaryButtonText="primaryButtonText"
            :secondaryButtonText="secondaryButtonText"
            headingSize="display"
            textWhite
            noShadow
            alignment="center"
          />
          <!-- text content -->

          <!-- buttons -->
          <div
            class="mt-10 flex flex-col gap-5 items-center justify-center sm:gap-6 xs:flex-row"
          >
            <!-- primary button -->
            <AnimateOnScroll :delay="400">
              <InertiaLink href="#">
                <button
                  class="inline-block px-8 py-4 bg-white text-primary-500 border rounded-lg font-semibold border-white w-[180px] hover:text-white hover:bg-primary-600 transition-colors duration-300 hover:border-primary-700"
                >
                  Services
                </button>
              </InertiaLink>
            </AnimateOnScroll>
            <!-- primary button -->

            <!-- secondary button -->
            <AnimateOnScroll :delay="500">
              <InertiaLink href="#">
                <button
                  class="inline-block px-8 py-4 text-white border-white border rounded-lg font-semibold w-[180px] hover:text-white hover:bg-primary-600 transition-colors duration-300 hover:border-primary-700"
                >
                  Transactions
                </button>
              </InertiaLink>
            </AnimateOnScroll>
            <!-- secondary button -->
          </div>
          <!-- buttons -->
        </div>
        <!-- top -->

        <!-- bottom -->
        <div class="mt-14 xs:mt-16 sm:mt-20 lg:mt-24">
          <div
            class="flex flex-wrap gap-6 justify-center sm:gap-8 md:gap-12 lg:gap-6 xl:gap-16"
          >
            <template
              v-for="(item, index) in items"
              :key="item.id"
            >
              <!-- single block -->
              <AnimateOnScroll :delay="index * 100 + 400">
                <div
                  class="p-4 xs:p-6 rounded-2xl flex space-x-3 items-center w-[280px] xs:w-[300px] transition-colors duration-300 text-white cursor-pointer hover:bg-primary-600 border border-white/10 shadow-md bg-primary-500"
                >
                  <!-- icon -->
                  <div
                    class="bg-white rounded-full p-3 relative shrink-0 select:none"
                  >
                    <img
                      :src="item.icon"
                      class="select:none size-6 xs:size-8"
                    />
                    <div class="absolute inset-0 select:none"></div>
                  </div>
                  <!-- icon -->

                  <!-- texts -->
                  <div>
                    <Heading headingSize="h2">{{ item.heading }}</Heading>
                    <p class="font-medium text-xs xs:text-sm">
                      {{ item.subHeading }}
                    </p>
                  </div>
                  <!-- texts -->
                </div>
              </AnimateOnScroll>
              <!-- single block -->
            </template>
          </div>
        </div>
        <!-- bottom -->
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
