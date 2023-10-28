<template>
  <div>
    <Navbar />
    <Hero />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero/Hero";

export default {
  name: "App",
  components: { Navbar, Hero },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Oxygen:wght@400;700&family=Pridi&family=Rubik:wght@300;400;500;700&display=swap");
* {
  font-family: "Oxygen", sans-serif;
}
</style>
