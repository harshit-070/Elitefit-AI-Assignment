<template>
  <div class="container">
    <div class="image-container">
      <img src="../../assets/0.png" alt="Image" class="img-responsive" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Swipe",
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  padding: 2rem;
}

.image-container {
  height: 100%;
  width: 100%;
  overflow-x: scroll;
  position: relative;
  aspect-ratio: 573/450;
}

img {
  height: 100%;
}
</style>
