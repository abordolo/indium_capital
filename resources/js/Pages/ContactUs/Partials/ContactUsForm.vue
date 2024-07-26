<template>
  <!-- form -->
  <div>
    <form @submit.prevent="submit">
      <div class="grid grid-cols-2 gap-x-6 gap-y-8">
        <!-- first name -->
        <div class="col-span-2 sm:col-span-1">
          <FormInput
            v-model="form.firstname"
            label="First Name"
            id="firstname"
            name="firstname"
            autocomplete="given-name"
            placeholder="Enter your first name"
            :error="form.errors.firstname"
          />
        </div>
        <!-- first name -->

        <!-- last name -->
        <div class="col-span-2 sm:col-span-1">
          <FormInput
            v-model="form.firstname"
            label="Last Name"
            id="lastname"
            name="lastname"
            autocomplete="family-name"
            placeholder="Enter your last name"
            :error="form.errors.lastname"
          />
        </div>
        <!-- last name -->

        <!-- email -->
        <div class="col-span-2 sm:col-span-1">
          <FormInput
            v-model="form.email"
            label="Email"
            id="email"
            name="email"
            autocomplete="email"
            placeholder="Enter your email"
            :error="form.errors.email"
          />
        </div>
        <!-- email -->

        <!-- phone number -->
        <div class="col-span-2 sm:col-span-1">
          <FormInput
            v-model="form.phone"
            label="Phone"
            id="phone"
            name="phone"
            autocomplete="tel"
            placeholder="Enter your phone number"
            :error="form.errors.phone"
          />
        </div>
        <!-- phone number -->

        <!-- message -->
        <div class="col-span-2">
          <FormInput
            v-model="form.message"
            label="Message"
            id="message"
            name="message"
            placeholder="Enter your message"
            :error="form.errors.message"
            textarea
          />
        </div>
        <!-- message -->

        <!-- submit button -->
        <div class="col-span-2 pt-1">
          <PrimaryButton type="submit"> Send Message </PrimaryButton>
        </div>
      </div>
    </form>
  </div>
  <!-- form -->
</template>

<script setup>
// imports
import { useForm } from "@inertiajs/vue3";

// form
const form = useForm({
  firstname: "",
  lastname: "",
  email: "",
  phone: "",
  message: "",
});

// submit
const submit = () => {
  console.log("Submitting the message.");
};
</script>
