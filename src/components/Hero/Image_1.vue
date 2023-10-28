<template>
  <div class="image-container">
    <img src="../../assets/1.png" alt="Image" class="image" />
    <div class="text-overlay">
      <div class="text-content">
        <CircularText />
        <span class="brand">PISTONS</span>
      </div>
    </div>
  </div>
</template>
<script>
import CircularText from "./CircularText.vue";

export default {
  name: "image_1",
  components: { CircularText },
};
</script>

<style scoped>
svg {
  fill: currentColor;
  transform-origin: center;
  letter-spacing: 2px;
}

.text-overlay {
  font-weight: 400;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}

.text-content {
  text-align: center;
  padding: 10px;
}

.brand {
  color: white;
  font-weight: 700;
  font-family: "Pridi", sans-serif;
  font-size: 2rem;
}
</style>
