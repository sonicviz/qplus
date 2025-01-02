<template>
  <q-page class="flex justify-center items-start">
    <div class="q-pa-none" style="max-width: 100%">
      <!-- <div class="herobanner" id="id_hero">
        <div class="q-pa-lg row full-width full-height flex flex-center" style="background-color: #000000AA !important"> -->
      <div class="" id="id_hero">
        <div class="q-pa-lg row full-width full-height flex flex-center">
          <div :class="quasar.screen.gt.sm ? 'text-center text-h1 animation_2' : 'text-center text-h4 animation_2'">
            QStart Plus
            <span class="" :style="'color:' + theme_color">= Quickstart Plus</span>
          </div>
          <br />
          <br />
          <div class="col-12 text-center text-h5">
            Quasar quickstart dashboard extended with landing page and extra features.<br />
            A more useful basic quickstart app framework to build on.
          </div>
          <br />
          <br />
          <div class="col-12 q-pa-lg text-center">
            <q-btn push size="xl" color="secondary" label="Try for Free" to="/app/register" />
          </div>
        </div>
      </div>
      <q-separator />      
      <div class="row" id="id_benefits">
        <div class="col-md-12 col-lg-12 col-xs-12 col-sm-12">
          <h5 class="text-center">
            Benefits
            <br />
            <span class="text-center text-grey text-h6">Jumpstart your development with a solid framework and learn
              faster.</span>
          </h5>
        </div>
      </div>
      <div class="row flex" id="id_benefits-info">
        <div class="col-md-3 col-lg-3 col-xs-12 col-sm-12">
          <!-- <q-card class="q-pa-sm flex flex-center text-center box-shadow" style="margin: 40px"> -->
          <!-- <q-card class="q-pa-sm text-center box-shadow" style="margin: 40px"> -->
          <q-card class="q-pa-sm text-center box-shadow my-benefits-card">
            <q-card-section>
              <q-icon size="110px" name="mobile_friendly" :style="'color:' + theme_color" />
              <div class="text-h6">User-Friendly and Clear</div>
            </q-card-section>
            <q-card-section class="q-pt-none">
              Enhanced landing page for a professional first impression.
            </q-card-section>
          </q-card>
        </div>
        <div class="col-md-3 col-lg-3 col-xs-12 col-sm-12">
          <!-- <q-card class="q-pa-sm flex flex-center text-center box-shadow" style="margin: 40px"> -->
          <!-- <q-card class="q-pa-sm text-center box-shadow" style="margin: 40px"> -->
          <q-card class="q-pa-sm text-center box-shadow my-benefits-card">
            <q-card-section>
              <q-icon size="110px" name="featured_play_list" :style="'color:' + theme_color" />
              <div class="text-h6">Jumpstart Development</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              Extended features for a more comprehensive starting point.
            </q-card-section>
          </q-card>
        </div>
        <div class="col-md-3 col-lg-3 col-xs-12 col-sm-12">
          <!-- <q-card class="q-pa-sm flex flex-center text-center box-shadow" style="margin: 40px"> -->
          <!-- <q-card class="q-pa-sm text-center box-shadow" style="margin: 40px"> -->
          <q-card class="q-pa-sm text-center box-shadow my-benefits-card">
            <q-card-section>
              <q-icon size="110px" name="apps" :style="'color:' + theme_color" />
              <div class="text-h6">Confidence in Choices</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              Responsive design for all device sizes. Modern UI/UX practices implemented.
            </q-card-section>
          </q-card>
        </div>
        <div class="col-md-3 col-lg-3 col-xs-12 col-sm-12">
          <!-- <q-card class="q-pa-sm flex flex-center text-center box-shadow" style="margin: 40px"> -->
          <!-- <q-card class="q-pa-sm text-center box-shadow" style="margin: 40px"> -->
          <q-card class="q-pa-sm text-center box-shadow my-benefits-card">
            <q-card-section>
              <q-icon size="110px" name="adjust" :style="'color:' + theme_color" />
              <div class="text-h6">Solid App Foundation</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              Seamless integration with Quasar framework.
            </q-card-section>
          </q-card>
        </div>
      </div>
      <q-separator />      
      <!-- <div class="quote" id="id_quote">
        <div class="q-pa-xs row full-width full-height flex flex-center" style="background-color: #000000AA !important"> -->
      <div class="" id="id_quote">
        <div class="q-pa-lg row full-width full-height flex flex-center">
          <div class="col-12 text-center text-h4" style="margin: 15px">"Scrambling to build your app? We've
            got you covered." [EXAMPLE QUOTE]</div>
          <div class="col-12 text-center  text-h5" style="margin: 10px">
            "Unlock rapid development and seamless scalability with a ready-made micro SaaS framework powered by Quasar
            and Appwrite.<br> Experience unparalleled efficiency and robust backend support, all in one package."
          </div>
          <!-- <div class="col-12 text-center text-grey-2 text-h6">
            By choosing healthy products we boost our energy levels while supporting our immune system and preventing
            diseases.
          </div> -->
          <br />
          <br />
          <div class="col-12 q-pa-lg text-center">
            <q-btn push to="/quiz4" size="xl" :style="'background:' + theme_color + '; color: white'"
              label="Take the Quiz" />
          </div>
        </div>
      </div>
      <q-separator />      
      <div style="" id="id_blog">
        <div class="row">
          <div class="col-md-12 col-lg-12 col-xs-12 col-sm-12">
            <h5 class="text-center">
              Our Blog [EXAMPLES]
              <br />
              <span class="text-center text-grey text-h6">Why QStart Plus is a Game-Changer.</span>
            </h5>
          </div>
        </div>
        <div class="q-pa-lg q-gutter-md row justify-center content-center">
          <div v-for="blog of blogPosts" :key="blog.id">
            <q-card class="my-blog-card " bordered>
              <q-card-section class="q-pa-none">
                <!-- <q-img :src="blog.preview" style="max-width: 340px; height: 340px" fit="contain"> -->
                <q-img :src="blog.preview">
                  <div class="text-h5 absolute-bottom text-center">
                    {{ blog.title }}
                  </div>
                </q-img>
              </q-card-section>
              <q-card-section class="q-pt-none ">
                <!-- <div class="text-h4">{{ blog.title }}</div> -->
                <div class="text-subtitle1">{{ blog.description }}</div>
                <div class="text-caption text-grey">{{ blog.excerpt }}
                </div>
              </q-card-section>
              <q-card-actions>
                <q-btn flat color="primary" label="Read More..." :to="blog.link" />
              </q-card-actions>
            </q-card>
          </div>
        </div>
      </div>
      <q-separator />         
      <div class="" id="id_pricing"> 
      <!-- <div class="pricing" id="id_pricing"> -->      
        <!-- <div class="" style="background-color: #000000AA !important"> -->
          <div class="row">
            <div class="col-md-12 col-lg-12 col-xs-12 col-sm-12">
              <h5 class="text-center">
                Our Pricing Plans [EXAMPLES]
                <br />
                <span class="text-center text-grey text-h6">Simple Plans to Empower Your Choices.</span>
              </h5>
            </div>
          </div>
          <div class="row q-col-gutter-sm q-px-xs">
            <div class="col-lg-3 col-md-3 col-xs-12 col-sm-6 q-px-lg">
            </div>
            <div class="col-lg-3 col-md-3 col-xs-12 col-sm-6 q-px-lg">
              <q-card>
                <q-card-section class="text-white" style="background: #ec982f">
                  <div class="text-h6 text-center">FREE TRIAL</div>
                </q-card-section>
                <q-card-section class="q-pa-md">
                  <q-list dense padding style="border-bottom: 1px solid lightgrey">
                    <q-item><span class="text-weight-bold">Try LabelLens for Free</span></q-item>
                    <q-item> 10 Free Scans </q-item>
                    <q-item> 3 Product Saves + 3 Ingredient Watchlist Items</q-item>
                    <q-item> Signup for Free trial, no CC needed </q-item>
                  </q-list>
                </q-card-section>
                <q-card-section class="q-pa-none" style="color: #ec982f">
                  <div class="text-center">
                    <span class="text-h3 text-center">$0</span>/mo
                  </div>
                </q-card-section>
                <q-card-section>
                  <div class="text-center q-px-lg">
                    <q-btn size="md" class="full-width q-pa-xs" style="background: #ec982f; color: white"
                      label="Try for Free" to="app/register" />
                    <br />
                    <div class="q-mt-md">Terms and Conditions apply</div>
                  </div>
                </q-card-section>
              </q-card>
            </div>
            <div class="col-lg-3 col-md-3 col-xs-12 col-sm-6 q-px-lg">
              <q-card>
                <q-card-section class="text-white" style="background: #f4655f">
                  <div class="text-h6 text-center">Basic Plan</div>
                </q-card-section>
                <q-card-section class="q-pa-md">
                  <q-list dense padding style="border-bottom: 1px solid lightgrey">
                    <q-item><span class="text-weight-bold">Essential label insights</span></q-item>
                    <q-item> 50 scans/month </q-item>
                    <q-item> 150 Product Saves + 50 Ingredient Watchlist Items</q-item>
                    <q-item> Signup for Free trial, no CC needed </q-item>
                  </q-list>
                </q-card-section>
                <q-card-section class="q-pa-none" style="color: #f4655f">
                  <div class="text-center">
                    <span class="text-h3 text-center">$4.99</span>/mo
                  </div>
                </q-card-section>
                <q-card-section>
                  <div class="text-center q-px-lg">
                    <q-btn size="md" class="full-width q-pa-xs" style="background: #f4655f; color: white"
                      label="Try for Free" to="app/register" />
                    <br />
                    <div class="q-mt-md">Terms and Conditions apply</div>
                  </div>
                </q-card-section>
              </q-card>
            </div>
            <!-- <div class="col-lg-3 col-md-3 col-xs-12 col-sm-6 q-px-lg">
              <q-card>
                <q-card-section class="text-white q-pa-md" style="background: #8b3bbd">
                  <div class="text-h6 text-center">PREMIUM Plan</div>
                </q-card-section>
                <q-card-section class="q-pa-md">
                  <q-list dense padding style="border-bottom: 1px solid lightgrey">
                    <q-item><span class="text-weight-bold">Comprehensive Storage</span></q-item>
                    <q-item> 100 scans/month </q-item>
                    <q-item> 300 Product Saves + 100 Watchlist Ingredients </q-item>
                    <q-item> Signup for Free trial, no CC needed </q-item>
                  </q-list>
                </q-card-section>
                <q-card-section class="q-pa-none" style="color: #8b3bbd">
                  <div class="text-center">
                    <span class="text-h3 text-center">$9.99</span>/mo
                  </div>
                </q-card-section>
                <q-card-section>
                  <div class="text-center q-px-lg">
                    <q-btn size="md" class="full-width q-pa-xs" :style="'background: #8b3bbd; color: white'"
                      label="Try for Free" to="app/register" />
                    <br />
                    <div class="q-mt-md">Terms and Conditions apply</div>
                  </div>
                </q-card-section>
              </q-card>
            </div> -->
            <!-- <div class="col-lg-3 col-md-3 col-xs-12 col-sm-6 q-px-lg">
              <q-card>
                <q-card-section class="text-white" style="background: #3b97d1">
                  <div class="text-h6 text-center">AI Token Top Up's</div>
                </q-card-section>
                <q-card-section class="q-pa-md">
                  <q-list dense padding style="border-bottom: 1px solid lightgrey">
                    <q-item><span class="text-weight-bold">Clarity at a Small Cost</span></q-item>
                    <q-item> Top up scan credits. </q-item>
                    <q-item> Subscribe & save products + watchlist ingredients</q-item>
                    <q-item> Signup for Free trial, no CC needed </q-item>
                  </q-list>
                </q-card-section>
                <q-card-section class="q-pa-none" style="color: #3b97d1">
                  <div class="text-center">
                    <span class="text-h3 text-center">Buy</span>
                  </div>
                </q-card-section>
                <q-card-section>
                  <div class="text-center q-px-lg">
                    <q-btn size="md" class="full-width q-pa-xs" style="background: #3b97d1; color: white"
                      label="Try for Free" to="app/register" />
                    <br />
                    <div class="q-mt-md">Terms and Conditions apply</div>
                  </div>
                </q-card-section>
              </q-card>
            </div> -->
          </div>
          <br />
          <br />
        <!-- </div> -->
      </div>
      <!--Contact Us Form-->
      <q-separator />
      <div class="" id="id_contact">
      <!-- <div class="contact_us" id="id_contact">   -->
        <!-- <div style="background-color: #000000AA !important"> -->
          <div class="row q-pt-xl">
            <div class="col-md-12 col-lg-12 col-xs-12 col-sm-12">
              <h5 class="text-center ">
                Contact Us
                <br />
                <span class="text-center text-h6">Have an issue or suggestion? Please contact use with the details and
                  we'll get right back to you.</span>
              </h5>
            </div>
          </div>
          <q-form ref="myContactForm" @submit="sendContactMessage" @reset="onReset" class="q-gutter-md">
            <div class="row text-center flex flex-center q-pb-xl">
              <div class="col-md-6 col-lg-6 col-sx-12 col-sm-12 q-gutter-lg q-px-xl q-pb-none q-ma-none">
                <q-input square clearable outlined :bg-color="bgColor" v-model="form.name" label="Your name *" hint=""
                  lazy-rules :rules="[val => val && val.length > 0 || 'Please type something']">
                  <template v-slot:append>
                    <q-icon name="event" :style="'color:' + theme_color" />
                  </template>
                </q-input>
                <q-input square clearable outlined :bg-color="bgColor" v-model="form.email" label="Your Email *"
                  :rules="[val => isValidEmail(val) || 'Invalid email address']">
                  <template v-slot:append>
                    <q-icon name="email" :style="'color:' + theme_color" />
                  </template>
                </q-input>
              </div>
              <div class="col-md-6 col-lg-6 col-sx-12 col-sm-12 q-gutter-lg q-px-xl q-pb-none q-ma-none">
                <q-input square clearable outlined class="" type="textarea" :bg-color="bgColor" label="Your Message *"
                  v-model="form.message"
                  :rules="[val => isValidMessage(val) || 'Message must be 10 to 2000 characters']">
                  <template v-slot:append>
                    <q-icon name="message" :style="'color:' + theme_color" />
                  </template>
                </q-input>
              </div>
            </div>
            <div class="row flex flex-center text-center q-pb-xl q-mt-md">
              <div>
                <q-btn label="Submit" type="submit" :style="'background:' + theme_color + '; color: white'" />
                <q-btn id="resetButton" label="Reset" type="reset" :style="'color:' + theme_color" flat
                  class="q-ml-sm" />
              </div>
            </div>
          </q-form>
        <!-- </div> -->
      </div>
      <!-- Footer -->
    </div>
  </q-page>
  <!-- </q-layout> -->
