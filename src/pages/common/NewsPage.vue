<!-- <template>
  <q-page padding class="flex flex-center">
    <div class="text-h3">News</div>
  </q-page>
</template>

<script setup>
</script> -->
<template>
  <q-page class="flex justify-center items-start">
    <div class="q-pa-md" style="max-width: 100%">
      <q-markdown :src="News" show-copy />
    </div>
  </q-page>
</template>

<script setup>

import News from "./news.md";
import { ref } from "vue";
import { useQuasar } from "quasar";
const quasar = useQuasar();

</script>