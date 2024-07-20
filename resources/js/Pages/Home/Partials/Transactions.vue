<template>
  <Section
    class="py-[120px] bg-[url('images/home/transactions/transactions-bg.png')] bg-cover bg-center"
  >
    <Container>
      <!-- contents -->
      <div>
        <!-- top -->
        <div class="flex items-center justify-center">
          <TextBlock
            class="max-w-[600px]"
            :preHeading="preHeading"
            :heading="heading"
            :intro="intro"
            alignment="center"
          />
        </div>
        <!-- top -->

        <!-- bottom - cards grid -->
        <div class="grid grid-cols-3 gap-8 mt-16">
          <!-- cards in loop -->
          <template
            v-for="(item, index) in cards"
            :key="`transaction-card-${index}`"
          >
            <!-- single card -->
            <div
              class="bg-primary-500 p-6 border rounded-xl border-primary-500 relative pb-[220px] text-center text-white shadow-lg"
            >
              <!-- primary logo -->

              <div
                class="relative h-[100px] w- bg-white rounded-xl flex items-center justify-center shadow-md"
              >
                <div>
                  <AnimateOnScroll :delay="200">
                    <img
                      :src="item.primaryLogo"
                      class="max-w-[200px] max-h-[60px]"
                      :class="{
                        'max-h-[100px]': item.primaryLogo == '',
                      }"
                    />
                  </AnimateOnScroll>
                </div>
                <div class="absolute inset-0"></div>
              </div>
              <!-- primary logo -->

              <!-- deal value -->
              <AnimateOnScroll :delay="300">
                <Heading
                  headingSize="h5"
                  class="mt-8"
                >
                  {{ item.dealValue }}
                </Heading>
              </AnimateOnScroll>
              <!-- deal value -->

              <!-- text -->
              <AnimateOnScroll :delay="400">
                <BodyText class="mt-4 font-medium">{{ item.text }}</BodyText>
              </AnimateOnScroll>
              <!-- text -->

              <!-- second row of logos -->
              <div
                class="flex items-center space-x-8 h-[90px] rounded-xl mt-6 px-4 justify-center absolute bottom-[90px] right-6 left-6"
                :class="{
                  'bg-white':
                    item.secondaryLogo1 ||
                    item.intermediateText ||
                    item.secondaryLogo2,
                }"
              >
                <!-- secondary logo 1 -->
                <div v-if="item.secondaryLogo1">
                  <AnimateOnScroll
                    :delay="500"
                    animateFrom="-translate-x-4"
                  >
                    <img
                      :src="item.secondaryLogo1"
                      class="w-[80px]"
                    />
                  </AnimateOnScroll>
                </div>
                <!-- secondary logo 1 -->

                <div v-if="item.intermediateText">
                  <AnimateOnScroll :delay="700">
                    <p class="text-sm font-medium text-gray-500">
                      {{ item.intermediateText }}
                    </p>
                  </AnimateOnScroll>
                </div>

                <!-- secondary logo 2 -->
                <div v-if="item.secondaryLogo2">
                  <AnimateOnScroll
                    :delay="500"
                    animateFrom="translate-x-4"
                  >
                    <img
                      :src="item.secondaryLogo2"
                      class="w-[80px]"
                    />
                  </AnimateOnScroll>
                </div>
                <!-- secondary logo 2 -->
              </div>

              <!-- second row of logos -->

              <!-- timeframe -->
              <div class="absolute left-0 right-0 bottom-6 flex justify-center">
                <AnimateOnScroll
                  :delay="800"
                  animateFrom="scale-0 opacity-0"
                >
                  <div
                    class="bg-primary-600 rounded px-2 py-1 border border-primary-700"
                  >
                    <p class="text-sm font-medium text-white">
                      {{ item.timeFrame }}
                    </p>
                  </div>
                </AnimateOnScroll>
              </div>
              <!-- timeframe -->
            </div>
            <!-- single card -->
          </template>
          <!-- cards in loop -->
        </div>
        <!-- bottom - cards grid -->
      </div>
      <!-- contents -->
    </Container>
  </Section>
