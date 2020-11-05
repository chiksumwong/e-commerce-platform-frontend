<template>
  <!-- To Top Button -->
  <b-button class="to-top-button" v-if="isTopButtonShow" @click="toTop()">
    <b-icon icon="chevron-up" font-scale="2">></b-icon>
  </b-button>
</template>

<script>
export default {
  data() {
    return {
      // To Top Button
      isTopButtonShow: false
    };
  },
  methods: {
    // To Top Button
    handleScroll() {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        this.isTopButtonShow = true;
      } else {
        this.isTopButtonShow = false;
      }
    },
    toTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style scoped>
/* To Top Button */
.to-top-button {
  position: fixed;
  bottom: 80px;
  right: 20px;
  z-index: 99;
  background-color: #016ab4;
  padding: 8px;
}
</style>
