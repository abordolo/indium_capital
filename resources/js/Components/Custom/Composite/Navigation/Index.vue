<template>
  <Section class="py-3">
    <Container>
      <!-- navigation bar -->
      <div class="flex items-center justify-between">
        <Logo />

        <!-- desktop navigation -->
        <DesktopNavigation :navigationItems="navigationItems" />
        <!-- desktop navigation -->
      </div>
      <!-- navigation bar -->
    </Container>
  </Section>
</template>

<script setup>
// imports
import { ref } from 'vue';
import DesktopNavigation from './Partials/DesktopNavigation.vue';

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
        url: '#services',
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
        url: '#why-indium',
      },

      {
        id: 32,
        name: 'Our Values',
        url: '#our-values',
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
        url: '#transactions',
      },

      {
        id: 42,
        name: 'Insights',
        url: '#insights',
      },

      {
        id: 43,
        name: 'Testimonials',
        url: '#testimonials',
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
