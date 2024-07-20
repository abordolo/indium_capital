<template>
  <Section class="py-[120px]">
    <Container>
      <div class="space-y-16">
        <!-- top -->
        <TextBlock
          class="max-w-[600px]"
          :preHeading="preHeading"
          :heading="heading"
          :intro="intro"
        />
        <!-- top -->

        <!-- bottom -->
        <div
          class="px-8 rounded-3xl p-8 min-h-[540px] relative shadow-xl"
        >
        <!-- background -->
         <div class="absolute inset-0 -z-10">
          <img src="images/home/services/services-bg.png" class=" object-cover object-center h-full w-full rounded-3xl">
         </div>
        <!-- background -->

          <!-- services blocks -->
          <div class="absolute bottom-8 grid grid-cols-2 right-8 left-8 gap-8">
            <!-- services in loop -->
            <template
              v-for="item in items"
              :key="item.id"
            >
              <!-- single service -->
              <div class="bg-white/90 p-6 rounded-2xl border shadow-lg pb-20 relative">
                <!-- icon -->
                <AnimateOnScroll>
                  <div class="relative">
                    <img :src="item.icon" />
                    <div class="absolute inset-0"></div>
                  </div>
                </AnimateOnScroll>
                <!-- icon -->

                <!-- heading -->
                <AnimateOnScroll :delay="200">
                  <Heading
                    headingSize="h5"
                    class="mt-6"
                  >
                    {{ item.heading }}
                  </Heading>
                </AnimateOnScroll  :delay="300">
                <!-- heading -->

                <!-- text -->
                <AnimateOnScroll :delay="500">
                  <BodyText class="mt-4 font-medium">{{ item.text }}</BodyText>
                </AnimateOnScroll>
                <!-- text -->

                <!-- link -->
                <div class="absolute bottom-6">
                  <AnimateOnScroll :delay="700">
                  <p class="text-sm font-semibold text-primary-500">
                    Learn more
                  </p>
                </AnimateOnScroll>
                </div>
                <!-- link -->
              </div>
              <!-- single service -->
            </template>
            <!-- services in loop -->
          </div>
        </div>
        <!-- services blocks -->
        <!-- bottom -->
      </div>
    </Container>
  </Section>
</template>

<script setup>
// imports

// props

// consts
const preHeading = 'Our Services';
const heading = 'Lorem Ipsum Services Heading';
const intro =
  'Lorem ipsum introduction text for services. Lorem ipsum introduction text for services. Lorem ipsum introduction text for services. ';

const items = [
  {
    id: 1,
    icon: 'images/home/services/fund-raising.svg',
    heading: 'Fund Raising Advisory',
    text: 'Raising Capital to fund clients’ growth strategies.',
    url: '#',
  },

  {
    id: 2,
    icon: 'images/home/services/merger.svg',
    heading: 'Merger & Acquisition Advisory',
    text: 'Evaluation, advisory and execution of acquisition, divestment & sale transactions.',
    url: '#',
  },
];
</script>
