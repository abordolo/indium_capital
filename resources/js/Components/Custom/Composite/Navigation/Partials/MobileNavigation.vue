<template>
  <div>
    <!-- toggle button -->
    <div @click="toggleSideMenu">
      <Bars3Icon class="h-6 w-6 cursor-pointer text-primary-500" />
    </div>
    <!-- toggle button -->

    <!-- side menu wrapper -->
    <div v-show="sideMenuVisible">
      <!-- screen -->
      <Transition
        enter-from-class="opacity-0"
        leave-to-class="opacity-0"
        enter-active-class="transition duration-100 delay-100"
        leave-active-class="transition duration-100 delay-400"
      >
        <div
          v-show="sideMenuVisible"
          class="@click= fixed inset-0 z-40 bg-black/50"
          @click="toggleSideMenu"
        />
      </Transition>
      <!-- screen -->

      <!-- side menu -->
      <Transition
        enter-from-class="-translate-x-full opacity-0"
        enter-active-class="transition duration-300 delay-100"
      >
        <div
          v-show="sideMenuVisible"
          class="fixed bottom-0 left-0 top-0 z-50 h-screen w-[280px] overflow-scroll bg-primary-500 xs:w-[400px]"
        >
          <!-- side menu contents -->
          <div class="">
            <div class="bg-primary-600 p-6">
              <Logo white />
            </div>

            <!-- menu items -->
            <div class="mt-4 h-full space-y-6 overflow-y-scroll p-6">
              <template v-for="item in navigationItems" :key="item.id">
                <!-- single menu item -->
                <SingleMobileNavItem
                  :navigationItem="item"
                  @closeMenu="toggleSideMenu"
                />
                <!-- single menu item -->
              </template>
            </div>
            <!-- menu items -->
          </div>
          <!-- side menu contents -->
        </div>
      </Transition>
      <!-- side menu -->
    </div>
    <!-- side menu wrapper -->
  </div>
</template>

<script setup>
// imports
import { ref, watch } from "vue";
import { Bars3Icon } from "@heroicons/vue/24/solid";
import SingleMobileNavItem from "./SingleMobileNavItem.vue";

// props
const props = defineProps({
  navigationItems: { type: Array, required: true },
});

// side menu visibility
const sideMenuVisible = ref(false);

// toggle side menu
const toggleSideMenu = () => {
  sideMenuVisible.value = !sideMenuVisible.value;
};

// watch side menu visibility
watch(
  () => sideMenuVisible.value,
  (value) => {
    if (value) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  },
);
</script>
