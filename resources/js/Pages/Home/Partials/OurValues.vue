<template>
  <Section
    class="py-[80px] relative"
    id="our-values"
  >
    <!-- background image -->
    <div class="absolute inset-0 -z-10 animate-our_values_bg">
      <img
        src="images/home/values/bg.png"
        class="object-cover object-center h-full w-full"
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
        <div class="grid grid-cols-4 gap-8 mt-12">
          <!-- right cards in loop -->
          <template
            v-for="(item, index) in cards"
            :key="`values-card-${index}`"
          >
            <!-- single card -->
            <div class="bg-primary-500 p-6 rounded-xl text-white shadow-xl">
              <!-- icon -->
              <div class="relative flex size-10">
                <AnimateOnScroll
                  animateFrom="scale-0 opacity-0"
                  :delay="500"
                >
                  <img :src="item.icon" />
                </AnimateOnScroll>
                <div class="absolute inset-0"></div>
              </div>
              <!-- icon -->

              <!-- texts -->
              <div class="mt-6">
                <!-- heading -->
                <AnimateOnScroll :delay="300">
                  <div>
                    <Heading headingSize="h5">{{ item.heading }}</Heading>
                  </div>
                </AnimateOnScroll>
                <!-- heading -->

                <!-- text -->
                <div class="mt-4">
                  <AnimateOnScroll :delay="500">
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
const preHeading = 'Loram Ipsum Our Values';
const heading = 'Lorem Ipsum Our Values';
const intro =
  'Lorem ipsum values introduction text. Lorem ipsum values introduction text. Lorem ipsum values introduction text.';

// cards
const cards = [
  {
    icon: 'images/home/values/focus-white.svg',
    heading: 'Unyielding Client Focus',
    text: 'Going above and beyond to solve client needs with honesty, transparency and by being proactive.',
  },

  {
    icon: 'images/home/values/team-work-white.svg',
    heading: 'Strong Team Work',
    text: 'Fostering a culture of strong teamwork and support for each other.',
  },

  {
    icon: 'images/home/values/excellence-white.svg',
    heading: 'Excellence in Every Aspect of Work',
    text: 'Driving the highest standards of work with accountability, professionalism and ownership.',
  },

  {
    icon: 'images/home/values/respect-white.svg',
    heading: 'Maintaining Integrity & Respect',
    text: 'Maintaining the highest standards of integrity and respect within and outside the organization.',
  },
];
</script>
