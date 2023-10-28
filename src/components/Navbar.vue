<template>
  <b-navbar toggleable="lg" type="light">
    <div class="d-flex align-items-center justify-content-between w-100 mx-3">
      <b-navbar-brand class="navbar-brand" href="#">PISTONS</b-navbar-brand>

      <b-collapse id="nav-collapse collapse" is-nav>
        <b-navbar-nav class="navbar-nav me-auto mb-2 mb-lg-0">
          <b-nav-item class="nav-item">
            <a class="nav-link" aria-current="page" href="#">NEW</a>
          </b-nav-item>
          <b-nav-item class="nav-item">
            <a class="nav-link" href="#">BRANKS</a>
          </b-nav-item>
          <b-nav-item class="nav-item">
            <a class="nav-link" href="#">COLLECTIONS</a>
          </b-nav-item>
          <b-nav-item class="nav-item">
            <a class="nav-link" href="#">ACCESSORIES</a>
          </b-nav-item>
          <b-nav-item class="nav-item">
            <a class="nav-link" href="#about">ABOUT</a>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
      <div>
        <FAI icon="cart-shopping" class="icon" />
        <b-button id="popover-target-1" class="icon-button">
          <FAI icon="magnifying-glass" class="icon" />
        </b-button>
        <b-popover target="popover-target-1" triggers="hover" placement="left">
          I am popover <b>component</b> content!
        </b-popover>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      </div>
    </div>
  </b-navbar>
</template>

<script>
export default {
  name: "nav-bar",
  components: {},
};
</script>

<style scoped>
.container {
  margin: 5px 5px;
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
  font-weight: bold;
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

.icon-button {
  border: none !important;
  background-color: transparent !important;
  color: black;
}

.icon-button:hover {
  color: black;
}

.collapse {
  max-width: fit-content;
}
</style>
