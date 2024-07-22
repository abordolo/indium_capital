<template>
  <Section
    class="py-[80px]"
    id="services"
  >
    <Container>
      <div>
        <!-- top -->
        <TextBlock
          class="max-w-[720px]"
          :preHeading="preHeading"
          :heading="heading"
          :intro="intro"
        />
        <!-- top -->

        <!-- bottom -->
        <div
          class="mt-8 sm:mt-12 rounded-2xl pb-4 sm:p-6 md:p-8 relative sm:shadow-xl overflow-clip"
        >
          <!-- background -->
          <div class="absolute inset-0 -z-10 hidden sm:block">
            <img
              src="images/home/services/services-bg.png"
              class="object-cover object-center h-full w-full"
            />
          </div>
          <!-- background -->

          <!-- services blocks -->
          <div class="sm:mt-20 flex flex-wrap gap-6 sm:gap-6 md:gap-8">
            <!-- services in loop -->
            <template
              v-for="item in items"
              :key="item.id"
            >
              <!-- single service -->
              <div
                class="bg-white/90 p-6 rounded-2xl border shadow sm:shadow-lg pb-16 relative w-full lg:w-[420px] xl:w-[480px]"
              >
                <!-- icon -->
                <AnimateOnScroll>
                  <div class="relative size-10">
                    <img :src="item.icon" />
                    <div class="absolute inset-0"></div>
                  </div>
                </AnimateOnScroll>
                <!-- icon -->

                <!-- heading -->
                <AnimateOnScroll :delay="200">
                  <Heading
                    headingSize="h5"
                    class="mt-5"
                  >
                    {{ item.heading }}
                  </Heading>
                </AnimateOnScroll>
                <!-- heading -->

                <!-- text -->
                <AnimateOnScroll :delay="500">
                  <BodyText class="mt-3 font-medium">{{ item.text }}</BodyText>
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
          <!-- services blocks -->
        </div>
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
