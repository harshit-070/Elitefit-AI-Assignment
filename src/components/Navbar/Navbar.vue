<template>
  <span class="container">
    <b-navbar toggleable="lg" type="light">
      <div class="d-flex align-items-center justify-content-between w-100 mx-3">
        <b-navbar-brand class="navbar-brand" href="#">PISTONS</b-navbar-brand>

        <b-collapse is-nav>
          <b-navbar-nav class="navbar-nav me-auto mb-2 mb-lg-0">
            <b-nav-item class="nav-item nav-link"> NEW </b-nav-item>
            <b-nav-item class="nav-item nav-link"> BRANDS </b-nav-item>
            <b-nav-item class="nav-item nav-link"> COLLECTIONS </b-nav-item>
            <b-nav-item class="nav-item nav-link"> ACCESSORIES </b-nav-item>
            <b-nav-item class="nav-item nav-link" href="#about"
              >ABOUT
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
        <div class="d-flex align-items-center">
          <FAI icon="cart-shopping" class="icon" />
          <Search />
          <List />
        </div>
      </div>
    </b-navbar>
  </span>
</template>

<script>
import List from "./List.vue";
import Search from "./Search.vue";

export default {
  name: "nav-bar",
  components: { Search, List },
};
</script>

<style scoped>
.container {
  position: fixed;
  top: 35px;
  min-width: 100vw;
  z-index: 300;
  background-color: white;
}

.icon {
  font-size: 20px;
  margin-right: 10px;
}

.navbar-brand {
  font-family: "Pridi", sans-serif;
  font-size: 40px !important;
  font-weight: 400;
}

.nav-item {
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 4px;
}

.nav-link {
  color: black !important;
}

.navbar-toggler {
  border: none !important;
}

.navbar-toggler-icon {
  color: black;
}

.collapse {
  max-width: fit-content;
}
</style>
