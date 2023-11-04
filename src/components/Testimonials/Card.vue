<template>
  <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <img
          :src="image"
          alt="Avatar"
          style="width: 300px; height: 300px"
          class="card_image"
        />
        <div class="text-overlay">
          <div class="text-content">
            <span>{{ name }}</span>
          </div>
        </div>
      </div>
      <div
        class="flip-card-back d-flex justify-content-center align-items-center"
      >
        "{{ message }}"
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "card",
  props: {
    name: String,
    message: String,
    image: String,
  },
};
</script>

<style scoped>
.flip-card {
  background-color: transparent;
  width: 300px;
  height: 300px;
  perspective: 1000px;
  border-radius: 50px;
  margin: 10px auto;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 20px;
}

.flip-card-front {
  background-color: #bbb;
  color: black;
}

.flip-card-back {
  padding: 10px;
  background-color: black;
  color: white;
  transform: rotateY(180deg);
}

.card_image {
  border-radius: 20px;
}

.text-overlay {
  font-weight: 700;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  padding: 10px;
}

.text-content {
  text-align: center;
  color: white;
  padding: 10px;
  font-size: 1.6rem;
}
</style>
