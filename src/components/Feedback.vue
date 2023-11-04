<template>
  <div class="sticky">
    <span> FEEDBACK </span>
  </div>
</template>

<script>
export default {
  name: "Feedback",
};
</script>

<style scoped>
.sticky {
  margin: 0;
  padding: 0;
  position: fixed;
  top: 10rem;
  right: 0;
  z-index: 5000;
  writing-mode: sideways-lr;
  border-top: 2px solid #9a9a9a;
  border-bottom: 2px solid #9a9a9a;
  border-left: 2px solid #9a9a9a;
  background: #fff;
  padding-bottom: 5px;
}
span {
  padding: 10px;
  color: #000;
  font-size: 0.7rem;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.9px;
}
</style>
