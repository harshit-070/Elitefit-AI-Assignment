<template>
  <div class="container">
    <div class="text">TESTIMONIALS</div>
    <div class="row m-0 p-0">
      <div
        v-for="testimonial in testimonials"
        :key="testimonial.name"
        class="col-lg-3 col-md-12 com-sm-12"
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
    init() {
      axios
        .get("https://elitefit4you.com/test-api/testimonials.json", {})
        .then((response) => {
          this.testimonials = response.data.testimonials;
          console.log(response.data);
        })
        .catch(() => {
          this.testimonials = [
            {
              name: "Alex P.",
              message:
                "I stumbled upon this shop, and their selection blew me away. The user-friendly website made my shopping experience a breeze!",
              image: "https://i.ibb.co/vmYY6tY/img1.png",
            },
            {
              name: "Emily S.",
              message:
                "The checkout process was seamless, and the responsive design worked flawlessly on my mobile device. I'll definitely be coming back!",
              image: "https://i.ibb.co/k29V4KN/img2.png",
            },
            {
              name: "David R.",
              message:
                "Their site's intuitive navigation made finding the perfect pen a joy. Five stars for both their products and web design!",
              image: "https://i.ibb.co/Mcz1SWT/img3.png",
            },
            {
              name: "Lisa M.",
              message:
                "I appreciate the attention to detail in both their pens and website. A visually stunning and user-focused online shop.",
              image: "https://i.ibb.co/94fW8xZ/img4.png",
            },
          ];
          // alert("Error while fetching data");
        });
    },
  },
  created() {
    this.init();
  },
};
</script>

<style scoped>
.container {
  text-align: center;
}

.text {
  color: #000;
  text-align: center;
  font-family: Oxygen;
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.5rem;
  margin-bottom: 3rem;
}

@media (max-width: 768px) {
  .text {
    font-size: 2rem;
    margin: 2rem;
  }
}
</style>
