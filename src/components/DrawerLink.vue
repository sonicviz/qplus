<template>
  <q-item
    v-if="!requiresAuth"
    clickable
    @click="router.push({ name: target })"
    :active="router.currentRoute.value.name === target" active-class="bg-primary-darker"
    class="items-center"
  >
    {{ label }}
  </q-item>
</template>

<script setup>
defineProps(
  {
    requiresAuth: {
      type: Boolean,
      default: false
    },
    target: {
      type: String,
    },
    label: {
      type: String
    }
  }
)

import { useRouter } from 'vue-router'
const router = useRouter()


</script>
