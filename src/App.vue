<template>
  <div>
    <Navbar />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: { Navbar },
};
</script>

<style>

@import url("https://fonts.googleapis.com/css2?family=Oxygen:wght@400;700&family=Pridi&family=Rubik:wght@300;400;500;700&display=swap");
* {
  font-family: "Oxygen", sans-serif;
}
</style>
