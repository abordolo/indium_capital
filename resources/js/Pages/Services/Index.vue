<template>
  <div>
    <!-- meta -->
    <InertiaHead>
      <title>Services</title>
    </InertiaHead>
    <!-- meta -->

    <!-- page header -->
    <PageHeader :image="headingImage" :heading="heading" :intro="intro">
    </PageHeader>
    <!-- page header -->

    <!-- contents -->
    <Section class="py-[80px]">
      <Container>
        <div>
          <!-- services -->
          <div class="ml:space-y-24 space-y-16 lg:space-y-28 xl:space-y-32">
            <!-- services in loop -->
            <template v-for="(item, index) in services" :key="index">
              <!-- single service -->
              <div
                class="ml:flex-row ml:items-start flex flex-col-reverse gap-8 xl:items-center xl:gap-16"
                :class="{
                  'ml:flex-row-reverse': index % 2 === 0,
                }"
              >
                <!-- texts -->
                <div class="ml:w-3/5 xl:7/12">
                  <AnimateOnScroll :delay="400">
                    <Heading headingSize="h1">{{ item.heading }}</Heading>
                  </AnimateOnScroll>
                  <!-- paragraphs -->
                  <AnimateOnScroll :delay="500">
                    <div class="mt-4 space-y-3 lg:mt-6">
                      <template
                        v-for="(paragraph, index) in item.paragraphs"
                        :key="`paragraph-${item.heading}-${index}`"
                      >
                        <!-- single paragraph -->
                        <div>
                          <BodyText>{{ paragraph }}</BodyText>
                        </div>
                        <!-- single paragraph -->
                      </template>
                    </div>
                  </AnimateOnScroll>
                  <!-- paragraphs -->

                  <!-- buttons -->
                  <div class="mt-10 flex flex-col gap-4 sm:flex-row">
                    <InertiaLink :href="route('contact')">
                      <AnimateOnScroll :delay="600">
                        <PrimaryButton class="w-[180px]">
                          Contact Us
                        </PrimaryButton>
                      </AnimateOnScroll>
                    </InertiaLink>

                    <AnimateOnScroll :delay="700">
                      <SecondaryButton class="w-[180px]">
                        View Insights
                      </SecondaryButton>
                    </AnimateOnScroll>
                  </div>
                  <!-- buttons -->
                </div>
                <!-- texts -->

                <!-- image -->
                <div class="ml:w-2/5 xl:w-5/12">
                  <div>
                    <img
                      :src="item.image"
                      class="rounded-xl shadow-xl shadow-black/10 sm:w-[360px] xl:w-full"
                    />
                  </div>
                </div>
                <!-- image -->
              </div>
              <!-- single service -->
            </template>
            <!-- services in loop -->
          </div>
          <!-- services -->
        </div>
      </Container>
    </Section>
    <!-- contents -->
  </div>
</template>

<script setup>
// variables
const headingImage = "images/services/header.png";
const heading = "Services";
const intro =
  "lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. ";

// services
const services = [
  {
    image: "/images/services/fund-raising.png",
    heading: "Fund Raising",
    subHeading: "Raising Capital to fund clients' growth strategies",
    paragraphs: [
      "We leverage our industry expertise to benchmark our clients' companies against other players and help establish superior value positioning. Our comprehensive network of relationships enables us to identify the most appropriate capital raising alternatives for our clients.",

      "We assist our clients through the entire fund raising process from evaluation & determination of funding strategy through to transaction closure",
    ],
  },

  {
    image: "/images/services/merger-and-acquisition.png",
    heading: "Merger and Acquisition Advisory",
    subHeading:
      "Evaluation, advisory and execution of acquisition, divestment & sale transactions",
    paragraphs: [
      "An M&A transaction is a critical moment for any client. We believe that the industry knowledge and technical expertise around which our team has been built, is crucial and value-added for both corporates and investors alike. We have acted on a wide range of transactions on the buy-side or sell-side.",
    ],
  },
];
</script>
