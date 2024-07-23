<template>
  <Section
    class="xs-[80px] md:[120px] relative overflow-clip bg-primary-500 py-[60px] sm:py-[100px]"
  >
    <!-- background -->
    <div class="absolute inset-0 z-10 hidden animate-hero_bg md:block">
      <img
        src="images/home/hero/bg-pattern-big.svg"
        class="h-full w-full object-cover object-left opacity-10"
      />
    </div>

    <div class="absolute inset-0 z-10 animate-hero_bg md:hidden">
      <img
        src="images/home/hero/bg-pattern-medium.svg"
        class="h-full w-full object-cover object-left opacity-10"
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
            class="mt-10 flex flex-col items-center justify-center gap-5 xs:flex-row sm:gap-6"
          >
            <!-- primary button -->
            <AnimateOnScroll :delay="400">
              <InertiaLink href="#services" v-smooth-scroll>
                <button
                  class="inline-block w-[180px] rounded-lg border border-white bg-white px-8 py-4 font-semibold text-primary-500 transition-colors duration-300 hover:border-primary-700 hover:bg-primary-600 hover:text-white"
                >
                  Services
                </button>
              </InertiaLink>
            </AnimateOnScroll>
            <!-- primary button -->

            <!-- secondary button -->
            <AnimateOnScroll :delay="500">
              <InertiaLink href="#transactions" v-smooth-scroll>
                <button
                  class="inline-block w-[180px] rounded-lg border border-white px-8 py-4 font-semibold text-white transition-colors duration-300 hover:border-primary-700 hover:bg-primary-600 hover:text-white"
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
            class="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12 lg:gap-6 xl:gap-16"
          >
            <template v-for="(item, index) in items" :key="item.id">
              <!-- single block -->
              <AnimateOnScroll :delay="index * 100 + 400">
                <div
                  class="flex w-[280px] cursor-pointer items-center space-x-3 rounded-2xl border border-white/10 bg-primary-500 p-4 text-white shadow-md transition-colors duration-300 hover:bg-primary-600 xs:w-[300px] xs:p-6"
                >
                  <!-- icon -->
                  <div
                    class="select:none relative shrink-0 rounded-full bg-white p-3"
                  >
                    <img
                      :src="item.icon"
                      class="select:none size-6 xs:size-8"
                    />
                    <div class="select:none absolute inset-0"></div>
                  </div>
                  <!-- icon -->

                  <!-- texts -->
                  <div>
                    <Heading headingSize="h2">{{ item.heading }}</Heading>
                    <p class="text-xs font-medium xs:text-sm">
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
const preHeading = "Lorem Ipsum";
const heading = "Lorem Ipsum Heading";
const intro =
  "We are an Investment Bank focusing on Fund-Raising and Mergers & Acquisitions Advisory.";
const primaryButtonText = "Services";
const secondaryButtonText = "Transactions";

// items
const items = [
  {
    id: 1,
    heading: "30+",
    subHeading: "Years of team experience",
    icon: "images/home/hero/experience.svg",
  },

  {
    id: 1,
    heading: "50+",
    subHeading: "Deals advised",
    icon: "images/home/hero/deal-count.svg",
  },

  {
    id: 1,
    heading: "$1bn+",
    subHeading: "Deal value",
    icon: "images/home/hero/deal-value.svg",
  },
];
</script>
