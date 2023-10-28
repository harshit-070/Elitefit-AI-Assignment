<template>
  <div class="image-container">
    <img src="../../assets/3.png" alt="Image" class="image" />
    <div class="text-overlay">
      <div class="text-content">
        <span>MADE FOR THE BEST</span>
        <br />
        <span>CHANGE MAKERS</span>
        <br />
        <button>SHOP BRANDS</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "image_3",
};
</script>

<style scoped>
.text-overlay {
  font-size: 1.5rem;
  font-weight: 400;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  padding: 10px;
}

.text-content {
  text-align: center;
  color: black;
  padding: 10px;
}

button {
  background-color: black;
  border: 3px solid #ffecc1;
  border-radius: 50px;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 15px;
  margin: 10px;
  cursor: pointer;
  color: white;
  font-weight: 700;
}

text {
  font-size: 24px;
  font-weight: 400;
  line-height: none;
  letter-spacing: 2px;
}

@media (max-width: 768px) {
  .text-overlay {
    font-size: 10px;
  }

  button {
    font-size: 10px;
    margin: 5px;
    padding: 5px 10px;
  }
}
</style>
