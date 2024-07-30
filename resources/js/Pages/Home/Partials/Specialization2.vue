<template>
  <Section class="relative my-[80px]">
    <!-- left gray -->
    <div class="absolute bottom-0 top-0 -z-10 w-1/2 bg-gray-50"></div>
    <!-- left gray -->

    <Container>
      <!-- contents -->
      <div class="flex">
        <!-- left -->
        <div class="flex w-1/2 flex-col py-[60px]">
          <p class="text-[18px] font-medium text-primary-500">
            We Specialize In
          </p>

          <div class="mt-4 flex flex-1 flex-col justify-center space-y-8">
            <template v-for="(item, index) in specializations" :key="item.name">
              <!-- single specialization -->
              <div
                class="group flex cursor-pointer items-center space-x-4"
                @click="activate(index)"
              >
                <!-- icon -->
                <div
                  class="items-center-justify-center flex size-16 bg-primary-500 p-4"
                >
                  <img :src="item.icon" alt="" />
                </div>
                <!-- icon -->

                <!-- name and arrow -->
                <div
                  class="flex space-x-4 transition-all duration-700"
                  :class="{
                    'translate-x-10 text-primary-500': item.active,
                  }"
                >
                  <!-- name -->
                  <h1
                    class="text-[28px] font-bold group-hover:text-primary-500"
                  >
                    {{ item.name }}
                  </h1>
                  <!-- name -->

                  <!-- arrow -->
                  <div
                    class="text-[32px] text-primary-500 opacity-0 transition-all duration-700 group-hover:opacity-100"
                    :class="{
                      'opacity-100': item.active,
                    }"
                  >
                    &rarr;
                  </div>
                  <!-- arrow -->
                </div>
                <!-- name and arrow -->
              </div>
              <!-- single specialization -->
            </template>
          </div>
        </div>
        <!-- left -->

        <!-- right -->

        <template v-for="item in specializations" :key="item.image">
          <div v-show="item.active" class="flex w-1/2 shrink-0 flex-col">
            <!-- image -->
            <div class="h-[350px]">
              <img
                :src="item.image"
                class="h-full w-full object-cover object-center"
              />
            </div>
            <!-- image -->

            <div class="p-6">
              <Transition
                enter-from-class="opacity-0 "
                enter-active-class="transition duration-500"
                mode="out-in"
              >
                <div v-if="item.active" class="flex-1">
                  <BodyText>{{ item.text }}</BodyText>
                </div>
              </Transition>

              <div class="mt-4 flex items-center space-x-2 text-primary-500">
                <p class="font-medium">View Insights</p>
                <div class="mt-px text-[20px]">&rarr;</div>
              </div>
            </div>
          </div>
        </template>
        <!-- right -->
      </div>
      <!-- contents -->
    </Container>
  </Section>
</template>

<script setup>
// imports
import { ref } from "vue";

// props

// specializations
const specializations = ref([
  {
    icon: "/images/home/specialization/healthcare-white.svg",
    name: "Healthcare",
    image: "/images/home/specialization/healthcare.png",
    active: true,
    text: "lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },

  {
    icon: "/images/home/specialization/technology-white.svg",
    name: "Digital / Technology",
    image: "/images/home/specialization/technology.png",
    active: false,
    text: "lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },

  {
    icon: "/images/home/specialization/consumer-white.svg",
    name: "Consumer",
    image: "/images/home/specialization/consumer.png",
    active: false,
    text: "lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
]);

// activate
const activate = (index) => {
  specializations.value.forEach((item, i) => {
    if (i === index) {
      item.active = true;
    } else {
      item.active = false;
    }
  });
};
</script>