</template>

<script setup>

import { ref, computed, inject } from "vue";
import { useQuasar, colors } from "quasar";

const quasar = useQuasar();
const { getPaletteColor } = colors

const theme_color = ref(getPaletteColor('secondary'));
const bgColor = computed(() => quasar.dark.isActive ? 'dark' : 'white');
const myContactForm = ref(null)

const form = ref({
  // Your form fields here...
  name: null,
  email: null,
  message: null
});

const blogPosts = [
  {
    id: "blog1",
    title: "Blog Title 1",
    description: "Blog Description 1",
    preview: "/images/bing3/bing30b.webp",
    excerpt: "Lorem ipsum odor amet, consectetuer adipiscing elit. Auctor curae sollicitudin nostra aptent pellentesque felis.",
    link: "/blog/blog-title-1",
  },
  {
    id: "blog2",
    title: "Blog Title 2",
    description: "Blog Description 2",
    preview: "/images/bing3/bing32b.webp",
    excerpt: "Lorem ipsum odor amet, consectetuer adipiscing elit. Auctor curae sollicitudin nostra aptent pellentesque felis.",
    link: "/blog/blog-title-2",
  },
  {
    id: "blog3",
    title: "Blog Title 3",
    description: "Blog Description 3",
    preview: "/images/bing3/bing34b.webp",
    excerpt: "Lorem ipsum odor amet, consectetuer adipiscing elit. Auctor curae sollicitudin nostra aptent pellentesque felis.",
    link: "/blog/blog-title-3",
  },
];

