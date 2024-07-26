<template>
  <div>
    <!-- label -->
    <label :for="id" class="block text-sm font-medium leading-6 text-gray-900">
      {{ label }}
    </label>
    <!-- label -->

    <!-- field -->
    <div class="mt-2">
      <div
        class="flex rounded-md shadow-sm shadow-primary-50 ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-primary-500"
      >
        <input
          v-if="!props.textarea"
          :value="props.modelValue"
          @input="$emit('update:modelValue', $event.target.value)"
          :type="type"
          :name="name"
          :id="id"
          :autocomplete="autocomplete"
          class="block w-full border-0 bg-transparent px-4 py-2 text-gray-900 placeholder:text-sm placeholder:text-gray-400 focus:ring-0 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-500"
          :placeholder="placeholder"
          :disabled="disabled"
        />

        <textarea
          v-else
          rows="4"
          :value="props.modelValue"
          @input="$emit('update:modelValue', $event.target.value)"
          :type="type"
          :name="name"
          :id="id"
          :autocomplete="autocomplete"
          class="block w-full border-0 bg-transparent px-4 py-2 text-gray-900 placeholder:text-sm placeholder:text-gray-400 focus:ring-0 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-500"
          :placeholder="placeholder"
          :disabled="disabled"
        />
      </div>
    </div>
    <!-- field -->

    <!-- error -->
    <Transition appear enter-active-class="animate__animated animate__fadeIn">
      <div v-if="props.error" class="mt-2 text-sm text-red-600">
        {{ props.error }}
      </div>
    </Transition>
    <!-- error -->
  </div>
</template>

<script setup>
// props
const props = defineProps({
  modelValue: { required: true },
  type: {
    type: String,
    validator: (value) => ["text", "email", "tel", "password"].includes(value),
    default: "text",
  },
  label: { type: String, required: true },
  id: { type: String, required: true },
  name: { type: String, required: true },
  autocomplete: { type: String, required: false, default: null },
  placeholder: { type: String, required: false, default: null },
  error: { type: String, required: false, default: null },
  textarea: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
});
</script>
