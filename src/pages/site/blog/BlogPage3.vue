<template>
  <q-page class="flex justify-center items-start">
    <div class="q-pa-md" style="max-width: 100%">
      <q-markdown :src="Blog3" show-copy />
    </div>
  </q-page>
</template>

<script setup>

import Blog3 from "./blog3.md";
import { ref } from "vue";
import { useQuasar } from "quasar";
const quasar = useQuasar();

import { useMeta } from "quasar";

const metaData = {
  // sets document title
  title: 'LabelLens Blog - Eliminate Ultra Processed Foods from Your Diet in Seconds',  
  // optional; sets final title as "Index Page - My Website", useful for multiple level meta
  titleTemplate: title => `${title} - AI Product Label Analysis`,

  // meta tags
  meta: {
    description: { name: 'description', content: 'LabelLens - AI Product Label Analysis. Just scan and LabelLens reveals the truth about your product’s ingredients. Improve wellness and understand what you eat & use' },
    keywords: { name: 'keywords', content: 'health, food, ingredients, analysis, ai, food labels, product labels, AI Product Label Analysis, labellens, wellness, food safety, ultra processed foods' },
    equiv: { 'http-equiv': 'Content-Type', content: 'text/html; charset=UTF-8' },
    // note: for Open Graph type metadata you will need to use SSR, to ensure page is rendered by the server
    ogTitle: {
      property: 'og:title',
      // optional; similar to titleTemplate, but allows templating with other meta properties
      template(ogTitle) {
        return `${ogTitle} - LabelLens`
      }
    }
  },

}

useMeta(metaData);
</script>
