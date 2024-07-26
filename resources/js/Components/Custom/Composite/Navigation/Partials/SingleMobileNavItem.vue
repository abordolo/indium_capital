<template>
  <div>
    <!-- menu item without sub menu -->
    <div v-if="'url' in navigationItem">
      <InertiaLink :href="navigationItem.url" @click="$emit('closeMenu')">
        <nav class="font-medium text-white">
          {{ navigationItem.name }}
        </nav>
      </InertiaLink>
    </div>
    <!-- menu item without sub menu -->

    <!-- menu item with sub menu -->
    <div v-else>
      <div>
        <!-- menu item -->
        <div @click="toggleSubMenu" class="flex items-center justify-between">
          <!-- menu item name -->
          <nav class="font-medium text-white">
            {{ navigationItem.name }}
          </nav>
          <!-- menu item name -->

          <!-- caret icon -->
          <ChevronRightIcon
            class="h-5 w-5 text-white transition-transform duration-300"
            :class="{
              'rotate-90 transform': showSubMenu,
            }"
          />
          <!-- caret icon -->
        </div>
        <!-- menu item -->

        <!-- sub menu -->
        <Transition
          enter-from-class="opacity-0 -translate-y-2"
          enter-active-class="transition-all duration-300"
          leave-to-class="opacity-0 -translate-y-2"
          leave-active-class="transition-all duration-300"
        >
          <div
            v-show="showSubMenu"
            class="mt-3 space-y-3 rounded-lg bg-primary-600 p-3"
          >
            <template
              v-for="subItem in navigationItem.subMenu"
              :key="subItem.id"
            >
              <!-- single sub menu -->
              <div class="ml-2">
                <InertiaLink
                  :href="subItem.url"
                  @click="
                    $emit('closeMenu');
                    showSubMenu = false;
                  "
                >
                  <!-- sub menu name -->
                  <nav class="font-medium text-white hover:text-primary-500">
                    {{ subItem.name }}
                  </nav>
                  <!-- sub menu name -->
                </InertiaLink>
              </div>
              <!-- single sub menu -->
            </template>
          </div>
        </Transition>
        <!-- sub menu -->
      </div>
    </div>
    <!-- menu item with sub menu -->
  </div>
</template>

<script setup>
// imports
import { ref } from "vue";
import { ChevronRightIcon } from "@heroicons/vue/24/solid";

// props
const props = defineProps({
  navigationItem: { type: Object, required: true },
});

// show sub menu
const showSubMenu = ref(false);

// toggle sub menu
const toggleSubMenu = () => {
  showSubMenu.value = !showSubMenu.value;
};
</script>
