<template>
  <div>
    <canvas id="canv" ref="canvas"></canvas>
  </div>
</template>

<script>
export default {
  mounted() {
    this.drawGeekyText();
  },
  methods: {
    drawGeekyText() {
      const canvas = this.$refs.canvas;
      const context = canvas.getContext("2d");
      context.font = "30px Oxygen";
      context.fillStyle = "white";
      context.textAlign = "center";

      const string = "M A D E  F O R  Y O U";
      const angle = Math.PI * 0.7; // in radians
      const radius = 150;

      context.translate(145, 200);
      context.rotate((-1 * angle) / 2);

      for (let i = 0; i < string.length; i++) {
        context.rotate(angle / string.length);
        context.save();
        context.translate(0, -1 * radius);
        context.fillText(string[i], 0, 0);
        context.restore();
      }
    },
  },
};
</script>

<style>
#canv {
  width: 475px;
  height: 150px;
}
</style>
