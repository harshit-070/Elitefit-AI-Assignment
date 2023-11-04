<template>
  <span>
    <b-navbar-toggle
      target="nav-collapse"
      @click="openNavbar"
    ></b-navbar-toggle>
    <div
      class="overlay"
      v-bind:class="{ 'd-block': isNavbarOpen, 'd-none': !isNavbarOpen }"
    >
      <div class="d-flex flex-column main" ref="navbar">
        <div class="w-100">
          <b-button
            @click="closeNavbar"
            class="icon-button float-end"
            aria-label="Close"
          >
            <FAI
              icon="xmark"
              class="icon"
              @click="closeNavbar"
              style="font-size: 20px; margin: 0; padding: 0 !important"
            />
          </b-button>
        </div>
        <ul>
          <li>NEW</li>
          <li>BRANDS</li>
          <li>COLLECTIONS</li>
          <li>ACCESSORIES</li>
          <li><a href="#about" @click="closeNavbar"> ABOUT </a></li>
        </ul>
      </div>
    </div>
  </span>
</template>
<script>
import { gsap } from "gsap";

export default {
  name: "List",
  data() {
    return { isNavbarOpen: false };
  },
  methods: {
    openNavbar() {
      this.isNavbarOpen = true;
      gsap.from(this.$refs.navbar, { x: 78, duration: 0.5 });
    },
    closeNavbar() {
      gsap.to(this.$refs.navbar, { x: 200, duration: 0.5 }).then(() => {
        this.isNavbarOpen = false;
        gsap.to(this.$refs.navbar, { x: 0, duration: 0.5 });
      });
    },
  },
};
</script>
<style scoped>
.overlay {
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 99999;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.71);
}
.main {
  position: absolute;
  top: 20px;
  right: 0;
  width: 70vw;
  padding: 0.5rem;
  border-top: 2px solid #9a9a9a;
  border-bottom: 2px solid #9a9a9a;
  border-left: 2px solid #9a9a9a;
  background-color: white;
  z-index: 5005;
}

ul {
  list-style: none;
}

li {
  font-weight: 600;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  padding: 3px;
}

li:hover {
  cursor: pointer;
}

li a {
  text-decoration: none;
  color: black;
}

.icon {
  font-size: 20px;
  margin-right: 10px;
}
.icon-button {
  border: none !important;
  background-color: transparent !important;
  color: black;
}

.icon-button:hover {
  color: black;
}

.navbar-toggler {
  border: none !important;
  color: black;
  padding: 0;
}

.navbar-toggler-icon {
  color: black;
}
</style>
