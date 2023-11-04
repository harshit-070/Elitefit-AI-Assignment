<template>
  <div>
    <Feedback />
    <Banner />
    <Navbar />
    <Hero />
    <About />
    <Testimonials />
    <Footer />
  </div>
</template>

<script>
import Banner from "./components/Banner.vue";
import Navbar from "./components/Navbar/Navbar.vue";
import Footer from "./components/Footer.vue";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About.vue";
import Testimonials from "./components/Testimonials/Testimonials.vue";
import Feedback from "./components/Feedback.vue";

export default {
  name: "App",
  components: {
    Banner,
    Navbar,
    Hero,
    About,
    Testimonials,
    Footer,
    Feedback,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Oxygen:wght@400;700&family=Pridi&family=Rubik:wght@300;400;500;700&display=swap");
* {
  font-family: "Oxygen", sans-serif;
}

html,
body {
  margin: 0;
  padding: 0;
  max-width: 100vw;
  font-size: 16px;
}

@media (max-width: 768px) {
  html,
  body {
    margin: 0;
    padding: 0;
    max-width: 100vw;
    font-size: 12px;
  }
}
</style>
