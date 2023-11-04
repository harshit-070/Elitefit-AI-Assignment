<template>
  <div id="about">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-12"><Swipe /></div>
        <div class="col-lg-6 col-md-12"><Content /></div>
      </div>
    </div>
  </div>
</template>

<script>
import Swipe from "./Swipe.vue";
import Content from "./Content.vue";

export default {
  name: "about",
  components: {
    Swipe,
    Content,
  },
};
</script>

<style>
#about {
  margin-bottom: 6rem;
}
</style>