const isValidEmail = (email) => {
  const regex = /^[A-Za-z0-9+_.-]+@(.+)$/;
  return regex.test(email);
};

const isValidMessage = (message) => {
  const regex = /^[a-zA-Z0-9 ]{10,200}$/;
  return regex.test(message);
};

function onReset() {

  form.value = {
    name: null,
    email: null,
    message: null
  };
};

async function sendContactMessage() {
  console.log("sendContactMessage");
  console.log("name", form.value.name);
  console.log("email", form.value.email);
  console.log("message", form.value.message);
  // return;
}
</script>

<style lang="sass" scoped>
// $fgColor : #1780f7
// $bgColor : #4df3ff

// .page-header
//   position: relative
//   color: #fff
//   text-align: center
//   background-color: $bgColor
//   background-image: linear-gradient(120deg, $bgColor, $fgColor)

.bg-hero 
  background: rgb(219, 240, 235)
  background: linear-gradient(119deg,rgba(219, 240, 235, 1) 0%,rgba(249, 249, 249, 0.938813025210084) 32%,rgba(249, 249, 249, 1) 66%,rgba(219, 240, 235, 1) 100%)
  margin-top: -150px !important
  padding-top: 100px !important


.bg-section-lgradient 
  background: rgb(255, 255, 255)
  background: linear-gradient(73deg,rgba(255, 255, 255, 1) 0%,rgba(249, 249, 249, 0.938813025210084) 22%,rgba(249, 249, 249, 1) 47%,rgba(219, 240, 235, 1) 81%)

