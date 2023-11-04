<template>
  <div class="hero">
    <div class="row hero-row-1 m-0 p-0">
      <div class="col-lg-6 col-md-12 order-lg-1">
        <div class="content">
          <Image_1 />
        </div>
      </div>
      <div class="col-lg-6 col-md-12 order-lg-2">
        <div class="content">
          <Image_2 />
        </div>
      </div>
    </div>
    <div class="row hero-row-2 m-0 p-0">
      <div class="col-lg-6 col-md-12 order-lg-4">
        <div class="content"><Image_4 /></div>
      </div>
      <div class="col-lg-6 col-md-12 order-lg-3">
        <div class="content"><Image_3 /></div>
      </div>
    </div>
    <div class="row hero-row-3 m-0 p-0">
      <div class="col-lg-6 col-md-12 order-lg-5">
        <div class="content"><Image_5 /></div>
      </div>
      <div class="col-lg-6 col-md-12 order-lg-5">
        <div class="content"><Image_6 /></div>
      </div>
    </div>
    <div class="row hero-row-4 m-0 p-0">
      <div class="col-lg-12 col-md-12">
        <div class="content"><Image_7 /></div>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import Image_1 from "./Image_1.vue";
import Image_2 from "./Image_2.vue";
import Image_3 from "./Image_3.vue";
import Image_4 from "./Image_4.vue";
import Image_5 from "./Image_5.vue";
import Image_6 from "./Image_6.vue";
import Image_7 from "./Image_7.vue";
export default {
  name: "Hero",
  components: {
    Image_1,
    Image_2,
    Image_3,
    Image_4,
    Image_5,
    Image_6,
    Image_7,
  },

  mounted: function () {
    this.scrollAnimation();
  },
  methods: {
    scrollAnimation() {
      gsap.timeline({
        scrollTrigger: {
          trigger: ".hero-row-1",
          start: "135px 135px",
          end: "bottom 135px",
          markers: false,
          scrub: true,
          pin: true,
          pinSpacing: false,
        },
      });
      gsap.timeline({
        scrollTrigger: {
          trigger: ".hero-row-2",
          start: "135px 135px",
          end: "bottom 135px",
          markers: false,
          scrub: true,
          pin: true,
          pinSpacing: false,
        },
      });
      gsap.timeline({
        scrollTrigger: {
          trigger: ".hero-row-3",
          start: "135px 135px",
          end: "bottom 135px",
          markers: false,
          scrub: true,
          pin: true,
          pinSpacing: false,
        },
      });
      gsap.timeline({
        scrollTrigger: {
          trigger: ".hero-row-4",
          start: "135px 135px",
          end: "135px 135px",
          markers: false,
          scrub: true,
          pin: true,
          pinSpacing: false,
        },
      });
    },
  },
};
</script>

<style>
.hero {
  max-width: 100%;
  min-width: 100%;
  margin-top: 135px;
}
.hero-row-1 {
  z-index: 1;
}
.hero-row-2 {
  z-index: 2;
}
.hero-row-3 {
  z-index: 3;
}
.hero-row-4 {
  z-index: 4;
}
.row > * {
  margin: 0 !important;
  padding: 0 !important;
}

.content {
  max-width: 100%;
}

.image-container {
  position: relative;
}

.image {
  min-width: 100%;
  max-width: 100%;
  max-height: 100%;
  min-height: 100%;
}
</style>
