<template>
  <Section class="py-[120px] bg-gray-50">
    <Container>
      <div class="grid grid-cols-2 gap-8">
        <!-- left -->
        <div>
          <TextBlock
            :preHeading="preHeading"
            :heading="heading"
            :intro="intro"
            :primaryButtonText="primaryButtonText"
            :primaryButtonUrl="primaryButtonUrl"
          />
        </div>
        <!-- left -->

        <!-- cards -->
        <div class="grid grid-cols-2 gap-8">
          <!-- cards in loop -->
          <template
            v-for="(item, index) in cards"
            :key="`team-card-${index}`"
          >
            <!-- single team card -->
            <div class="group pt-[50px] relative cursor-pointer">
              <!-- image flex container -->
              <div class="flex absolute top-0">
                <!-- rounded image wrapper -->
                <AnimateOnScroll
                  animateFrom="opacity-0 scale-0"
                  :delay="index * 100 + 200"
                >
                  <div
                    class="border-primary-500 rounded-full bg-white border-2 transition-all duration-300"
                  >
                    <img
                      :src="item.image"
                      class="grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                </AnimateOnScroll>
                <!-- rounded image wrapper -->
              </div>
              <!-- image flex container -->

              <!-- texts wrapper -->
              <div
                class="bg-gray-100 p-4 pt-[72px] rounded-xl shadow-md group-hover:shadow-xl transition-all duration-300"
              >
                <!-- name -->
                <AnimateOnScroll :delay="index * 50 + 400">
                  <Heading
                    headingSize="h6"
                    class="text-primary-500"
                  >
                    {{ item.name }}
                  </Heading>
                </AnimateOnScroll>
                <!-- name -->

                <!-- designation -->
                <AnimateOnScroll :delay="index * 50 + 500">
                  <p
                    class="text-xs mt-2 font-semibold uppercase text-gray-500 tracking-wide"
                  >
                    {{ item.designation }}
                  </p>
                </AnimateOnScroll>
                <!-- designation -->
              </div>
              <!-- texts wrapper -->
            </div>
            <!-- single team card -->
          </template>
          <!-- cards in loop -->
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
const preHeading = 'Lorem Ipsum Team';
const heading = 'Lorem Ipsum Team Heading';
const intro =
  'Lorem ipsum text for teams section. Lorem ipsum text for teams section. Lorem ipsum text for teams section.';
const primaryButtonText = 'Know More';
const primaryButtonUrl = '#';

// cards
const cards = [
  {
    image: '/images/home/team/nitish.png',
    name: 'Nitish Agrawal',
    designation: 'Founder & Managing Director',
  },

  {
    image: '/images/home/team/krithika.png',
    name: 'Krithika Sivaraman',
    designation: 'Senior Vice President',
  },

  {
    image: '/images/home/team/swami.png',
    name: 'Swami Swaminathan',
    designation: 'Advisor',
  },

  {
    image: '/images/home/team/ravi.png',
    name: 'Ravi Virmani',
    designation: 'Advisor',
  },

  {
    image: '/images/home/team/sanjiv.png',
    name: 'Sanjiv Lochan',
    designation: 'Advisor',
  },
];
</script>
