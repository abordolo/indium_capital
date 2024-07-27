<template>
  <Section
    class="xs-[80px] md:[120px] relative overflow-clip py-[60px] sm:py-[100px]"
  >
    <!-- background -->
    <!-- <div class="absolute inset-0 z-10 hidden animate-hero_bg md:block"> -->
    <div v-if="false" class="absolute inset-0 z-10 hidden md:block">
      <img
        src="images/home/hero/bg-pattern-big-blue.svg"
        class="h-full w-full object-cover object-left"
      />
    </div>

    <div v-if="false" class="absolute inset-0 z-10 animate-hero_bg md:hidden">
      <img
        src="images/home/hero/bg-pattern-medium.svg"
        class="h-full w-full object-cover object-left opacity-10"
      />
    </div>
    <!-- background -->

    <Container class="relative z-20">
      <!-- contents -->
      <div class="grid grid-cols-2 items-center gap-8">
        <!-- top -->
        <div class="max-w-[600px]">
          <!-- text content -->
          <h6 class="text-lg font-medium">{{ preHeading }}</h6>
          <h1
            class="mt-2 text-[72px] font-black leading-[72px] text-primary-500"
          >
            {{ heading }}
          </h1>
          <p class="mt-6 text-[20px] font-medium leading-[36px] text-gray-900">
            {{ intro }}
          </p>
          <!-- text content -->

          <!-- buttons -->
          <div class="mt-10 flex flex-row space-x-4">
            <!-- primary button -->
            <AnimateOnScroll :delay="400">
              <InertiaLink href="#services" v-smooth-scroll>
                <button
                  class="inline-block w-[180px] border border-primary-500 bg-primary-500 px-8 py-4 font-semibold text-white transition-colors duration-300 hover:border-primary-700 hover:bg-primary-600"
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
                  class="inline-block w-[180px] border border-primary-500 px-8 py-4 font-semibold text-primary-500 transition-colors duration-300 hover:border-primary-700 hover:bg-primary-600 hover:text-white"
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

        <!-- right -->
        <div
          class="flex flex-col items-end justify-end space-y-8 bg-gray-50 p-12"
        >
          <template v-for="(item, index) in items" :key="item.id">
            <!-- single block -->
            <AnimateOnScroll :delay="index * 100 + 400">
              <div
                class="flex w-[280px] cursor-pointer items-center space-x-3 border border-white/10 bg-white p-4 shadow-md transition-colors duration-300 xs:w-[300px] xs:p-6"
              >
                <!-- icon -->
                <div
                  class="select:none relative shrink-0 rounded-full bg-white p-3"
                >
                  <img :src="item.icon" class="select:none size-6 xs:size-8" />
                  <div class="select:none absolute inset-0"></div>
                </div>
                <!-- icon -->

                <!-- texts -->
                <div>
                  <Heading headingSize="h4" class="text-primary-500">{{
                    item.heading
                  }}</Heading>
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
const preHeading = "Lorem Ipsum";
const heading = "Indium Capital";
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
