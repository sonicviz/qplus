<template>
  <q-layout view="lHh Lpr lff">
    <q-header class="q-py-sm bg-primary text-white" elevated>
      <q-toolbar shrink>
        <q-toolbar-title class="my-font-kronaone text-h4 q-mr-md">QStart Plus</q-toolbar-title>
        <q-space></q-space>
        <q-tabs v-model="selected_tab" :dense="true" :shrink="true" :outside-arrows="true" :mobile-arrows="true"
          :narrow-indicator="true">
          <q-route-tab name="home" label="Home" to="" exact class="q-mr-sm q-py-xs" @click="scrollToElement('id_hero')"
            style="width: 120px; min-height: auto !important;" />
          <q-tab name="benefits" class="q-mr-sm q-py-xs" @click="scrollToElement('id_benefits')"
            style="width: 120px; min-height: auto !important;" label="Benefits" />
          <!-- <q-tab name="blog" class="q-mr-sm q-py-xs" @click="scrollToElement('id_blog')"
            style="width: 120px; min-height: auto !important;" label="Blog" /> -->
          <!-- <q-tab name="pricing" class="q-mr-sm q-py-xs" @click="scrollToElement('id_pricing')"
            style="width: 120px; min-height: auto !important;" label="Pricing" /> -->
          <q-tab name="contact" class="q-mr-sm q-py-xs" @click="scrollToElement('id_contact')"
            style="width: 120px; min-height: auto !important;" label="Contact Us" />
          <q-route-tab icon="dashboard" name="app" label="App" to="/app/news" exact />
          <q-route-tab icon="login" name="login" label="Login" to="/app/login" exact />
          <q-btn push size="md" color="secondary" label="Try for Free" to="/app/register" />
          <q-tab name="more">
            <q-btn-dropdown name="more" auto-close stretch flat label="More...">
              <q-list>
                <q-route-tab name="more" label="Terms" to="/terms" exact />
              </q-list>
            </q-btn-dropdown>
          </q-tab>
          <q-btn :icon="quasar.dark.isActive ? 'light_mode' : 'nightlight_round'"
            :class="{ 'rotate-180': quasar.dark.isActive }" round flat @click="darkMode" />
        </q-tabs>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-page-scroller position="bottom-right">
      <q-btn fab icon="keyboard_arrow_up" :style="'color:' + theme_color" style="background-color: white"></q-btn>
    </q-page-scroller>
    <q-footer elevated>
      <q-toolbar class="flex flex-center text-white  bg-primary">
        <div class="text-h6 q-pa-md">© <a href="https://sonicviz.com" target="_blank">Sonicviz</a> 2024</div>
        <div class="q-ma-lg q-gutter-xs">
          <q-btn round class="bg-secondary" type="a" href="https://www.instagram.com/labellens1/" target="_blank"
            icon="fab fa-instagram" />
          <q-btn round class="bg-secondary" type="a" href="https://www.youtube.com/@Labellens1" target="_blank"
            icon="fab fa-youtube" />
          <q-btn round class="bg-secondary" type="a" href="https://twitter.com/labellens1" target="_blank"
            icon="fab fa-twitter" />
          <q-btn round class="bg-secondary" type="a" href="https://github.com/sonicviz" target="_blank"
            icon="fab fa-github" />
          <q-btn round class="bg-secondary" type="a" href="mailto:support@labellens.com" target="_blank" icon="email" />
          <q-btn round class="bg-secondary" type="a" href="https://github.com/sponsors/sonicviz" target="_blank"
            icon="fas fa-heart" />
        </div>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
import { ref, computed, onMounted, onBeforeMount, onActivated, inject } from "vue";
import { useQuasar, scroll, useMeta } from "quasar";
const { getScrollTarget, setVerticalScrollPosition } = scroll;
const quasar = useQuasar()

const selected_tab = ref("t_0");
let previous_tab = "";
const team_slide = ref(1);
const hover = ref(false);
const active = ref(false);
const bg_color = ref("#54ab46");
const theme_color = ref("#0d6eb2");
const background_style = ref("#54ab46");

defineOptions({
  name: 'LandingLayout'
})
const metaData = {
  // sets document title
  title: 'Landing Page',
  // optional; sets final title as "Index Page - My Website", useful for multiple level meta
  titleTemplate: title => `${title} - Quasar Quickstart Plus`,

  // meta tags
  meta: {
    description: { name: 'description', content: 'Landing Page + Dashboard Demo' },
    keywords: { name: 'keywords', content: 'food, ingredients, analysis, ai, food labels, product labels, AI Product Label Analysis, labellens, wellness, food safety, ultra processed foods' },
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

  // CSS tags
  link: {
    material: { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
  },

  // JS tags
  script: {
    ldJson: {
      type: 'application/ld+json',
      innerHTML: `{ "@context": "http://schema.org" }`
    }
  },

  // <html> attributes
  htmlAttr: {
    'xmlns:cc': 'http://creativecommons.org/ns#', // generates <html xmlns:cc="http://creativecommons.org/ns#">,
    empty: undefined // generates <html empty>
  },

  // <body> attributes
  bodyAttr: {
    'action-scope': 'xyz', // generates <body action-scope="xyz">
    empty: undefined // generates <body empty>
  },

  // <noscript> tags
  noscript: {
    default: 'This is content for browsers with no JS (or disabled JS)'
  }
}

onBeforeMount(hideLoadingMessage);

useMeta(metaData);

function hideLoadingMessage() {
  let el = document.getElementById("loadingmessage");
  if (el !== null && el !== undefined) {
    el.remove();
  }
}

const darkMode = () => {
  if (!quasar.dark.isActive) {
    quasar.dark.set(true)
    // lightness.value = 10
  } else {
    quasar.dark.set(false)
    // lightness.value = 85
  }
}
// takes an element object
function scrollToElement(id) {
  console.log("Moving from page: ", router.currentRoute.value.name);
  console.log(" selected_tab", selected_tab.value + " - id", id);
  if (router.currentRoute.value.name === "landing") {
    let el = document.getElementById(id);
    const target = getScrollTarget(el);
    const offset = el.offsetTop + 3;
    const duration = 300;
    setVerticalScrollPosition(target, offset, duration);
  } else {
    //Also need to reset the selected tab otherwise it defaults to the first tab
    previous_tab = selected_tab.value;
    router.push({ name: "landing" });
    setTimeout(function () {
      console.log("Moving to page: ", router.currentRoute.value.name);
      console.log(" selected_tab", selected_tab.value + " - id", id);
      selected_tab.value = previous_tab;
      previous_tab = "";
      let el = document.getElementById(id);
      const target = getScrollTarget(el);
      const offset = el.offsetTop + 3;
      const duration = 300;
      setVerticalScrollPosition(target, offset, duration);
    }, 25);
  }
}
</script>
