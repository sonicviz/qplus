<template>
  <q-layout view="hHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />
        <q-toolbar-title @click="router.push({ name: 'dashboard' })" class="cursor-pointer">
          <div class="column q-py-sm">
            <div>Quasar Quickstart Plus</div>
            <div style="font-size: 0.7rem">Landing Page + Dashboard Demo</div>
          </div>
        </q-toolbar-title>
        <!-- <q-btn flat label="Homepage" to="/" /> -->
        <!-- <q-btn flat label="Homepage Example" to="/example/landingexample" /> -->
        <q-space />
        <q-btn :icon="quasar.dark.isActive ? 'light_mode' : 'nightlight_round'"
          :class="{ 'rotate-180': quasar.dark.isActive }" round flat @click="darkMode" />

        <div>Quasar v{{ quasar.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered class="bg-slate-50">
      <q-list :dark="quasar.dark.isActive">
        <span>
          <q-item-label header class="text-overline text-slate-500">Help Menu</q-item-label>
          <DrawerLink target="app-help" label="Help" @click="drawerItemClicked('Help')"  />
          <DrawerLink target="news" label="News" @click="drawerItemClicked('News')"  />
          <DrawerLink target="app-support" label="Support" @click="drawerItemClicked('Support Page')"  />
          <DrawerLink target="releasenotes" label="Release Notes" @click="drawerItemClicked('Release Notes')"  />
          <DrawerLink target="landing" label="Home Page" @click="drawerItemClicked('Home Page')"  />
          <DrawerLink target="dashboard" label="Dashboard" @click="drawerItemClicked('User Dashboard')"  />
          <q-separator />
        </span>
        <q-item-label header>
          Essential Links
        </q-item-label>

        <EssentialLink v-for="link in linksList" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref, onMounted, onBeforeMount } from "vue";
import { useRouter } from 'vue-router'
const router = useRouter()

// import ProfileCard from "components/user/ProfileCard.vue";
import DrawerLink from "src/components/DrawerLink.vue";

import { useQuasar, scroll, useMeta } from "quasar";
const quasar = useQuasar()

import EssentialLink from 'components/EssentialLink.vue'

const pageTitle = ref("App Index Page");

onBeforeMount(hideLoadingMessage);

defineOptions({
  name: 'MainLayout'
})

const linksList = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
]

const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

function drawerItemClicked(target) {
  // console.log("LabelLens MainLayout drawerItemClicked target: ", target);
  // console.log("drawerItemClicked router.currentRoute.value.name: ", router.currentRoute.value.name);
  pageTitle.value = target;
  // console.log("drawerItemClicked pageTitle.value: ", pageTitle.value);
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

useMeta(() => {
  return {
    // whenever "title" from above changes, your meta will automatically update
    title: 'App Page - ' +  pageTitle.value,
    // title: pageTitle.value,
    // optional; sets final title as "Index Page - My Website", useful for multiple level meta
    titleTemplate: title => `${title} - Quasar Quickstart Plus`,

    // meta tags
    meta: {
      // description: { name: 'description', content: 'Landing Page + Dashboard Demo' },
      // keywords: { name: 'keywords', content: 'food, ingredients, analysis, ai, food labels, product labels, AI Product Label Analysis, labellens, wellness, food safety, ultra processed foods' },
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
})

function hideLoadingMessage() {
  // console.log("LabelLens MainLoyout mounted - hideLoadingMessage")
  let el = document.getElementById("loadingmessage");
  // console.log("el", el);
  // el.style.visibility = "hidden";
  if (el !== null && el !== undefined) {
    el.remove();
  }
}

</script>
