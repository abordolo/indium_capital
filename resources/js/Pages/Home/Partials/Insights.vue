<template>
  <Section class="py-[80px]" id="insights">
    <Container>
      <div>
        <!-- insights and webinars -->
        <div class="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12 xl:gap-12">
          <!-- insights wrapper -->
          <div class="= col-span-1 rounded-2xl lg:col-span-4 xl:col-span-6">
            <!-- heading section -->
            <div class="max-w-[720px]">
              <TextBlock
                :preHeading="preHeading"
                :heading="heading"
                :intro="intro"
              />
            </div>
            <!-- heading section -->
            <!-- insights -->
            <div class="mt-12 flex flex-col gap-6">
              <template
                v-for="(item, index) in insights"
                :key="`insights-${index}`"
              >
                <!-- single insight -->
                <div>
                  <!-- icon -->
                  <div class="size-8">
                    <img :src="item.icon" />
                  </div>
                  <!-- icon -->

                  <!-- name -->
                  <Heading headingSize="h6" class="mt-5">{{
                    item.name
                  }}</Heading>
                  <!-- name -->

                  <!-- text -->
                  <BodyText class="mt-4">{{ item.text }}</BodyText>
                  <!-- text -->

                  <!-- link -->
                  <div class="mt-6">
                    <InertiaLink :href="item.url">
                      <p class="tex-sm font-medium text-primary-500">
                        View Details
                      </p>
                    </InertiaLink>
                  </div>
                  <!-- link -->
                </div>
                <!-- single insight -->

                <!-- divider -->
                <div v-if="index < 2" class="h-[1px] bg-gray-200"></div>
                <!-- divider -->
              </template>
            </div>
            <!-- insights -->
          </div>
          <!-- insights wrapper -->

          <!-- webinars -->
          <div class="grid grid-cols-1 gap-8 lg:col-span-8 xl:col-span-6">
            <template
              v-for="(item, index) in webinars"
              :key="`webinars-${index}`"
            >
              <!-- single webinar -->
              <div class="flex flex-col gap-6 border p-8">
                <!-- thumbnail -->
                <div class="rounded-lg">
                  <iframe
                    class="aspect-video w-full rounded-xl sm:w-96 md:w-56"
                    :src="item.youtubeUrl"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  ></iframe>
                </div>
                <!-- thumbnail -->

                <!-- texts -->
                <div>
                  <!-- topic -->
                  <div class="flex">
                    <p
                      class="flex rounded-full border bg-primary-500 px-3 py-1 text-xs font-medium text-white"
                    >
                      {{ item.topic }}
                    </p>
                  </div>
                  <!-- topic -->

                  <!-- title -->
                  <Heading headingSize="h6" class="mt-3">
                    {{ item.title }}
                  </Heading>
                  <!-- title -->

                  <!-- speakers -->
                  <div class="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
                    <template
                      v-for="(speaker, index) in item.speakers"
                      :key="`speaker-${index}`"
                    >
                      <!-- single speaker -->
                      <div class="rounded-lg bg-primary-50 px-3 py-2">
                        <p class="font-semibold text-primary-700">
                          {{ speaker.name }}
                        </p>
                        <p class="text-xs font-medium text-gray-500">
                          {{ speaker.designation }}
                        </p>
                      </div>
                      <!-- single speaker -->
                    </template>
                  </div>
                  <!-- speakers -->
                </div>
                <!-- texts -->
              </div>
              <!-- single webinar -->
            </template>
          </div>
          <!-- webinars -->
        </div>
        <!-- insights and webinars -->
      </div>
    </Container>
  </Section>
  <div></div>
</template>

<script setup>
// imports

// props

// variables
const preHeading = "Lorem Ipsum Preheading";
const heading = "Lorem Ipsum Insights Heading";
const intro =
  "Lorem ipsum testimonials text. Lorem ipsum testimonials text. Lorem ipsum testimonials text. Lorem ipsum testimonials text. ";

// insights
const insights = [
  {
    icon: "/images/home/specialization/healthcare.svg",
    name: "Healthcare",
    text: "View more insights.",
    url: "#",
  },

  {
    icon: "/images/home/specialization/technology.svg",
    name: "Digital / Technology",
    text: "View more insights.",
    url: "#",
  },

  {
    icon: "/images/home/specialization/consumer.svg",
    name: "Consumer",
    text: "View more insights.",
    url: "#",
  },
];

// webinars
const webinars = [
  {
    youtubeUrl: "https://www.youtube.com/embed/IIvdKXsAZnA?si=OAEurRrNNaAnfDTf",
    title: "IVF clinics - Impact of covid & way forward",
    topic: "Indium Healthcare Webinar",
    speakers: [
      { name: "Kiran Gadela", designation: "Co-Founder & MD, Oasis Fertility" },
      { name: "Shobhit Agarwal", designation: "CEO, Nova IVF Fertility" },
      {
        name: "Dr. Kshitiz Murdia",
        designation: "Co-Founder & CEO, Indira IVF",
      },
      { name: "Nitish Agrawal", designation: "MD, Indium Capital" },
      { name: "Krithika Sivaraman", designation: "VP, Indium Capital" },
    ],
    url: "#",
  },

  {
    youtubeUrl: "https://www.youtube.com/embed/tqbf3Nyt3Sc?si=vIW-4De9agWGd7dn",
    title: "Impact of covid on hospital economics & way forward",
    topic: "Indium Healthcare Webinar",
    speakers: [
      {
        name: "Ratan Jalan",
        designation: "Founder, Medium Healthcare Consulting",
      },
      { name: "Dr. Raajiv Singhal", designation: "Group CEO, CARE Hospitals" },
      { name: "Rohit M A", designation: "Cofounder & MD, Cloudnine Hospitals" },
      { name: "Nitish Agrawal", designation: "MD, Indium Capital" },
    ],
    url: "#",
  },

  {
    youtubeUrl: "https://www.youtube.com/embed/Drh77W4kJ58?si=CmIcr3ECI9E9zu-W",
    title: "Fintech in a post covid world",
    topic: "Indium Tech Webinar",
    speakers: [
      { name: "Manish Kumar", designation: "Founder & CEO, KredX" },
      { name: "Gaurav Hinduja", designation: "Cofounder & MD, Capital Float" },
      { name: "Nitish Agrawal", designation: "MD, Indium Capital" },
      { name: "Krithika Sivaraman", designation: "VP, Indium Capital" },
    ],
    url: "#",
  },
];
</script>
