<template>
  <Section class="relative bg-gray-50 py-[80px]" id="testimonials">
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

        <!-- testimonials -->
        <div class="relative mx-auto mt-12 max-w-[880px]">
          <!-- quote icon -->
          <div
            class="absolute right-4 top-4 size-14 xs:right-6 xs:top-6 xs:size-20 sm:top-2 sm:size-32 md:size-40"
          >
            <div>
              <img src="/images/home/testimonials/quote.svg" />
            </div>
          </div>
          <!-- quote icon -->

          <!-- testimonials wrapper -->
          <div
            class="rounded-[24px] border border-gray-200 bg-gray-100 p-4 shadow-lg shadow-gray-300/50 sm:p-6 xl:p-10 2xl:p-12"
          >
            <!-- testimonials in loop -->
            <Swiper
              :modules="modules"
              :slides-per-view="1"
              :space-between="56"
              :pagination="{ clickable: true }"
            >
              <!-- :autoplay="{ delay: 5000 }" -->
              <template
                v-for="(item, index) in testimonials"
                :key="`testimonial-${index}`"
              >
                <!-- single testimonial -->
                <SwiperSlide>
                  <!-- single testimonial wrapper -->
                  <div
                    class="grid h-[600px] place-items-center xs:h-[420px] sm:h-[400px] md:h-[350px] xl:h-[460px]"
                  >
                    <div>
                      <!-- testimonials text -->
                      <p
                        class="leading-2 text-center text-lg sm:text-xl sm:leading-9 xl:text-2xl xl:leading-10"
                      >
                        {{ item.text }}
                      </p>
                      <!-- testimonials text -->

                      <!-- bar -->
                      <p class="mt-6 text-center text-gray-400">|</p>
                      <!-- bar -->

                      <!-- name and designation -->
                      <div>
                        <p
                          class="mt-6 text-center text-lg font-bold text-primary-500"
                        >
                          John Doe
                        </p>
                        <p
                          class="text-center text-sm font-medium text-gray-500"
                        >
                          CEO, Company Name
                        </p>
                      </div>
                      <!-- name and designation -->
                    </div>
                  </div>
                  <!-- single testimonial wrapper -->
                </SwiperSlide>
                <!-- single testimonial -->
              </template>
            </Swiper>
            <!-- testimonials in loop -->
          </div>
          <!-- testimonials wrapper -->
        </div>
        <!-- testimonials -->
      </div>
    </Container>
  </Section>
</template>

<script setup>
// imports
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css";

// variables
const preHeading = "Lorem Preheading";
const heading = "Lorem Ipsum Testimonials Heading";
const intro =
  "Lorem ipsum testimonials text. Lorem ipsum testimonials text. Lorem ipsum testimonials text. Lorem ipsum testimonials text. ";
const modules = [Pagination, A11y, Autoplay];

// testimonials
const testimonials = [
  {
    name: "Person Name",
    designation: "Company and Designation",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti rerum enim asperiores, accusantium impedit dignissimos reiciendis, facere perspiciatis repellendus quam, at reprehenderit odio amet et illum repellat voluptates sapiente totam?",
  },

  {
    name: "Person Name",
    designation: "Company and Designation",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti rerum enim asperiores, accusantium impedit dignissimos ",
  },

  {
    name: "Person Name",
    designation: "Company and Designation",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti rerum enim asperiores, accusantium impedit dignissimos reiciendis, facere perspiciatis repellendus quam, at reprehenderit odio amet et illum repellat voluptates sapiente totam? reiciendis, facere perspiciatis repellendus quam, at reprehenderit odio amet et illum repellat voluptates sapiente totam?",
  },
];
</script>
