<template>
  <div class="image-container">
    <img src="../../assets/7.png" alt="Image" class="image" />
    <div class="text-overlay">
      <div class="text-content">
        <div class="text">WHERE QUALITY MEETS CLASS.</div>
        <br />
        <CircularText />
        <span class="brand">PISTONS</span>
        <br />
        <button>SHOP THE FALL 2023 COLLECTION</button>
      </div>
    </div>
  </div>
</template>
<script>
import CircularText from "./CircularText";

export default {
  name: "image_7",
  components: {
    CircularText,
  },
};
</script>

<style scoped>
.text-overlay {
  font-weight: 400;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  padding: 10px;
}

.text-content {
  font-size: 1rem;
  text-align: center;
  color: white;
  padding: 10px;
}

button {
  background-color: white;
  border: 4px solid #ffecc1;
  border-radius: 50px;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 15px;
  margin: 10px;
  cursor: pointer;
  color: #000;
  font-weight: 700;
}

.text {
  font-size: 24px;
  font-weight: 400;
  line-height: none;
  letter-spacing: 2px;
  margin-bottom: 2.5rem;
}

.brand {
  color: white;
  font-weight: 700;
  font-family: "Pridi", sans-serif;
  font-size: 2rem;
}

@media (max-width: 768px) {
  .image-container {
    min-height: 500px;
  }

  .text {
    font-size: 10px;
  }

  .text-overlay {
    font-size: 10px;
    background-color: black;
  }

  .brand {
    font-size: 1rem;
  }

  button {
    font-size: 10px !important;
    margin: 5px;
    padding: 5px 10px;
  }
}
</style>
