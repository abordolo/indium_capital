<template>
  <Section class="border-b border-primary-600 bg-primary-500 py-4">
    <Container>
      <!-- navigation bar -->
      <div class="flex items-center justify-between">
        <Logo white />

        <!-- desktop navigation -->
        <div class="hidden lg:block">
          <DesktopNavigation :navigationItems="navigationItems" />
        </div>
        <!-- desktop navigation -->

        <!-- mobile navigation -->
        <div class="lg:hidden">
          <MobileNavigation :navigationItems="navigationItems" />
        </div>
        <!-- mobile navigation -->
      </div>
      <!-- navigation bar -->
    </Container>
  </Section>
</template>

<script setup>
// imports
import { ref, computed } from "vue";
import { usePage } from "@inertiajs/vue3";
import DesktopNavigation from "./Partials/DesktopNavigation.vue";
import MobileNavigation from "./Partials/MobileNavigation.vue";

// navigation link
const allNavigationItems = ref([
  {
    id: 1,
    name: "Home",
    url: route("home"),
  },

  {
    id: 2,
    name: "About Us",
    subMenu: [
      {
        id: 21,
        name: "Services",
        url: "#services",
      },

      {
        id: 22,
        name: "Team",
        url: "#team",
      },
    ],
  },

  {
    id: 3,
    name: "Why Us",
    subMenu: [
      {
        id: 31,
        name: "Why Indium",
        url: "#why-indium",
      },

      {
        id: 32,
        name: "Our Values",
        url: "#our-values",
      },
    ],
  },

  {
    id: 4,
    name: "Expertise",
    subMenu: [
      {
        id: 41,
        name: "Transactions",
        url: "#transactions",
      },

      {
        id: 42,
        name: "Insights",
        url: "#insights",
      },

      {
        id: 43,
        name: "Testimonials",
        url: "#testimonials",
      },
    ],
  },

  {
    id: 5,
    name: "Contact",
    url: route("contact"),
  },
]);

const allNavigationItemsAlt = ref([
  {
    id: 1,
    name: "Home",
    url: route("home"),
  },

  {
    id: 1,
    name: "Services",
    url: route("services"),
  },

  {
    id: 5,
    name: "Contact",
    url: route("contact"),
  },
]);

const showAllNavigationItems = () => {
  let anchorTags = ["/"];
  allNavigationItems.value.map((item) => {
    if (item.subMenu) {
      item.subMenu.map((subItem) => {
        anchorTags.push(subItem.url);
      });
    }
  });

  // console.log("Anchor tags:", anchorTags);

  let result = false;
  // anchorTags.map((tag) => {
  //   if (usePage().url.endsWith(tag)) {
  //     result = true;
  //   }
  // });

  for (let i = 0; i < anchorTags.length; i++) {
    if (usePage().url.endsWith(anchorTags[i])) {
      result = true;
      break;
    }
  }

  return result;
};

const navigationItems = computed(() => {
  if (showAllNavigationItems()) {
    return allNavigationItems.value;
  } else {
    return allNavigationItemsAlt.value;
  }
});
</script>
