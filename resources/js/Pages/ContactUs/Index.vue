<template>
  <!-- contents wrapper -->
  <div>
    <!-- meta -->
    <InertiaHead>
      <title>Contact Us</title>
    </InertiaHead>
    <!-- meta -->

    <!-- page header -->
    <PageHeader :image="headingImage" :heading="heading" :intro="intro">
    </PageHeader>
    <!-- page header -->

    <!-- form and contact details -->
    <Section class="py-[40px] lg:py-[60px]">
      <Container>
        <div class="grid grid-cols-12 gap-x-0 gap-y-12 lg:gap-x-8 xl:gap-x-12">
          <!-- contact us form -->
          <div class="col-span-12 lg:col-span-8">
            <!-- heading -->
            <Heading headingSize="h5">Write to Us</Heading>
            <!-- heading -->

            <!-- form -->
            <!-- <div class="mt-6 rounded-2xl border p-6"> -->
            <div
              class="mt-5 rounded-2xl border p-6 shadow-2xl shadow-black/5 sm:p-8"
            >
              <!-- <div class="mt-6"> -->
              <ContactUsForm />
            </div>
            <!-- form -->
          </div>
          <!-- contact us form -->

          <!-- blocks -->
          <div class="col-span-12 lg:col-span-4">
            <Heading headingSize="h5">Reach Us</Heading>

            <!-- contact blocks -->
            <div
              class="mt-5 grid grid-cols-1 gap-8 rounded-2xl border p-6 shadow-2xl shadow-black/5 sm:grid-cols-2 sm:gap-12 lg:grid-cols-1"
            >
              <template v-for="item in contactBlocks" :key="item.title">
                <!-- single contact block -->
                <div
                  :class="{
                    'sm:col-span-2 lg:col-span-1': item.title === 'Address',
                  }"
                >
                  <!-- icon -->
                  <div class="relative size-6">
                    <img :src="item.icon" alt="" />
                    <div class="absolute inset-0"></div>
                  </div>
                  <!-- icon -->

                  <!-- title -->
                  <p class="mt-4 text-sm font-semibold text-gray-400">
                    {{ item.title }}
                  </p>
                  <!-- title -->

                  <!-- values -->
                  <div class="mt-2 space-y-1">
                    <template
                      v-for="(value, index) in item.values"
                      :key="`value-${index}`"
                    >
                      <!-- single value -->
                      <p class="font-medium">{{ value }}</p>
                      <!-- single value -->
                    </template>
                  </div>
                  <!-- values -->
                </div>
                <!-- single contact block -->
              </template>
            </div>
            <!-- contact blocks -->
          </div>
          <!-- blocks -->
        </div>
      </Container>
    </Section>
    <!-- form and contact details -->

    <!-- map -->
    <Section class="pb-[40px] lg:pb-[60px]">
      <Container>
        <div>
          <Heading headingSize="h5">Navigate to Us</Heading>

          <!-- map container -->
          <div
            class="mt-5 overflow-clip rounded-2xl border shadow-2xl shadow-black/10"
          >
            <iframe
              :src="mapViewLink"
              class="h-[600px] w-full"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            />
          </div>
          <!-- map container -->

          <!-- view on map button -->
          <div class="mt-10 flex space-x-4">
            <a :href="mapNavigationLink" target="_blank" class="block">
              <PrimaryButton class="min-w-[180px]"> Navigation </PrimaryButton>
            </a>

            <a :href="mapLink" target="_blank" class="block">
              <SecondaryButton class="min-w-[160px]">
                View on Map
              </SecondaryButton>
            </a>
          </div>
          <!-- view on map button -->
        </div>
      </Container>
    </Section>
    <!-- map -->
  </div>
  <!-- contents wrapper -->
</template>

<script setup>
// import
import ContactUsForm from "./Partials/ContactUsForm.vue";

// variables
const headingImage = "images/contact-us/header1.png";
const heading = "Contact Us";
const intro = "It is always nice to hear from you.";
const contactBlocks = [
  {
    icon: "images/home/contact/phone.svg",
    title: "Phone",
    values: ["+91 123 456 7890"],
  },

  {
    icon: "images/home/contact/email.svg",
    title: "Email",
    values: ["contact@indiumcapital.com"],
  },

  {
    icon: "images/home/contact/address.svg",
    title: "Address",
    values: [
      "Address Line 1",
      "Address Line 2",
      "Koramangala, Bangalore, India",
    ],
  },
];

const mapViewLink =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.573366458385!2d77.61096047686654!3d12.935119587376871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae144e096f05a1%3A0x85509d256438b8c3!2sIndium%20Capital%20Advisors!5e0!3m2!1sen!2sin!4v1722029319774!5m2!1sen!2sin";
const mapLink = "https://maps.app.goo.gl/iwidsfUjGMUMbffa9";
const mapNavigationLink =
  "https://maps.google.com/maps/dir//Indium+Capital+Advisors+Building,+No+115,+Real+Square+2nd+Floor+20th+Main+Rd,+above+Starbucks,+7th+Block,+Koramangala,+Bengaluru,+Karnataka+560095/@12.9351196,77.6135354,17z/data=!4m5!4m4!1m0!1m2!1m1!1s0x3bae144e096f05a1:0x85509d256438b8c3";
</script>
