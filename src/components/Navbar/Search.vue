<template>
  <span>
    <FAI icon="magnifying-glass" class="icon" @click="openSearch" />
    <div
      class="d-flex align-items-start justify-content-center search"
      ref="popover"
      v-bind:class="{ 'd-block': showSearch, 'd-none': !showSearch }"
    >
      <div class="d-flex align-items-center search-input">
        <input />
        <button class="search-button">SEARCH</button>
      </div>
      <FAI
        @click="closeSearch"
        icon="xmark"
        class="icon"
        style="font-size: 20px; margin: 0; padding: 0 !important"
      />
    </div>
  </span>
</template>
<script>
import { gsap } from "gsap";

export default {
  name: "Search",
  data() {
    return { showSearch: false };
  },

  methods: {
    openSearch() {
      this.showSearch = true;
      if (window.innerWidth <= 768) {
        gsap.from(this.$refs.popover, { y: -110, duration: 0.5 });
      } else {
        gsap.from(this.$refs.popover, { x: 100, duration: 0.5 });
      }
    },
    closeSearch() {
      if (window.innerWidth <= 768) {
        gsap.to(this.$refs.popover, { y: -150, duration: 0.5 }).then(() => {
          this.showSearch = false;
          gsap.to(this.$refs.popover, { y: 0, duration: 0.5 });
        });
      } else {
        gsap.to(this.$refs.popover, { x: 200, duration: 0.5 }).then(() => {
          this.showSearch = false;
          gsap.to(this.$refs.popover, { x: 10, duration: 0.5 });
        });
      }
    },
  },
};
</script>
<style scoped>
.icon {
  font-size: 20px;
  margin-right: 10px;
}

.search {
  padding: 10px;
  position: absolute;
  top: 86px;
  right: 80px;
  z-index: 500;
  background-color: white;
}

.search-input {
  padding: 10px;
}

.search-button {
  background-color: black;
  border: 3px solid #ffecc1;
  border-radius: 50px;
  padding: 5px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 15px;
  margin: 2px;
  cursor: pointer;
  color: white;
  font-weight: 700;
}

input {
  border-radius: 50px;
  height: 33px;
  width: 70%;
  border: 1px solid black;
}

@media (max-width: 768px) {
  .search {
    padding: 10px;
    position: absolute;
    top: 100px;
    left: 0;
    width: 100vw;
    z-index: 500;
    background-color: white;
  }
}
</style>
