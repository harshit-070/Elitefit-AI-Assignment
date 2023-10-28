<template>
  <div class="footer">
    <h1>PISTONS</h1>
    <span>STAY CONNECTED</span>
    <div>
      <FAI icon="fa-brands fa-square-facebook" class="icon" />
      <FAI icon="fa-brands fa-youtube" class="icon" />
      <FAI icon="fa-brands fa-square-instagram" class="icon" />
      <FAI icon="fa-brands fa-twitter" class="icon" />
      <FAI icon="fa-regular fa-envelope" class="icon" />
    </div>
  </div>
</template>

<script>
export default {
  name: "footer",
};
</script>

<style scoped>
.footer {
  margin-top: 5rem;
  min-width: 100%;
  background-color: black;
  color: white;
  text-align: center;
  padding: 25px;
}

h1 {
  font-family: "Pridi", sans-serif;
  font-size: 40px !important;
  font-weight: 400;
}

span {
  letter-spacing: 2.4px;
  font-weight: 700;
  font-size: 1.2rem;
}

.icon {
  color: white;
  margin: 5px;
  font-size: 30px;
}
</style>
