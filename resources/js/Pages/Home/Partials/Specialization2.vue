<template>
  <Section class="py-[40px]">
    <Container>
      <!-- contents -->
      <div
        class="my-8 rounded-3xl border bg-white px-4 py-8 shadow-2xl shadow-black/5 sm:px-0"
      >
        <!-- grid -->
        <div class="mx-auto grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-4">
          <!-- heading -->
          <div
            class="mb-2 flex h-full items-center justify-center border-r sm:col-span-3 sm:pb-10 xl:col-span-1 xl:pb-0"
          >
            <Heading headingSize="h4" class="text-center">
              We specialize in
            </Heading>
          </div>
          <!-- heading -->

          <!-- domains -->
          <template
            v-for="(item, index) in specializations"
            :key="`specialization-${index}`"
          >
            <!-- single specialization -->
            <div
              class="flex flex-col items-center justify-center px-4 pt-8 sm:px-2 sm:pt-0"
              :class="{
                'border-r': index != specializations.length - 1,
              }"
            >
              <!-- border top -->
              <div
                v-if="index != 0"
                class="mb-8 h-[1px] w-20 bg-gray-200 sm:hidden"
              ></div>
              <!-- border top -->

              <!-- icon -->
              <div class="size-8">
                <img :src="item.icon" />
              </div>
              <!-- icon -->

              <!-- text -->
              <div class="mt-3">
                <BodyText class="font-medium">
                  {{ item.name }}
                </BodyText>
              </div>
              <!-- text -->
            </div>
            <!-- single specialization -->
          </template>
          <!-- domains -->
        </div>
        <!-- grid -->
      </div>
      <!-- contents -->
    </Container>
  </Section>
</template>

<script setup>
// imports

// props

// specializations
const specializations = [
  {
    icon: "/images/home/specialization/healthcare.svg",
    name: "Healthcare",
  },

  {
    icon: "/images/home/specialization/technology.svg",
    name: "Digital / Technology",
  },

  {
    icon: "/images/home/specialization/consumer.svg",
    name: "Consumer",
  },
];
</script>
