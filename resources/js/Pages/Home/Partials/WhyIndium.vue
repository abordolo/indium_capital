<template>
  <Section
    class="relative overflow-clip py-[60px] xs:py-[80px]"
    id="why-indium"
  >
    <Container>
      <div>
        <!-- top -->
        <div class="mx-auto max-w-[640px]">
          <TextBlock
            :preHeading="preHeading"
            :heading="heading"
            :intro="intro"
            alignment="center"
          />
        </div>
        <!-- top -->

        <!-- bottom -->
        <div
          class="mt-12 flex flex-col-reverse gap-12 lg:flex-row lg:justify-between"
        >
          <!-- left cards -->
          <div
            class="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12 lg:max-w-[720px] lg:grid-cols-1 lg:gap-8 xl:max-w-[900px] xl:grid-cols-2 xl:gap-12 2xl:max-w-[1200px]"
          >
            <!-- right cards in loop -->
            <template
              v-for="(item, index) in cards"
              :key="`why-indium-card-${index}`"
            >
              <!-- single card -->
              <div
                class="flex flex-col items-start gap-6 lg:flex-row lg:gap-4 xl:flex-col xl:gap-6"
              >
                <!-- icon -->
                <div
                  class="relative shrink-0 rounded-lg bg-primary-500 p-2 shadow-md 2xl:p-3"
                >
                  <AnimateOnScroll animateFrom="scale-0 opacity-0" :delay="500">
                    <img :src="item.icon" />
                  </AnimateOnScroll>
                  <div class="absolute inset-0"></div>
                </div>
                <!-- icon -->

                <!-- texts -->
                <div>
                  <!-- heading -->
                  <AnimateOnScroll :delay="200">
                    <div>
                      <Heading headingSize="h6">{{ item.heading }}</Heading>
                    </div>
                  </AnimateOnScroll>
                  <!-- heading -->

                  <!-- text -->
                  <div class="mt-3">
                    <AnimateOnScroll :delay="300">
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
          <!-- left cards -->

          <!-- right image -->
          <div
            class="relative h-[300px] w-full shrink-0 overflow-clip rounded-2xl shadow-xl lg:h-auto lg:w-[300px] xl:min-w-[320px] 2xl:min-w-[360px]"
          >
            <div class="absolute inset-0">
              <AnimateOnScroll :delay="200">
                <img
                  src="images/home/why-indium/image.png"
                  class="h-full w-full object-cover object-center"
                />
              </AnimateOnScroll>
            </div>

            <!-- gradient -->
            <div
              class="absolute inset-0 bg-gradient-to-tr from-primary-500/50 to-green-500/50"
            />
            <!-- gradient -->
          </div>
          <!-- right image -->
        </div>
        <!-- bottom -->
      </div>
    </Container>
  </Section>
</template>

<script setup>
// imports

// props

// variables
const preHeading = "Why Indium";
const heading = "Lorem Ipsum Why Us Heading";
const intro =
  "Lorem ipsum why us introduction text. Lorem ipsum why us introduction text. Lorem ipsum why us introduction text.";

// cards
const cards = [
  {
    icon: "images/home/why-indium/unbiased.svg",
    heading: "We always offer unbiased advice",
    text: "We always offer unbiased advice on the best solution for our clients needs - we aren't afraid to advise clients to do or NOT to do transactions if it's not in their interest.",
  },

  {
    icon: "images/home/why-indium/thorough.svg",
    heading: "We get our hands dirty",
    text: "We spend a lot of time understanding, analyzing & gleaning the USP's of a clients' business, and marrying it with our industry & competitor benchmarks - creating logical grounds for winning the best value.",
  },

  {
    icon: "images/home/why-indium/unique.svg",
    heading: "No standard transactions",
    text: "Each transaction needs to fulfill the unique (and sometimes conflicting) needs of stakeholders. Hence we do not use 'standard' templates - we treat each transaction as unique, to best address these needs.",
  },

  {
    icon: "images/home/why-indium/always.svg",
    heading: "We stay till the end",
    text: "Most transactions are fraught with multiple risks during their lifecycle - we work closely & actively with our clients through-out the entire transaction lifecycle to anticipate and mitigate each risk, until closing.",
  },
];
</script>