.my-benefits-card
  width: 90%
  height: 80%
  margin: 40px 20px 40px 20px

.my-blog-card
  width: 100%
  max-width: 300px 
  
.main_line
  font-size: 75px
  letter-spacing: 5px
  line-height: 60px
  font-weight: 600

.custom-caption
  text-align: center
  padding: 12px
  color: white

.custom-caption2
  text-align: center
  padding: 12px
  color: white
  background-color: rgba(0, 0, 0, .5)


.animation_2
  -webkit-animation: flipInX 2s ease-in-out 800ms both
  animation: flipInX 1s ease-in-out 800ms both


.description
  padding: 10px
  background-color: black
  color: white
  box-shadow: 1px 1px 2px #e6e6e6

.my-header
  width: 200px
  top: 0
  height: 45px
  color: black
  background-color: rgba(255,255,255, 0.8)
  text-transform: uppercase
  text-align: center
  font-size: 17px
  margin: 20px 0 0 68px
  padding: 25px

.my-text
  width: 100%
  top: 0
  height: 90px
  color: white
  text-align: center
  font-size: 15px
  margin: 79px 0 0 0
  padding: 20px
  line-height: normal
  font-family: Georgia, serif
  font-style: italic

.my-button-container
  width: 100%

.my-button
  text-decoration: none
  text-transform: uppercase
  margin: 0 0 20px 0
  text-align: center
  padding: 7px 14px
  background-color: #000
  color: #fff
  text-transform: uppercase
  box-shadow: 0 0 1px #000
  transition-delay: 0.2s

