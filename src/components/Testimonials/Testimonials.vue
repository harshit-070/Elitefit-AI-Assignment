<template>
  <div class="container">
    <div class="row m-0 p-0">
      <div
        v-for="testimonial in testimonials"
        :key="testimonial.name"
        class="col-lg-3 col-md-6 com-sm-12"
      >
        <Card
          :message="testimonial.message"
          :image="testimonial.image"
          :name="testimonial.name"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Card from "./Card.vue";
Card;
export default {
  name: "testimonials",
  components: {
    Card,
  },
  data() {
    return {
      testimonials: [],
      isFlipped: false,
    };
  },
  methods: {
    flipCard(isHovered) {
      this.isFlipped = isHovered;
    },
  },
  created() {
    axios
      .get("https://elitefit4you.com/test-api/testimonials.json")
      .then((response) => {
        this.testimonials = response.data.testimonials;
        console.log(response.data);
      })
      .catch(() => alert("Error while fetching data"));
  },
};
</script>

<style scoped></style>
