<template>
  <!-- <Section
    class="py-[120px] bg-gradient-to-b from-primary-50 to-white"
    id="why-indium"
  > -->
  <Section
    class="py-[120px]"
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
        <div class="mt-16 flex gap-12 flex-row justify-between">
          <!-- left cards -->
          <div class="space-y-12 max-w-[720px]">
            <!-- right cards in loop -->
            <template
              v-for="(item, index) in cards"
              :key="`why-indium-card-${index}`"
            >
              <!-- single card -->

              <div class="flex items-start gap-6">
                <!-- icon -->
                <div
                  class="bg-primary-500 rounded-lg p-4 shrink-0 relative shadow-md"
                >
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
                <div class="mt-1">
                  <!-- heading -->
                  <AnimateOnScroll :delay="200">
                    <div>
                      <Heading headingSize="h5">{{ item.heading }}</Heading>
                    </div>
                  </AnimateOnScroll>
                  <!-- heading -->

                  <!-- text -->
                  <div class="mt-4">
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
            class="relative rounded-2xl shadow-xl overflow-clip min-w-[400px]"
          >
            <div class="absolute inset-0">
              <img
                src="images/home/why-indium/image.png"
                class="object-cover w-full h-full object-center"
              />
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
const preHeading = 'Why Indium';
const heading = 'Lorem Ipsum Why Us Heading';
const intro =
  'Lorem ipsum why us introduction text. Lorem ipsum why us introduction text. Lorem ipsum why us introduction text.';

// cards
const cards = [
  {
    icon: 'images/home/why-indium/unbiased.svg',
    heading: 'We always offer unbiased advice',
    text: "We always offer unbiased advice on the best solution for our clients needs - we aren't afraid to advise clients to do or NOT to do transactions if it's not in their interest.",
  },

  {
    icon: 'images/home/why-indium/thorough.svg',
    heading: 'We get our hands dirty',
    text: "We spend a lot of time understanding, analyzing & gleaning the USP's of a clients' business, and marrying it with our industry & competitor benchmarks - creating logical grounds for winning the best value.",
  },

  {
    icon: 'images/home/why-indium/unique.svg',
    heading: 'No standard transactions',
    text: "Each transaction needs to fulfill the unique (and sometimes conflicting) needs of stakeholders. Hence we do not use 'standard' templates - we treat each transaction as unique, to best address these needs.",
  },

  {
    icon: 'images/home/why-indium/always.svg',
    heading: 'We stay till the end',
    text: 'Most transactions are fraught with multiple risks during their lifecycle - we work closely & actively with our clients through-out the entire transaction lifecycle to anticipate and mitigate each risk, until closing.',
  },
];
</script>