.my-button:hover
  box-shadow: 0 0 5px #000

.box-shadow:hover
  box-shadow: 0 10px 13px -6px rgba(0, 0, 0, 0.2), 0 20px 31px 3px rgba(0, 0, 0, 0.14), 0 8px 38px 7px rgba(0, 0, 0, 0.12) !important

.row.flex 
  display: flex
  flex-direction: row
  align-items: stretch

.team-header
  width: 100%
  top: 0
  height: 45px
  color: white
  text-transform: uppercase
  text-align: center
  font-size: 17px
  margin: 60px 0 0 0
  padding: 12px

.team-text
  width: 100%
  top: 0
  height: 90px
  color: white
  text-align: center
  font-size: 15px
  margin: 100px 0 0 0
  padding: 20px
  line-height: normal
  font-family: Georgia, serif
  font-style: italic

.herobanner
  // background: url(/images/bing3/bing10-1400x700.webp)
  background-size: cover
  background-position: center
  background-attachment: fixed
  background-repeat: no-repeat

.quote
  // background: url(/images/bing3/bing46-1400x700.webp)
  background-size: cover
  background-position: center
  background-attachment: fixed
  background-repeat: no-repeat

.pricing
  // background: url(/images/bing3/bing42-1400x700.webp)
  background-size: cover
  background-position: center
  background-attachment: fixed
  background-repeat: no-repeat

.contact_us
  // background: url(/images/bing3/bing6-1400x700.webp)
  background-size: cover
  background-position: center
  background-attachment: fixed
  background-repeat: no-repeat

.custom_tab
  width: 130px
</style>
