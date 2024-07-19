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
      "text-4xl",
      "md:text-5xl",
      "lg:text-7xl",
    );
  } else {
    baseClasses.push("font-bold");
  }

  // h1
  if (props.headingSize === "h1") {
    baseClasses.push("text-3xl", "md:text-4xl", "lg:text-5xl");
  }

  // h2
  if (props.headingSize === "h2") {
    baseClasses.push("text-2xl", "md:text-3xl", "lg:text-4xl");
  }

  // h3
  if (props.headingSize === "h3") {
    baseClasses.push("text-xl", "md:text-2xl", "lg:text-3xl");
  }

  // h4
  if (props.headingSize === "h4") {
    baseClasses.push("text-2xl", "md:text-2xl", "lg:text-3xl");
  }

  // h5
  if (props.headingSize === "h5") {
    baseClasses.push("text-lg", "md:text-xl", "lg:text-2xl");
  }

  // h6
  if (props.headingSize === "h6") {
    baseClasses.push("text-base", "md:text-lg", "lg:text-xl");
  }

  return baseClasses;
});
</script>
