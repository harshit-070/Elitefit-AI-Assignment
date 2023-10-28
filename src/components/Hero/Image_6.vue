<template>
  <div class="image-container">
    <img src="../../assets/6.png" alt="Image" class="image" />
    <div class="text-overlay">
      <div class="text-content">
        <span>SAVOUR THE PRESENT</span>
        <br />
        <button>SHOP MONT BLANC</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "image_2",
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

span {
  font-size: 24px;
  font-weight: 400;
  line-height: none;
  letter-spacing: 2px;
}

@media (max-width: 768px) {
  .text-overlay {
    font-size: 10px;
  }

  span {
    font-size: 10px;
  }

  button {
    font-size: 10px;
    margin: 5px;
    padding: 5px 10px;
  }
}
</style>
