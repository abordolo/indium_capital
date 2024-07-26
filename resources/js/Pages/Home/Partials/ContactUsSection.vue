<template>
  <Section class="bg-gray-50 py-[60px]">
    <Container>
      <div>
        <!-- top -->
        <div class="mx-auto max-w-[720px]">
          <TextBlock
            :preHeading="preHeading"
            :heading="heading"
            :intro="intro"
            alignment="center"
          />
        </div>
        <!-- top -->

        <!-- blocks -->
        <div
          class="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
        >
          <template
            v-for="(item, index) in blocks"
            :key="`contact-us-section-${index}`"
          >
            <!-- single block -->
            <div
              class="rounded-xl border border-gray-200 p-4 shadow-2xl shadow-black/5 md:p-6"
              :class="{
                'sm:col-span-2 lg:col-span-1': index == 2,
              }"
            >
              <!-- icon -->
              <div class="size-8">
                <AnimateOnScroll
                  animateFrom="scale-0 opacity-0"
                  :delay="100 * index + 200"
                >
                  <img :src="item.icon" />
                </AnimateOnScroll>
              </div>
              <!-- icon -->

              <!-- title -->
              <AnimateOnScroll :delay="50 * index + 200">
                <Heading headingSize="h6" class="mt-6">
                  {{ item.title }}
                </Heading>
              </AnimateOnScroll>
              <!-- title -->

              <!-- values -->
              <div class="mt-2 space-y-px">
                <template
                  v-for="(value, index) in item.values"
                  :key="`contact-us-section-value-${index}`"
                >
                  <!-- single value -->
                  <p class="font-medium">{{ value }}</p>
                  <!-- single value -->
                </template>
              </div>
              <!-- values -->
            </div>
            <!-- single block -->
          </template>
        </div>
        <!-- blocks -->

        <!-- button -->
        <AnimateOnScroll :delay="700">
          <div class="mt-12 flex justify-center">
            <InertiaLink href="/contact">
              <PrimaryButton>Write a Message</PrimaryButton>
            </InertiaLink>
          </div>
        </AnimateOnScroll>
        <!-- button -->
      </div>
    </Container>
  </Section>
</template>

<script setup>
// imports

// props

// variables
const preHeading = "Lorem Ipsum Preheading";
const heading = "Lorem Ipsum Contact Us Heading";
const intro = "Lorem ipsum testimonials contact us introduction text. ";

// blocks
const blocks = [
  {
    icon: "images/home/contact-us-section/phone.svg",
    title: "Phone",
    values: ["+91 123 456 7890"],
  },

  {
    icon: "images/home/contact-us-section/email.svg",
    title: "Email",
    values: ["contact@indiumcapital.com"],
  },

  {
    icon: "images/home/contact-us-section/address.svg",
    title: "Address",
    values: [
      "Address Line 1",
      "Address Line 2",
      "Koramangala, Bangalore, India",
    ],
  },
];
</script>
