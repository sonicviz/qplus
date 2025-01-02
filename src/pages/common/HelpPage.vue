<template>
  <q-page class="flex justify-center items-start">
    <div class="q-pa-md" :style="quasar.screen.gt.sm ? 'max-width: 70%' : 'max-width: 100%'">
      <q-markdown :src="Help" show-copy />
    </div>
  </q-page>
</template>

<script setup>
import Help from "./help.md";
import { ref } from "vue";
import { useQuasar } from "quasar";
const quasar = useQuasar();

</script>