</template>

<script setup>
// imports

// props

// variables
const preHeading = 'Transactions';
const heading = 'Lorem Ipsum Heading for Transactions';
const intro =
  'Lorem ipsum introduction text for services. Lorem ipsum introduction text for services. Lorem ipsum introduction text for services. ';
const cards = [
  // marengo
  {
    primaryLogo: 'images/home/transactions/logos/marengo.png',
    dealValue: '~$30mn',
    text: 'Acquisition of 250 bed hospital in Gurgaon xxx',
    secondaryLogo1: 'images/home/transactions/logos/pratiksha.png',
    intermediateText: null,
    secondaryLogo2: null,
    timeFrame: 'February 2023',
  },

  // chl
  {
    primaryLogo: 'images/home/transactions/logos/chl.png',
    dealValue: '~$60mn',
    text: 'Strategic Partnership & Stake Divestment',
    secondaryLogo1: 'images/home/transactions/logos/tpg.png',
    intermediateText: 'Owned',
    secondaryLogo2: 'images/home/transactions/logos/care.png',
    timeFrame: 'July 2022',
  },

  // cims
  {
    primaryLogo: 'images/home/transactions/logos/cims.png',
    dealValue: '~$60mn',
    text: 'Strategic Partnership & Stake Divestment',
    secondaryLogo1: 'images/home/transactions/logos/marengo.png',
    intermediateText: null,
    secondaryLogo2: 'images/home/transactions/logos/samara.png',
    timeFrame: 'October 2021',
  },

  // rahi
  {
    primaryLogo: 'images/home/transactions/logos/rahi.png',
    dealValue: 'Not Disclosed',
    text: 'Fund raising advisory',
    secondaryLogo1: 'images/home/transactions/logos/neev.png',
    intermediateText: null,
    secondaryLogo2: null,
    timeFrame: 'October 2018',
  },

  // columbia asia
  {
    primaryLogo: 'images/home/transactions/logos/columbia.png',
    dealValue: '~$15mn',
    text: 'Divestment of a hospital asset',
    secondaryLogo1: 'images/home/transactions/logos/zydus.png',
    intermediateText: null,
    secondaryLogo2: null,
    timeFrame: 'October 2018',
  },

  // capital float
  {
    primaryLogo: 'images/home/transactions/logos/capital.png',
    dealValue: '~$30mn',
    text: 'Acquisition advisory of Personal Wealth Management platform',
    secondaryLogo1: null,
    intermediateText: null,
    secondaryLogo2: null,
    timeFrame: 'August 2018',
  },

  // capital float
  {
    primaryLogo: 'images/home/transactions/logos/capital.png',
    dealValue: '~$67mn',
    text: 'Series C Fund raising advisory to Capital Float Founders',
    secondaryLogo1: null,
    intermediateText: null,
    secondaryLogo2: null,
    timeFrame: 'August 2017',
  },

  // navnit
  {
    primaryLogo: 'images/home/transactions/logos/navnit.png',
    dealValue: '~$15mn',
    text: 'Merger & funding with InsureTech company',
    secondaryLogo1: null,
    intermediateText: null,
    secondaryLogo2: null,
    timeFrame: 'July 2017',
  },

  // capital float
  {
    primaryLogo: 'images/home/transactions/logos/capital.png',
    dealValue: '~$25mn',
    text: 'Series B Fund raising advisory to Capital Float Founders',
    secondaryLogo1: null,
    intermediateText: null,
    secondaryLogo2: null,
    timeFrame: 'May 2016',
  },

  // manipal ankur
  {
    primaryLogo: 'images/home/transactions/logos/manipal-ankur.png',
    dealValue: 'Not Disclosed',
    text: 'Buy side avisory for acquisition of IVF centres across India',
    secondaryLogo1: null,
    intermediateText: null,
    secondaryLogo2: null,
    timeFrame: 'February 2015',
  },
];
</script>
