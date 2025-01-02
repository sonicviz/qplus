<template>
  <q-page class="flex justify-center items-start">
    <div class="q-pa-md" style="max-width: 100%">
      <q-markdown :src="Support" show-copy />
    </div>
  </q-page>
</template>

<script setup>

import Support from "./support.md";
import { ref } from "vue";
import { useQuasar } from "quasar";
const quasar = useQuasar();

</script>