<template>
  <!-- single navigation item -->
  <div>
    <!-- navigation item without sub menu -->
    <div v-if="!('subMenu' in navigationItem)">
      <InertiaLink :href="navigationItem.url">
        <div
          class="font-semibold hover:text-primary-500 transition-colors duration-300"
        >
          {{ navigationItem.name }}
        </div>
      </InertiaLink>
    </div>
    <!-- navigation item without sub menu -->

    <!-- navigation with sub menu -->
    <div
      v-else
      @mouseenter="showSubMenu = true"
      @mouseleave="showSubMenu = false"
    >
      <div class="font-semibold cursor-pointer hover:text-primary-500">
        {{ navigationItem.name }}
      </div>

      <!-- sub menu -->
      <Transition
        enter-from-class="-translate-y-4 opacity-0"
        leave-to-class="-translate-y-4 opacity-0"
      >
        <div
          v-if="showSubMenu"
          class="z-10 absolute pt-3 transition-all duration-700 w-56"
        >
          <div class="flex flex-col bg-primary-500 text-white py-4 rounded">
            <template
              v-for="subMenuItem in navigationItem.subMenu"
              :key="subMenuItem.id"
            >
              <!-- single sub menu item -->
              <InertiaLink
                :href="subMenuItem.url"
                v-smooth-scroll
              >
                <div
                  class="group font-semibold px-6 py-2 hover:bg-primary-600 transition-all duration-300 flex items-center justify-between"
                >
                  <!-- menu item name -->
                  <span
                    class="group-hover:translate-x-1 transition-all duration-300"
                  >
                    {{ subMenuItem.name }}
                  </span>
                  <!-- menu item name -->

                  <!-- arrow -->
                  <span
                    class="hidden group-hover:block transition-all duration-300"
                  >
                    &rarr;</span
                  >
                  <!-- arrow -->
                </div>
              </InertiaLink>
              <!-- single sub menu item -->
            </template>
          </div>
        </div>
      </Transition>
      <!-- sub menu -->
    </div>
    <!-- navigation with sub menu -->
  </div>
  <!-- single navigation item -->
</template>

<script setup>
// imports
import { ref } from 'vue';

// props
const props = defineProps({
  navigationItem: { type: Object, required: true },
});

// show sub menu
const showSubMenu = ref(false);
</script>
