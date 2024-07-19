<template>
  <!-- link -->
  <InertiaLink
    :class="classes"
    v-if="props.url"
    :href="props.url"
  >
    <div>
      <slot />
    </div>
  </InertiaLink>
  <!-- link -->

  <!-- button -->
  <button
    v-else
    :class="classes"
    :disabled="loading"
    :type="type"
  >
    <slot />

    <!-- loading icon -->
    <div
      v-if="loading"
      class="absolute inset-0 grid place-items-center bg-black bg-opacity-40"
    >
      <svg
        class="h-5 w-5 animate-spin text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        ></circle>
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    </div>
    <!-- loading icon -->
  </button>
  <!-- button -->
</template>

<script setup>
// imports
import { computed } from 'vue';

// props
const props = defineProps({
  color: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary'].includes(value),
  },

  size: {
    type: String,
    default: 'normal',
    validator: (value) => ['normal', 'small', 'cta'].includes(value),
  },

  disabled: {
    type: Boolean,
    default: false,
  },

  loading: {
    type: Boolean,
    default: false,
  },

  url: String,

  type: {
    type: String,
    default: 'button',
    validator: (value) => ['button', 'submit', 'reset', 'text'].includes(value),
  },

  noShadow: { type: Boolean, default: false },
});

// tag
const tag = computed(() => {
  return props.url ? 'a' : 'button';
});

// classes
const classes = computed(() => {
  let baseClasses = [
    'relative',
    'text-center',
    'inline-block',
    'transition-all',
    'duration-300',
    'disabled:opacity-50',
    'focus:outline-primary-500',
  ];

  if (props.type === 'text') {
    baseClasses.push([
      'text-sm',
      'font-medium',
      'hover:text-primary-500',
      'border-none',
      'bg-transparent',
    ]);
    return baseClasses;
  } else {
    baseClasses.push(['hover:bg-primary-600', 'hover:text-white']);
  }

  // color
  if (props.color === 'primary') {
    baseClasses.push([
      'bg-primary-500',
      'text-white border',
      'border-primary-500',
    ]);

    if (!props.noShadow) {
      baseClasses.push(['shadow-primary-100']);
    }
  } else if (props.color === 'secondary') {
    baseClasses.push(['text-primary-500', 'border', 'border-primary-500']);

    if (!props.noShadow) {
      baseClasses.push(['shadow-primary-50']);
    }
  }

  // size
  if (props.size === 'cta') {
    baseClasses.push(['px-8', 'py-6', 'font-semibold', 'rounded-lg']);

    if (!props.noShadow) {
      baseClasses.push(['shadow-lg']);
    }
  } else if (props.size == 'normal') {
    baseClasses.push(['px-6', 'py-3', 'rounded-lg', 'font-medium']);

    if (!props.noShadow) {
      baseClasses.push(['shadow-md']);
    }
  } else if (props.size == 'small') {
    baseClasses.push(['px-3', 'py-2', 'rounded-md', 'text-sm', 'font-medium']);

    if (!props.noShadow) {
      baseClasses.push(['shadow-sm']);
    }
  }

  return baseClasses;
});
</script>
