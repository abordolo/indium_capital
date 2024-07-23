<template>
  <component :is="tag" :class="classes">
    <slot />
  </component>
</template>

<script setup>
// imports
import { computed } from "vue";

// props
const props = defineProps({
  headingSize: {
    type: String,
    default: "h1",
    validator: (value) =>
      ["h1", "h2", "h3", "h4", "h5", "h6", "display"].includes(value),
  },
});

// tag
const tag = computed(() => {
  if (props.headingSize === "display") return "div";
  return props.headingSize;
});

// classes
const classes = computed(() => {
  let baseClasses = [
    "leading-tight",
    "sm:leading-tight",
    "md:leading-tight",
    "lg:leading-tight",
    "xl:leading-tight",
    "2xl:leading-tight",
  ];

  //   display
  if (props.headingSize === "display") {
    baseClasses.push(
      "font-extrabold",
      "text-[48px]",
      "md:text-[56px]",
      "2xl:text-[64px]",
    );
  } else {
    baseClasses.push("font-bold");
  }

  // h1
  if (props.headingSize === "h1") {
    baseClasses.push("text-[36px]", "md:text-[40px]", "2xl:text-[48px]");
  }

  // h2
  if (props.headingSize === "h2") {
    baseClasses.push("text-[32px]", "md:text-[36px]", "2xl:text-[40px]");
  }

  // h3
  if (props.headingSize === "h3") {
    baseClasses.push("text-[28px]", "md:text-[32px]", "2xl:text-[36px]");
  }

  // h4
  if (props.headingSize === "h4") {
    baseClasses.push("text-[24px]", "md:text-[28px]", "2xl:text-[32px]");
  }

  // h5
  if (props.headingSize === "h5") {
    baseClasses.push("text-[20px]", "md:text-[24px]", "2xl:text-[28px]");
  }

  // h6
  if (props.headingSize === "h6") {
    baseClasses.push("text-[20px]", "2xl:text-[24px]");
  }

  return baseClasses;
});
</script>
