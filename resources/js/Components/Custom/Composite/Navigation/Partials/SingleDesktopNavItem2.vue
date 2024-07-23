<template>
  <!-- single navigation item -->
  <div>
    <!-- navigation item without sub menu -->
    <div v-if="!('subMenu' in navigationItem)">
      <InertiaLink :href="navigationItem.url">
        <div
          class="text-sm font-semibold text-white transition-colors duration-300 hover:text-primary-500"
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
      <div
        class="cursor-pointer text-sm font-semibold text-white hover:text-primary-800"
      >
        {{ navigationItem.name }}
      </div>

      <!-- sub menu -->
      <Transition
        enter-from-class="-translate-y-4 opacity-0"
        leave-to-class="-translate-y-4 opacity-0"
      >
        <div
          v-if="showSubMenu"
          class="absolute z-50 w-56 -translate-x-16 pt-3 transition-all duration-700"
        >
          <div
            class="flex flex-col rounded border bg-white py-4 text-primary-500 shadow-xl"
          >
            <template
              v-for="subMenuItem in navigationItem.subMenu"
              :key="subMenuItem.id"
            >
              <!-- single sub menu item -->
              <InertiaLink :href="subMenuItem.url" v-smooth-scroll>
                <div
                  class="group flex items-center justify-between px-6 py-2 font-semibold transition-all duration-500 hover:bg-primary-500"
                >
                  <!-- menu item name -->
                  <span
                    class="text-sm transition-all duration-300 group-hover:text-white"
                  >
                    {{ subMenuItem.name }}
                  </span>
                  <!-- menu item name -->

                  <!-- arrow -->
                  <span
                    class="text-white opacity-0 transition-all duration-300 group-hover:opacity-100"
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
import { ref } from "vue";

// props
const props = defineProps({
  navigationItem: { type: Object, required: true },
});

// show sub menu
const showSubMenu = ref(false);
</script>
