<template>
  <!-- <div>
    <div class="position-relative">
      <img
        src="../../assets/1.png"
        alt="Your Image"
        class="img-fluid w-100 h-50"
      />
      <svg
        viewBox="0 0 100 100"
        width="100"
        height="100"
        class="position-absolute top-50"
      >
        <defs>
          <path
            id="circle"
            d="
        M 50, 50
        m -37, 0
        a 37,37 0 1,1 74,0"
          />
        </defs>
        <text font-size="17">
          <textPath xlink:href="#circle">Made for you</textPath>
        </text>
      </svg>
    </div>
  </div> -->
  <div class="image-container">
    <img src="../../assets/1.png" alt="Image" class="image" />
    <div class="text-overlay">
      <div class="text-content">
        <!-- <svg>
          <defs>
            <path
              id="circle"
              d="
        M 50, 50
        m -37, 0
        a 84,37 0 1,1 76,0"
            />
          </defs>
          <text font-size="35">
            <textPath xlink:href="#circle">MADE FOR YOU</textPath>
          </text>
        </svg> -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "image_1",
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
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.text-content {
  text-align: center;
  color: black;
  padding: 10px;
}
</style>
