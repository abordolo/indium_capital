<template>
  <Section class="relative py-[80px]" id="our-values">
    <!-- background image -->
    <div class="absolute inset-0 -z-10 animate-our_values_bg">
      <img
        src="images/home/values/bg.png"
        class="h-full w-full object-cover object-center"
      />
    </div>
    <!-- background image -->

    <Container>
      <div>
        <!-- top -->
        <div class="max-w-[720px]">
          <TextBlock
            :preHeading="preHeading"
            :heading="heading"
            :intro="intro"
          />
        </div>
        <!-- top -->

        <!-- cards -->
        <div
          class="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-4 md:gap-8 xl:gap-10 2xl:grid-cols-4 2xl:gap-8"
        >
          <!-- right cards in loop -->
          <template
            v-for="(item, index) in cards"
            :key="`values-card-${index}`"
          >
            <!-- single card -->
            <div class="rounded-xl bg-primary-500 p-6 text-white shadow-xl">
              <!-- icon -->
              <div class="relative flex size-10">
                <AnimateOnScroll
                  animateFrom="scale-0 opacity-0"
                  :delay="index * 100 + 300"
                >
                  <img :src="item.icon" />
                </AnimateOnScroll>
                <div class="absolute inset-0"></div>
              </div>
              <!-- icon -->

              <!-- texts -->
              <div class="mt-6">
                <!-- heading -->
                <AnimateOnScroll :delay="index * 100 + 100">
                  <div>
                    <Heading headingSize="h6">{{ item.heading }}</Heading>
                  </div>
                </AnimateOnScroll>
                <!-- heading -->

                <!-- text -->
                <div class="mt-4">
                  <AnimateOnScroll :delay="index * 100 + 400">
                    <BodyText>{{ item.text }}</BodyText>
                  </AnimateOnScroll>
                </div>
                <!-- text -->
              </div>
              <!-- texts -->
            </div>
            <!-- single card -->
          </template>
          <!-- right cards in loop -->
        </div>
        <!-- cards -->
      </div>
    </Container>
  </Section>
</template>

<script setup>
// imports

// props

// variables
const preHeading = "Loram Ipsum Our Values";
const heading = "Lorem Ipsum Our Values";
const intro =
  "Lorem ipsum values introduction text. Lorem ipsum values introduction text. Lorem ipsum values introduction text.";

// cards
const cards = [
  {
    icon: "images/home/values/focus-white.svg",
    heading: "Unyielding Client Focus",
    text: "Going above and beyond to solve client needs with honesty, transparency and by being proactive.",
  },

  {
    icon: "images/home/values/team-work-white.svg",
    heading: "Strong Team Work",
    text: "Fostering a culture of strong teamwork and support for each other.",
  },

  {
    icon: "images/home/values/excellence-white.svg",
    heading: "Excellence in Every Aspect of Work",
    text: "Driving the highest standards of work with accountability, professionalism and ownership.",
  },

  {
    icon: "images/home/values/respect-white.svg",
    heading: "Maintaining Integrity & Respect",
    text: "Maintaining the highest standards of integrity and respect within and outside the organization.",
  },
];
</script>
