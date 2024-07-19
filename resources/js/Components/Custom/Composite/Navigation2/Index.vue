<template>
  <Section class="py-5 bg-primary-500 text-white">
    <Container>
      <!-- navigation bar -->
      <div class="flex items-center justify-between">
        <Logo white />

        <!-- desktop navigation -->
        <DesktopNavigation2 :navigationItems="navigationItems" />
        <!-- desktop navigation -->
      </div>
      <!-- navigation bar -->
    </Container>
  </Section>
</template>

<script setup>
// imports
import { ref } from 'vue';
import DesktopNavigation2 from './Partials/DesktopNavigation2.vue';

// navigation link
const navigationItems = ref([
  {
    id: 1,
    name: 'Home',
    url: route('home'),
  },

  {
    id: 2,
    name: 'About Us',
    subMenu: [
      {
        id: 21,
        name: 'Services',
        url: '#about',
      },

      {
        id: 22,
        name: 'Team',
        url: '#team',
      },
    ],
  },

  {
    id: 3,
    name: 'Why Us',
    subMenu: [
      {
        id: 31,
        name: 'Why Indium',
        url: 'why-us',
      },

      {
        id: 32,
        name: 'Our Values',
        url: 'our-values',
      },
    ],
  },

  {
    id: 4,
    name: 'Expertise',
    subMenu: [
      {
        id: 41,
        name: 'Transactions',
        url: '#',
      },

      {
        id: 42,
        name: 'Insights',
        url: '#',
      },

      {
        id: 43,
        name: 'Testimonials',
        url: '#',
      },
    ],
  },

  {
    id: 5,
    name: 'Contact',
    url: '/contact-us',
  },
]);
</script>
