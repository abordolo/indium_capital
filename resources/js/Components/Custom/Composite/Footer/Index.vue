<template>
  <div>
    <Section class="bg-gray-800 py-[60px]">
      <Container>
        <!-- contents -->
        <div>
          <div class="grid grid-cols-12 gap-10">
            <!-- logo -->
            <div class="col-span-12 md:col-span-6 lg:col-span-8">
              <Logo white />
            </div>
            <!-- logo -->

            <!-- links -->
            <template
              v-for="section in links"
              :key="`link-section-${section.heading}`"
            >
              <!-- single section -->
              <div
                class="col-span-12 sm:col-span-6 md:col-span-3 lg:col-span-2"
              >
                <!-- heading -->
                <p class="font-semibold text-primary-500">
                  {{ section.heading }}
                </p>
                <!-- heading -->

                <!-- links for a single section -->
                <div class="mt-4 space-y-3">
                  <template v-for="item in section.items" :key="item.name">
                    <!-- single link -->
                    <div>
                      <InertiaLink :href="item.url" class="group">
                        <div class="flex items-center space-x-2">
                          <!-- icon -->
                          <div
                            v-if="item.icon"
                            class="size-6 shrink-0 rounded border border-white p-1 transition-colors duration-300 group-hover:border-primary-500"
                          >
                            <img :src="item.icon" />
                          </div>
                          <!-- icon -->

                          <!-- link name -->
                          <p
                            class="text-sm font-medium text-white transition-colors duration-300 group-hover:text-primary-500"
                          >
                            {{ item.name }}
                          </p>
                          <!-- link name -->
                        </div>
                      </InertiaLink>
                    </div>
                    <!-- single link -->
                  </template>
                </div>
                <!-- links for a single section -->
              </div>
              <!-- single section -->
            </template>
            <!-- links -->
          </div>
        </div>
        <!-- contents -->
      </Container>
    </Section>

    <!-- copyright message -->
    <Section class="bg-gray-900 py-4">
      <Container>
        <div class="bg-gray-900 text-center text-xs font-medium text-gray-500">
          <p>&copy; 2024 Indium Software. All rights reserved.</p>
        </div>
      </Container>
    </Section>
    <!-- copyright message -->
  </div>
</template>

<script setup>
// links
const links = [
  {
    heading: "Quick Links",
    items: [
      { icon: null, name: "Home", url: "/" },
      { icon: null, name: "Contact Us", url: "/contact" },
    ],
  },

  {
    heading: "Socials",
    items: [
      { icon: "/images/footer/facebook.svg", name: "Facebook", url: "#" },
      { icon: "/images/footer/instagram.svg", name: "Instagram", url: "#" },
      { icon: "/images/footer/linkedin.svg", name: "LinkedIn", url: "#" },
    ],
  },
];
</script>
