<template>
  <div class="hero m-0 p-0">
    <div class="row m-0 p-0">
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
    <div class="row">
      <div class="col-lg-6 col-md-12 order-lg-4">
        <div class="content"><Image_4 /></div>
      </div>
      <div class="col-lg-6 col-md-12 order-lg-3">
        <div class="content"><Image_3 /></div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6 col-md-12 order-lg-5">
        <div class="content"><Image_5 /></div>
      </div>
      <div class="col-lg-6 col-md-12 order-lg-5">
        <div class="content"><Image_6 /></div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12 col-md-12">
        <div class="content"><Image_7 /></div>
      </div>
    </div>
  </div>
</template>

<script>
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
};
</script>

<style>
.hero {
  max-width: 100%;
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
  height: auto;
}
</style>
