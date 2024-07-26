<template>
  <Section class="py-[80px]" id="insights">
    <Container>
      <div>
        <!-- heading section -->
        <div class="max-w-[720px]">
          <TextBlock
            :preHeading="preHeading"
            :heading="heading"
            :intro="intro"
          />
        </div>
        <!-- heading section -->

        <!-- insights and webinars -->
        <div class="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12">
          <!-- insights wrapper -->
          <div
            class="col-span-1 h-full rounded-2xl bg-gray-50 p-6 lg:col-span-5 lg:p-10"
          >
            <!-- insights -->
            <div class="flex h-full flex-col justify-between gap-6">
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
          <div class="grid grid-cols-1 gap-12 lg:col-span-7">
            <template
              v-for="(item, index) in webinars"
              :key="`webinars-${index}`"
            >
              <!-- single webinar -->
              <div class="flex flex-col gap-6">
                <!-- thumbnail -->
                <div class="size-32 shrink-0 rounded bg-gray-100">
                  <img :src="item.icon" />
                </div>
                <!-- thumbnail -->

                <!-- texts -->
                <div>
                  <!-- title -->
                  <Heading headingSize="h6" class="text-primary-500">{{
                    item.title
                  }}</Heading>
                  <!-- title -->

                  <!-- topic -->
                  <BodyText class="mt-1 font-medium text-gray-500">{{
                    item.topic
                  }}</BodyText>
                  <!-- topic -->

                  <!-- speakers -->
                  <div class="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <template
                      v-for="(speaker, index) in item.speakers"
                      :key="`speaker-${index}`"
                    >
                      <div class="border-l pl-3">
                        <p class="font-semibold text-primary-700">
                          {{ speaker.name }}
                        </p>
                        <p class="text-sm text-gray-500">
                          {{ speaker.designation }}
                        </p>
                      </div>
                    </template>
                  </div>
                  <!-- speakers -->

                  <!-- link -->
                  <!-- <div class="mt-6">
                  <InertiaLink :href="item.url">
                    <p class="tex-sm font-medium text-primary-500">
                      View Details
                    </p>
                  </InertiaLink>
                </div> -->
                  <!-- link -->
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
    thumbnail: "/images/home/insights/webinars/thumbnail1.png",
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
    thumbnail: "/images/home/insights/webinars/thumbnail2.png",
    title: "IVF clinics - Impact of covid & way forward",
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
    thumbnail: "/images/home/insights/webinars/thumbnail3.png",
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
