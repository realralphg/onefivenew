<template>
  <q-page class="">
    <div class="bg">
      <Hero />
      <Choose />
    </div>
    <div class="bg-white">
      <Why />
      <How />
    </div>
    <FindProv />
    <Find />
    <Join />
    <Testimonial />
    <Get />
    <Trusted />
    <Footer />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import Hero from "../components/Hero.vue";
import Choose from "../components/Choose.vue";
import Why from "../components/Why.vue";
import How from "../components/How.vue";
import Trusted from "../components/Trusted.vue";
import Footer from "../components/Footer.vue";
import Join from "../components/Join.vue";
import Find from "../components/Find.vue";
import FindProv from "../components/FindProv.vue";
import Get from "../components/Get.vue";
import Testimonial from "../components/Testimonial.vue";

export default defineComponent({
  name: "IndexPage",
  components: {
    Hero,
    Choose,
    Why,
    How,
    Trusted,
    Join,
    Footer,
    FindProv,
    Find,
    Get,
    Testimonial,
  },
});
</script>

<style scoped>
.bg {
  position: relative;
  top: 0%;
  height: 100%;
}
.bg::before {
  content: "";
  background: #f2f2f2;
  position: absolute;
  top: 40%;
  right: 0;
  height: 62%;
  width: 100%;
  z-index: 1;
}
</style>
