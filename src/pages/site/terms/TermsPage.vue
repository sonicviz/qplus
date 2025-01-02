<template>
  <q-page class="flex justify-center items-start">
    <div class="q-pa-md" style="max-width: 70%">
      <q-markdown :src="Terms" show-copy />
    </div>
  </q-page>
</template>

<script setup>

import Terms from "./terms.md";
import { ref } from "vue";
import { useQuasar } from "quasar";
const quasar = useQuasar();


</script>
