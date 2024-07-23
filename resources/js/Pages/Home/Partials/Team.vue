<template>
  <Section class="relative overflow-clip py-[60px] xs:py-[80px]" id="team">
    <!-- background image -->
    <div class="absolute inset-0 -z-10 animate-team_bg">
      <img
        src="images/home/team/bg-pattern.svg"
        class="h-full w-full object-cover object-center opacity-5"
      />
    </div>
    <!-- background image -->

    <Container>
      <div class="grid grid-cols-1 gap-12 xl:grid-cols-2 xl:gap-8 2xl:gap-12">
        <!-- left -->
        <div class="max-w-[720px]">
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
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6 xl:gap-10">
          <!-- cards in loop -->
          <template v-for="(item, index) in cards" :key="`team-card-${index}`">
            <!-- single team card -->
            <div class="group relative cursor-pointer pt-[50px]">
              <!-- image flex container -->
              <div class="absolute top-0 flex">
                <!-- rounded image wrapper -->
                <AnimateOnScroll
                  animateFrom="opacity-0 scale-0"
                  :delay="index * 100 + 200"
                >
                  <div
                    class="rounded-full border-2 border-primary-500 bg-white transition-all duration-300"
                  >
                    <img
                      :src="item.image"
                      class="grayscale transition-all duration-500 group-hover:grayscale-0"
                    />
                  </div>
                </AnimateOnScroll>
                <!-- rounded image wrapper -->
              </div>
              <!-- image flex container -->

              <!-- texts wrapper -->
              <div
                class="rounded-xl bg-gray-50 p-4 pt-[72px] shadow-md transition-all duration-300 group-hover:shadow-xl"
              >
                <!-- name -->
                <AnimateOnScroll :delay="index * 50 + 400">
                  <Heading headingSize="h6" class="text-primary-500">
                    {{ item.name }}
                  </Heading>
                </AnimateOnScroll>
                <!-- name -->

                <!-- designation -->
                <AnimateOnScroll :delay="index * 50 + 500">
                  <p
                    class="mt-2 text-xs font-semibold uppercase text-gray-500 md:text-sm"
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
const preHeading = "Lorem Ipsum Team";
const heading = "Lorem Ipsum Team Heading";
const intro =
  "Lorem ipsum text for teams section. Lorem ipsum text for teams section. Lorem ipsum text for teams section.";
const primaryButtonText = "Know More";
const primaryButtonUrl = "#";

// cards
const cards = [
  {
    image: "/images/home/team/nitish.png",
    name: "Nitish Agrawal",
    designation: "Founder & Managing Director",
  },

  {
    image: "/images/home/team/krithika.png",
    name: "Krithika Sivaraman",
    designation: "Senior Vice President",
  },

  {
    image: "/images/home/team/swami.png",
    name: "Swami Swaminathan",
    designation: "Advisor",
  },

  {
    image: "/images/home/team/ravi.png",
    name: "Ravi Virmani",
    designation: "Advisor",
  },

  {
    image: "/images/home/team/sanjiv.png",
    name: "Sanjiv Lochan",
    designation: "Advisor",
  },
];
</script>
