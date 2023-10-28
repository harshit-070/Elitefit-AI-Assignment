<template>
  <div>
    <Navbar />
    <Hero />
    <About />
    <Testimonials />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About.vue";
import Testimonials from "./components/Testimonials/Testimonials.vue";

export default {
  name: "App",
  components: { Navbar, Hero, About, Testimonials },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Oxygen:wght@400;700&family=Pridi&family=Rubik:wght@300;400;500;700&display=swap");
* {
  font-family: "Oxygen", sans-serif;
}
</style>
