<template>
  <div class="container m-0">
    <div class="image-container">
      <img src="../../assets/0.png" alt="Image" />
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
  padding: 2rem;
}

.image-container {
  max-width: 80%;
  height: auto;
  overflow-x: scroll;
}

@media (max-width: 768px) {
  .image-container {
    max-width: 100%;
  }

  img {
    height: 18rem;
  }
}
</style>
